# RESTful API with Node.js, Express.js, Mongoose and MongoDB.

Example of a RESTful API built with Node.js, Express.js, Mongoose and MongoDB.

## RESTful API endpoints

### GET `/api/bookCards`

Get all Bookcards.

+ Method: `GET`
+ URL: `/api/bookCards`

### POST `/api/bookCards`

Create a new bookCard.

+ Method: `POST`
+ URL: `/api/bookCards`
+ Body:

```js
{
  "id": 1000,
  "title": "React.js Essentials",
  "author": "React Author",
  "link": "react@react.com",
  "cover": "React"
}
```

### GET `/api/bookCards/:bookCardId`

Get bookCard with specific id.

+ Method: `GET`
+ URL: `/api/bookCards/1000`

### PUT `/api/bookCards/:bookCardId`

Update entire bookCard with specific id.

+ Method: `PUT`
+ URL: `/api/bookCards/1000`
+ Body:

```js
{
  "id": "1",
  "title": "React.js Essentials",
  "author": "React Author",
  "link": "react@react.com",
  "cover": "React"
}
```

### PATCH `/api/bookCards/:bookCardsId`

Update part of the bookCard with specific id.

+ Method: `PATCH`
+ URL: `/api/bookCards/1000`
+ Body:

```js
{
  "cover": "React"
}
```

### DELETE `/api/bookCards/:1000`

Delete bookCard with specific id.

+ Method: `DELETE`
+ URL: `/api/bookCards/1000`

## Install

`npm install`

## Run

0. Make sure MongoDB is running, if not: `sudo ~/mongodb/bin/mongod` (assuming you have `~/mongodb` directory).
1. `npm run start`
