# Client Application
the application is built using [dva](https://github.com/dvajs/dva) framework, detailed documentation of the framework can be seen [here](https://dvajs.com/guide/).
## Folder Structure
### mock
>mock data for local API testing
### public
>static files
### src
>source code

* assets
    >all static resources
* components
    >self-created components
* models
    >data model, including redux states, reducers, effects and subscriptions
* routes
    >page-level components
* services
    >webservices interfaces
* untils
    >AJAX functions and other utilities
* index.js
    >entry point of the application
## Set up instructions
``` bash
# install dva framework
npm install dva-cli -g

# check dva installation
dva -v
> dva-cli version 0.9.2

# install dependencies
npm install

# run development server
npm start

# build for production
npm run build

```

    
