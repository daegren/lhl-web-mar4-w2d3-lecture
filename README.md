# CRUD w/ Express

## REST

> **Representational State Transfer** (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, termed _RESTful_ Web services (RWS), provide interoperability between computer systems on the Internet. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations.
> <https://en.wikipedia.org/wiki/Representational_state_transfer>

## What is CRUD

CRUD is an acronym that stands for:

- **C**reate
- **R**ead
- **U**pdate
- **D**elete

When working with resources these are the 4 actions that we work with.

## RESTful Routes

RESTful routes follow the following convetion: `/collection_name/:id` where the `collection_name` is the name of the resource we want to work with. This could be `users`, `photos`, `posts`, etc.

In our example, we created 7 routes, centered around a `users` resource.

| Name    | Path            | HTTP Verb |
| :------ | :-------------- | :-------: |
| Index   | /users          |    GET    |
| Show    | /users/:id      |    GET    |
| New     | /users/new      |    GET    |
| Create  | /users          |   POST    |
| Edit    | /users/:id/edit |    GET    |
| Update  | /users/:id      |    PUT    |
| Destroy | /users/:id      |  DELETE   |

### `GET /users`

Our first **READ** route, this page lists all the users in our system

### `GET /users/:id`

Another **READ** route, this page *show*s a single user

### `GET /users/new`

Part of the **CREATE** part, this page shows a form to create a new user

> N.B. This route needs to be defined before the `/users/:id` route otherwise it will match that route instead of this one as `new` will be used as the `:id` parameter in that route.

### `POST /users`

This route actually **CREATE**s a user, handling the data entered into the `/users/new` route

### `GET /users/:id/edit`

Part of the **UPDATE** part, this page shows a form to update user information.

### `PUT /users/:id`

This route actually **UPDATE**s a user, handling the data entered into the `/users/:id/edit` route

> N.B. This is our first route which doesn't use `GET` or `POST`, instead we use the `PUT` method to denote this should be an **UPDATE** and not a **CREATE**

### `DELETE /users/:id`

This route will **DELETE** a user, removing it's data from the server.

> N.B. This route uses the `DELETE` method instead of a `GET` or `POST`
