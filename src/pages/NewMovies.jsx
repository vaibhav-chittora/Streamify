import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { fetchNewMovies } from '../services/fetchNewMovies';
import MovieCard from '../moviecard/MovieCard'; // Importing MovieCard component

function NewMovies() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["newMovies"],
    queryFn: fetchNewMovies,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      console.log("NEW MOVIES - ", data);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  // Handle the click event for movie cards
  const handleMovieClick = (id) => {
    console.log(`Movie clicked: ${id}`);
    // Navigate to movie details page or perform other actions
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">New Movies</h2>
      <div className="flex flex-wrap justify-center">
        {data && data.map(movie => (
          <MovieCard
            key={movie._id} // Use the unique id for key
            movie={movie}
            onClick={handleMovieClick}
          />
        ))}
      </div>
    </>
  );
}

export default NewMovies;
