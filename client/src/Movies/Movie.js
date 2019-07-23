import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard.js";
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
 
  useEffect(() => {
    const id = props.match.params.id;
    console.log("props", props);
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log("resp", response.data)
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie}/>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
