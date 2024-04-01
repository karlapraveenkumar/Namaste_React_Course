import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const trailers = useSelector(store => store.movies.trailerVideo);

  // fetching trailer video and upating the store


  const getMovieVideos = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    //console.log(json);


    const filteredData = json.results.filter((video) => video.type === "Trailer" );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    //console.log(trailer);
  }

  useEffect(()=>{
    !trailers && getMovieVideos();
  },[])

}

export default useMovieTrailer;