import './App.css';
import MovieCard from './MovieCard';
import { useState } from 'react';

const data = [
      {
      Title: "Iron Man",
      Year : "2008",
      imdbID : "tt0371746",
      Type: "movie",
      Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" 
  },
  {
  Title: "Iron 3",
     Year : "2004",
     imdbID : "tt0423866",
     Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzBmODdkMzItNTk0NS00MDc5LWFmZjgtNmNlZmNhMzFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg"
  }, 
  {
    Title: "the man with the ironm ",
    Year : "2004",
    imdbID : "tt1258972",
    Type: "movie",
     Poster: "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg"    

  },
];
   
    function App() {
      let localNumber = 1;  // local variable

      // count is state variable
      // setcount is state set functions
      // setCount will help us to update the state variable and also trigger than re rendering of components(change the dom)
      let [count, setCount] = useState(1);

       function f1() {
        localNumber++;
        console.log(localNumber); // 1-2-3-4 -5
      }

      function f2() {
        setCount(count++);  // when i click on count it will increase
      }
     return (
        <div>
       <h1>Local Number = {localNumber} </h1>
       <button onClick={f1}>Local Counter</button>
       <h1>State Number = {count} </h1>
       <button onClick={f2}>State Counter</button>

       {/*<MovieCard movie={data[0]} />
          <MovieCard movie={data[1]} />
     <MovieCard movie={data[2]} />  */}

         {/* best way rendering all the data from map function 
          {data.map((m) => {
            return <MovieCard sunil={m} />;
          })}  */}
          </div>  
      );
        }

export default App;
