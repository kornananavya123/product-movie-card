import React from "react";

const MovieCard = (props) => {
    console.log("Printing props =>",props.movie);
    //let data = {
      //  Title: "Iron Man",
     //   Year : "2008",
      //  imdbID : "tt0371746",
      //  Type: "movie",
      //  Poster:
       // "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" 
   // };
 return (
  <>
       {/* <div style ={{border: "2px solid black", margin: "10px", padding: "20px"}} >
            <img src={data.Poster} alt="" />
            <h1>{data.Title}</h1>
            <p>{data.Year}</p>  
 <p>{data.Type}</p>  */}
 
 <div style ={{border: "2px solid black", margin: "10px", padding: "20px"}} >
 <img src={props.sunil.Poster} alt="" /> 
 <h1>{props.sunil.Title}</h1>
 <p>{props.sunil.Year}</p>
<p>{props.sunil.Type}</p> 
</div>
         
        </>
    );
};
export default MovieCard;