import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsPage from './components/SearchResultsPage';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children : [
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path : "watch",
        element : <WatchPage/>
      },
      {
        path : "results",
        element : <SearchResultsPage/>
      }
    ]
  }
]);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <div>
          <Head/>
          <div className='flex'>
            <Sidebar/>
            <Outlet/>
          </div>
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
