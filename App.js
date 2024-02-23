// import { element } from 'prop-types';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Movies from './Movies.json';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        {
        Movies.map((element) =>{
          return (
               <Movie
               title={element.Title}
               year={element.Year}
               poster={element.Poster}
              />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
