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

# Redux ToolKit

    - Install @reduxjs/toolkit an react-redux
    - Build our store
    - Connect our store to our app
    - Create slice (cart slice)
    - dispatch (action)
    - selector

# Episode - 13

# Types of testing (Developer can do)
    - Unit testing
    - Integration testing
    - End to End testing (e2e-testing)

# Setting up testing our App
    - Install React Testing library
    - Installed jest
    - Installed Babel dependencies
    - Configure Babel    