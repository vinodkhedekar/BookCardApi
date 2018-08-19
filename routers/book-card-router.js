var express = require('express');
var BookCard = require('../models/book-card-model');

var bookCardRouter = express.Router();
bookCardRouter.use(function (req, res, next) {
  // do authentication 
  console.log('Logging of request will be done here');
  next(); // make sure we go to the next routes and don't stop here
});

bookCardRouter
  .route('/bookCards')
  .post(function (request, response) {

    console.log('POST /bookCards' );

    var bookCard = new BookCard(request.body);
    
    bookCard.save();

    response.status(201).send(bookCard);
  })
  .get(function (request, response) {

    console.log('GET /bookCards');

    BookCard.find(function (error, bookCards) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(bookCards);

      response.json(bookCards);
    });
  });

  bookCardRouter
  .route('/bookCards/:bookCardId')
  .get(function (request, response) {

    console.log('GET /bookCards/:bookCardId');

    var bookCardId = request.params.bookCardId;

    BookCard.findOne({ id: bookCardId }, function (error, bookCard) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(bookCard);

      response.json(bookCard);

    });
  })
  .put(function (request, response) {

    console.log('PUT /bookCards/:bookCardId');

    var bookCardId = request.params.bookCardId;

    BookCard.findOne({ id: bookCardId }, function (error, bookCard) {

      if (error) {
        response.status(500).send(error);
        return;
      }

      if (bookCard) {
        bookCard.title = request.body.title;
        bookCard.cover = request.body.cover;
        bookCard.author = request.body.author;
        bookCard.link = request.body.link;
        
        bookCard.save();

        response.json(bookCard);
        return;
      }

      response.status(404).json({
        message: 'BookCard with id ' + bookCardId + ' was not found.'
      });
    });
  })
  .patch(function (request, response) {

    console.log('PATCH /bookCards/:bookCardId');

    var bookCardId = request.params.bookCardId;

    BookCard.findOne({ id: bookCardId }, function (error, bookCard) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (bookCard) {

        for (var property in request.body) {
          if (request.body.hasOwnProperty(property)) {
            if (typeof bookCard[property] !== 'undefined') {
              bookCard[property] = request.body[property];
            }
          }
        }

        bookCard.save();

        response.json(bookCard);
        return;
      }

      response.status(404).json({
        message: 'BookCard with id ' + bookCardId + ' was not found.'
      });
    });
  })
  .delete(function (request, response) {

    console.log('DELETE /bookCards/:bookCardId');

    var bookCardId = request.params.bookCardId;

    BookCard.findOne({ id: bookCardId }, function (error, bookCard) {
      
      if (error) {
        response.status(500).send(error);
        return;
      }

      if (bookCard) {
        bookCard.remove(function (error) {

          if (error) {
            response.status(500).send(error);
            return;
          }

          response.status(200).json({
            'message': 'BookCard with id ' + bookCardId + ' was removed.'
          });
        });
      } else {
        response.status(404).json({
          message: 'BookCard with id ' + bookCardId + ' was not found.'
        });
      }
    });
  });

module.exports = bookCardRouter;