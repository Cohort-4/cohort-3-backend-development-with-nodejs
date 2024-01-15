### Creating RESTFULAPI CRUD
-----------------------------

### Requirements
----------------
- nodejs
- git
- expressjs
- postman

### Processes
--------------
- Initialize backend js application to create `package.json` file
  
  `npm init`

  or

  `npm init -y`

- Create an entry point(starting point) `app.js` for the server.
  
- Then install the followings:
  
  - `npm install --save express`
  
- Then in the entry file write the following codes
  
  - `import express from "express"`
  - `import bodyParser from "body-parser"`

- In the `package.json` file add `"type": "module"` in order to use the newest version of es6 features

- Create `.gitignore` at the root of the folder to ignore pushing some files and folders meant for secret and development alone.
  
- In order to avoid restarting the server all the time after making changes to our application, we can install a package
  
    - `npm install --save-dev nodemon`
  
- Then head to the package.json file to add a start script

    - `"start": "nodemon app.js"`
- Now that our server is running, try visit `http:localhost:8000`, you will see `Cannot GET /` on the browser because there is no route yet.

- Create `get` route that will takes the path and a callback function as a parameter.

- Then let run our code ouce again
  
- Let start by creating user route