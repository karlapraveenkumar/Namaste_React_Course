import {useEffect} from 'react'
import { SEARCH_RESULT_API } from '../utils/constants';
import { getSearchResultVideos} from '../utils/searchSlice';
import { useDispatch} from 'react-redux';

const useSearchQuery = ({searchParams}) => {

    const dispatch = useDispatch();

    let search_query = searchParams?.get("search_query");

    //const searchVideos = useSelector(store=> store.search.searechResultVideos);


    useEffect(()=>{
        getVideos()
    },[search_query])


    const getVideos = async()=>{
        const data = await fetch(`${SEARCH_RESULT_API}&q=${search_query}&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        const json = await data.json();
        //console.log(json?.items[0]);
        dispatch(getSearchResultVideos(json?.items));
        
        //setVideos(json?.items)
    }
}

export default useSearchQuery