# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consisten Hashing
- Code Splitting
- Differential bundling - supports older browsers also
- Diognostic
- Error handling
- Tree shaking - remove unused code for you
- Different devlopment and production bundles

# Structure of Our Food order App
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      -Restaurant Cards
 *          - Image
 *          - Name of Res, Start Rating, Cuisine(method of cooking), delivery time
 * Footer
 *  - Copyrights
 *  - Links
 *  - Address
 *  - Contact
 */

 # Two types of Import/Export
    1.  export default Component
        import Component "./path"

    2.  export const Variable = "...";  {this is called Named import/export}
        import {Variable} from "./path";

# React hooks
    Hooks are normal Javascript utility functions written by Facebook developers
    - useState() => Used to generate(create) super powerfull state variables in react
    - useEffect() => 
<<<<<<< HEAD
<<<<<<< HEAD
=======

# 2 Types of Routing in web apps
    - Client side routing
    - Server side routing

# Episode 8

- React component lifecycle
    - Parent Constructor
    - Parent render method
        # Render Phase
        - 1st children constructor
        -              render method
        - 2nd children constructor
                       render method
        # Commit Phase
        - 1st children componentDidMount
        - 2nd children componentDidMount
    - Parent componentDidMount 

# finally 
    - Mounting
        - constructor (with dummy data)
        - render (with dummy data)
            - <HTML (load with dummy)>
        - componetDidMount
            - API Call
            - this.setState() =>(state variable is updated)
    - Update
        - render (api data/updated data)
            -<HTML (loads with new api data)>
        componentWillUpdate

# Episode - 9
    - Chunking
    - Code Splitting
    - Dynamic Bundling
    - Lazy loading (On Demand loading)
    - Dynamic import

# Episode - 12
    Redux Toolkit
        - Install @reduxjs/toolkit and react-redux
        - Build our store
        - Connect our store to our app
        - Slice (cartSlice)
        - dispatch(action)
        - Selector


# Episode - 13
    - Types of testing (devloper)
        - Unit Testing
        - Integration Testing
        - End to End Testing - e2e testing
    Setting up Testing in our app
        - Install React Testing Library
        - Installed jest
        - Installed Babel dependencies
        - Configure Babel
        - Configure Parcel Config file to disable default babel transpilation
        - Jest - npx jest --init
        - Install jsdom library
        - Install @babel/preset-react - to make JSX work in test cases
        - Include @babel/preset-react inside my babel config
        - npm i -D @testing-library/jest-dom

>>>>>>> 9335c87 (adding changes)
=======
>>>>>>> f76f22b03b158cde3c92c6796e042d00c4b3d009
