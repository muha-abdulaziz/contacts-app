# Contact App

To start the app

- Install the app dependances `npm install`
- Run the app `npm start` or `node server.js`

## Routes or the API endpoints

```
GET   /contacts -> retreve all contacts
POST  /contacts -> create a new contact

GET    /contacts/{contactId} -> retreve a contact by its id
PATCH  /contacts/{contactId} -> update one value or more of a contact
DELETE /contacts/{contactId} -> delete a contact
```

## Contact schema and app assumptions

All contact keys are small (name, email, phones). The description of each in the following

- name: string of maximum 50 characters, empty string is invalid and any character allowed
- email: a vaild email address
- phones: array of numbers and should provaid at least one number. phone number must be numbers only, spaces, plus sign or parenthesis are not allowed. examples
  - Not allowed: +675012345567
  - Not allowed: +1 (123) 324 672
  - allowed: 001123324672

## App structure

- app.js is the starter app, but the server is separated from the app, to make testing easy
- most logic inside api directory, the structure
  - routes.js: has the main routes (every module can have a module)
  - utils: helper functions
  - middelwares: any global middelware
  - modules: module is of one thing responsible, it like app in django or component in angular, it has every thing related to this thing (controller, routes, module, input validation schemas, helper functions...etc), and it may has logic only without controller

```bash
├── api
│   ├── middelwares
│   ├── modules
│   |   └── contacts
│   ├── routes.js
│   └── utils
├── app.js
├── config
├── openapi.yml // Api document (no document for now)
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── task_details
└── test
    ├── integration
    └── unit
```

## App configuration

Configuration sets in two ways

- In a file inside config directory
- ENV vars with config files

For more about config [see](https://www.npmjs.com/package/config)

The only configuration in this app is the log level, and its value is one of (emerg, alert, crit, error, warning, notice, info or debug), for more see [winston](https://www.npmjs.com/package/winston#logging-levels) documentation.

Example of config:

```json
{
    "main": {
        "logLevel": "info"
    }
}
```
