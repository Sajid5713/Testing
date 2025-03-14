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

# Code splitting

As out code is now not optimize we will break the code into chunks, to make our code more readable and developer friendly.
We create a `src` folder and will place our main `App.js` inside it. Remember to insert the root file into src and group the 
components into separate folder `Components`. Remember to keep the naming convention CamelCase to identifies the components
like `Body.js`. We can name it either `.js` or `.jsx` as per our requirement.


# Import / Export

There are two naming `import/export` there provided by react.

`default export` : The default export is used to export a component and used in inside some other component via import.
    - export default <component_name>
    - import <component_name> from <source>

`named export` : The named export is used when we want to export two ReactElement/Object/Variable.
    - export const <component_name>
    - import {component_name} from <source> => `The { } is used to import a named export variable/object `

We can use `default/named` export at the same time.
    - export const Header
    - export default Header


# We can do all this till now via Html,Css,JS? Then why React?

Yes, we can make app using the old way, but React enables us to write efficient code that developer could understand and React provide performance ready app, `because React is efficient in DOM manipulation`.

# How we can change a variable, so that the UI also change along with the variable changes?

For this purpose, React provide us with special variables named as `Hook`, they are just like normal function/utilities provided by React.

The are `named exports`, that are provided by package `react`.
    - useState ` const [a,seta] = useState()`
    - useEffect

# Virtual DOM

The `Virtual DOM` is the representation of `Actual DOM (<tags>)`. Virtual DOM is actually a normal JS Object.


# Diff Algorithm

The `Diff Algorithm`find the different b/w the old VD and new VD and render the difference and actually alter the DOM.

# Reconciliation Algorithm ( React Fiber (React 16) )

In React16 a new algorithm came to find the diff and updating the DOM. Finding out the difference b/w HTML tags is tough, rather then Object. This algorithm find the difference b/w the Object, then it actually updated the DOM. React do't touch the
DOM alot, that is why React is Fast. When there is change in state variable it will find the difference b/w virtual dom and 
update the DOM.

React is doing efficient DOM manipulation.

# Monolith Architecture & Microservices Architecture

Monolith architecture is a way to implement all the code and logic inside a single coupled application. While Microservices
architecture is way to connect various services like UI,DB and Data explicitly in their own domain and connect each one to
make a large application.

# UseEffect hook

There were two approaches in industry before.

    - Loads -> call api -> render
    - Loads -> render -> call api -> rerender

The useEffect hooks is used to call API and then after component render it called the useEffect hook after it.

    useEffect(()=>{

    },[])

    - 

# myFunction vs myFunction()

`myFunction` is called by reference when called via onClick it will execute the code while `myFunction()` called the function 
when the code run and throw undefined when button is clicked.


# useEffect() Hook

This hook came with two parameters one is callback function and dependency. `useEffect()` is call after the components rendered. 
    - When [] dependency is declared the `useEffect` is called on initial render, after component is rendered.
    - When there is no dependency the `useEffect` is called on each render.
    - When [variable] the `useEffect` is called when the variable gets updated.

# useState() Hook

Some thing to consider when using these hooks, never used it inside:
    - if ()
    - for loop
      too avoid any uncertainty

# React-router Library

It allows us to create route for the app, with `createBrowserRouter` we can define the list of route there path, element to render when user go to that route.

    - createBrowserRouter([
        {
            path:'/',
            element:<component/>,
            children:[
                {
                    path:'/about',
                    element:<About/>,
                },
                {
                    path:'/contact',
                    element:<Contact/>,
                }
            ]
            errorElement:<component/>,

        }
    ])

# RouterProvider

Passes the router instance to the app, enabling navigation.

    - const root = ReactDOM.createRoot(document.getElementById("root"));
    - root.render(<RouterProvider router={router}/>);


# Client Side Routing & Server Side Routing 

Client side routing enables us to navigate b/w page without page reload. For this purpose React is also know as
`Single Page Application`, as it allow to navigate b/w component with no network call/request.

Server-side routing is the traditional way of navigating between web pages:
    How It Works:
     - The browser sends an HTTP request to the server.
     - The server processes the request and sends back the entire HTML page.
     - The browser reloads and renders the new page.


# Class Component vs Function Components

`Functional Components` are normal JS `f(n)` that return some piece of JSX.

`Class Components` are normal JS `class` that use a `render()` method to return JSX.

# super()

In order to use the this class in the derived class we have to used `super()` to enable the used of this class in the 
derived class.

# Class props

To get the `props` in the class based components inside the class based components we use

    - constructor(props){
        super(props)
    }

    render(){
        return{
            <> {this.props.prosName}
        }
    }

# Class lifecycle

When parent is rendered first
    - parent constructor
    - parent render()
    
    - child constructor
    - child render()

    - child componentDidMount()
    - parent componentDidMount()

# Life Cycle

`Render Phase`:

    - constructor
    - render()

`Commit Phase` :    
    - componentDidMount()    
    - componentWillUpdate()
    - componentWillUnmount()
    
    /**
        ------ Mounting ------
                - constructor(dummy)
                - render(dummy)
                    - HTML (dummy)

            -- componentDidMount()
                - <API Call>    
                - <this.setState> 
                        -------> state variable updated

        ----- Updating -----

            render( Api Data)
                - HTML ( With API Data )
            -- componentDidUpdate()
        
        ----- Unmounting ---

            componentWillUnmount()

             
     */

# Hooks

Hooks are normal utility function for a specific purpose.

# bundling / Chunking / Dynamic loading / code- splitting / lazy loading / On demand loading

For this purpose we use `{lazy} from 'react'` to make the above things, instead of call the component on initial load, we will
load the component that is large into another bundle to reduce the loading time / increase performance.

    - import {lazy} from 'react'

    const Grocery  = lazy(()=> import('./components/Grocery'))