import Login from './Login'
import Browse from './Browse';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import MovieTrailers from './MovieTrailers';



const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>,
        },
    
    ]);



    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body