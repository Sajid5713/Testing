# Package.json

It is a configuration file for the npm, it manages all packages/dependencies required by our project.
It is created after the command 

    # npm init

# Package-lock.json

It keep track of the exact packages version that are required for the projects.
It is created after the command :

    # npm install -D parcel ( -D attribute show that the bundler need is for development )

It also keep track of the exact of the version via `hash`
` "integrity": "sha512-AWu4UB+akBdskzvT3KGVHIdacU9f7cI678DQQ1jKQuc9yZz5D0VFt3ocFBOmvDfEQDF0uH3jjtJR7fnuvX7Biw==", `

# Parcel (package)

It is a bundler that is used to bundle the files, like compressing, optimize things for us; to make the app ready for the production.

    - Dev build
    - Local Server
    - HMR = Hot Module Replacement
    - Minification
    - Bundling 
    - Compressing 
    - Differential Bundling ( to support all browsers & format)
    - Tree Shaking  -- Remove unused code
    - Diagnostics
    - Consistent Caching 
    - Caching to make faster dev builds
    - Code Splitting
    - Https
    - Error handling

# gitignore

It is used to ignore files that are no needed for to pushed into git. 
# Note: Donot push files that we can recreate again like node-modules etc

# Transitive Dependencies

Dependencies of dependency are called transitive dependencies. Like parcel itself need dependencies to perform various things.

# node_modules

It is the database that contain all the code/packages. We can recreate `node_modules` using the `package.json` and `package-lock.json`

# npm vs npx

`npm` is used for calling command of NPM and `npx` is used to execute a package

`npx parcel index.html`

# npx parcel index.html

If there is an script call inside the index.html it will through error saying `scripts` can't have imports or exports.
To remove this error we should define `type="module"`, so that it can understand that it is not a normal JS.

  # Error : `@parcel/transformer-js: Browser scripts cannot have imports or exports.`

  # ` <script type='module' src="./App.js"></script> `

# To make a production build we can run command like
    - `npx parcel build index.html `

# Production Build Generation

When creating production build we use command ` npx parcel build index.html ` and it will through error if the last parameter is not set inside the `package.json`. 

# BrowserList

If handle the differential bundling for the various browsers and we can define the list in the `package.json` like:

     - 'browserlist': [
        'last 2 versions'
     ]

# Scripts

While `npx parcel index.html` is used to run a dev build for the app and host it to dev-sever using the `dist` and `parcel-cache` to make the build faster. We can also define custom scripts to run the dev/prod by defining the scripts in the 
`package.json` as below: 

     "scripts": {
        "start": " parcel index.html",
        "build": " parcel build index.html",
        "test": "jest"
    },

After above we can run code like `npm run start` / `npm start` and for production build `npm run build`.


# React Element

The React element in the end of the day is a JS object.
    `ReactElement => JS (Object) => HTML Node`

# Babel

It is a compiler/transpiler thats jobs is to convert the ReactElement / JS Object into code that Browser / JS Engine could 
understand. The code written in JSX is transpiled by the BABEL with Parcel as Administrator.    
    `JSX => React.createElement => ReactElement (JS Object) => render(xxx) into HTML format`

    # Transpiler
    # It convert code into older version that a JS engine could understand, so the APP could run on all browser and versions. 

# JSX

The facebook developer develop a way to write the code in a HTML alike syntax, rather then to be written in Core react; which
was not developer friendly. With JSX now developer can write the code in HTML/XML like format and then the code is quickly
transpiled by `BABEL` so that the JS Engine could understand and then it could rendered on to DOM.

# Component 
React Component is a `Function or Class ` that return a piece of JSX/React Element to be render to UI elements.
Every thing inside React is a component.

There are two types of component that are used in React. 
 `Class Based Components ( old one)`
 `Functional Components ( latest one)`

- Inside JSX by defining the `curly brace {}`, we can execute any piece of JS code.
- The React Component should in Camel-Case, so that BABEL could understand it a ReactElement / React Component.
- ReactComponents could be called as `<ComponentName/>`.
- Calling a component inside another component is called `Component Composition`.

# React Fragments <></>

- For multiples nodes inside `JSX`, we use `<></>` fragments with return to render the code onto DOM.

These syntax are same for calling a Component, as in the end of the day all are JS Functions:
    `<Heading1/>`
    `<Heading1> </Heading1>`
    `{ Heading1() } `

# Props

Pros is a way to pass information to a components. It is similar like pass an argument to the JS Function.

# .map function

The map function is used to loop throught the array/object and output them one by one. When using the .map
the key is used to unique identifies the element added/removed, so that only the newly added element should rendered
without rendering the whole componenet to get rerendered again to display the view.


# Config Driven UI

The approach where `user interface (UI)` is not hard coded but dynamically build on a config/data (API,DB or JSON).
This makes UI components flexible, reusable, and scalable.