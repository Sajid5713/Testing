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