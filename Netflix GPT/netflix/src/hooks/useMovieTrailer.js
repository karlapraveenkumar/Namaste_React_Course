import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

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
    getMovieVideos();
  },[])

}

export default useMovieTrailer;