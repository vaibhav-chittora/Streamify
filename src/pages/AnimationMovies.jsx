import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchAnimationMovies } from '../services/fetchAnimationMovies'
import MovieCard from '../moviecard/MovieCard'

function AnimationMovies() {
  const { data, isloading, isError, error } = useQuery({
    queryKey: ["animationMovies"],
    queryFn: fetchAnimationMovies,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  })
  if (isloading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
      <div>Animation Movies</div>
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
  )
}

export default AnimationMovies