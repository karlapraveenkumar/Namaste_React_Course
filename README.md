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
