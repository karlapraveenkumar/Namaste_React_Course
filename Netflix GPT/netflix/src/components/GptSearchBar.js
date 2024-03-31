import { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/geminiai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
//import openai from '../utils/openai'



const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector(store=> store.config.lang);
  const searchText = useRef(null);

  const searchMoiveTMDB = async(moive)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
      +moive+
      "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  

  const handleGptSearchClick = async()=>{

    /*const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText.current.value }],
      model: 'gpt-3.5-turbo',
    });

    //console.log(gptResults.choices);
    */

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " 
      + searchText.current.value + 
      ". only give me names of 5 moives, comma seperated like the example result given ahead. Example result: Bahubali, Salar, RRR, Saaho, Ala Vainkuntapuram";

    const prompt = gptQuery; 
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if(!text){
      //show error handling page, home work
    }

    const gptMovies = text.split(",");
    //console.log(gptMovies);
    const promiseArray = gptMovies.map((moive) => searchMoiveTMDB(moive));
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}));

  }


  return (
    <div className='pt-[10%] flex justify-center'>
        <form 
          className='w-1/2 grid grid-cols-12 bg-black' 
          onSubmit={(e) => e.preventDefault()}
        >
          <input ref={searchText} className='col-span-9 p-4 m-4' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />

          <button 
            className={'py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg hover:bg-red-800'}
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
    </div>
  )
}

export default GptSearchBar