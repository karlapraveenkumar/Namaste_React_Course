# Netflix GPT

    - Create React App
    - Configured Tailwind Css into our app
    - Header
    - Routing of App
    - Login Form
    - SignIn Form
    - Form Valiation
    - useRef hook
    - Firebase setup
    - Deploying our app to production
    - Create a signup user account
    - Impliment Sign In user api
    - Created Redux Store with userSlice
    - Implemented the Sign Out feature
    - Update profile api call
    - BugFix : SignUp user display name and profile picture update
    - BugFix : If the user is not logged In the redirect "/browse" to Login page and vice-versa
    - Unsubscribed to onAuthStateChanged callback when unmounts
    - Added hardcode values like logo url's into constants file
    - Registered TMDB api & created an app & get access token
    - Get data from TMDB -> Now playing -> Moives List api
    - Custom hook for playing movies
    - Create MovieSlice
    - Update store with movies data
    - Plannig for Maincontainer and Secondary container
        - In Browse Page we planned like this
        - Main Container
            - Video Background
            - Video Title
        - Secondary Container
            - MovieList * n (N number of movie lists)
                - Cards * n (N numbr of Movie cards)
    - Fetch data for trailer video
    - Update store with Trailer video data
    - Embeded the youtube video and make it autoplay and mute
    - Tailwind classes to look maincontainer awesome. 
    - Build secondary component
    - Build Movie List
    - Build Movie Card
    - Found and add the TMDB image CDN
    - Made the Browse page amazing with tailwind css
    - custom hooks created, are => usePopularMovies, useTopRatedMovies, useUpComingMovies and useNowPlayingMoives
    - GPT Search page
    - GPT Search bar
    - Multi Language feature in our app
    - Get Gemini ai api key
    - GPT search api call
    - fetched gpt movie suggestions from TMDB website
    - created gptSlice and added data [Redux store]
    - Reused movieList component to show movie suggestion container
    - Memoization
    - Added .env file to hide the api keys
    - Added .env file into .gitignore
    - Made our site Responsive

 
# Features
    - Login/SignUp
        - Sign In / Sign Up form
        - Redirected to Browse page
    - Browse(after authentication)
        - Header
        - Main Movie
            - Trailer in background
            - Title & Description
            - Moive suggestions
                - Movie Lists * N 

    - Netflix GPT
        - Search bar
        - Movie Suggestions

- Installed, npm i -D react/router-dom 