import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  
    const movies = useSelector((store) => store.movies?.NowPlayingMovies);

    if(!movies) return;

    const mainmoive = movies[Math.floor(Math.random() * 20)];

    const {original_title, overview, id} = mainmoive;


    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
      )

}

export default MainContainer;