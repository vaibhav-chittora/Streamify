import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { fetchTrendingMovies } from "../services/fetchTrendingMovies";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function Home() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["trendingMovies"],
        queryFn: fetchTrendingMovies,
        time: {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 5,
        },
    });

    useEffect(() => {
        if (data) {
            console.log("HOME PAGE DATA", data);
        }
    }, [data]);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Error: {error.message}</h1>;
    }
    return (
        <>
            <Navbar />
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                transitionTime={1}
                showStatus={false}
                showIndicators={false}
            >
                {data && data.map((movie) => (
                    <Link to={`/movie/${movie._id}`} key={movie.id}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <img
                                src={movie.backdrop_path}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                            {/* Movie Info Overlay */}
                            <div className="absolute bottom-0 left-0 p-10 text-white z-10 max-w-2xl">
                                {/* Movie Title */}
                                <h1 className="text-5xl ml-0 font-bold my-10">
                                    {movie.title}
                                </h1>

                                {/* Year and Rating */}
                                <div className="flex items-center justify-center     text-lg mb-4">
                                    <div className="flex flex-wrap justify-center items-center">
                                        <span
                                            className="bg-gray-800 text-white text-sm rounded-full px-3 py-1 mr-2 mb-2"
                                        >{movie.release_date}</span>
                                        <span className="mx-2">•</span>
                                        {movie.genres.map((genre, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800 text-white text-sm rounded-full px-3 py-1 mr-2 mb-2"
                                            >
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Overview */}
                                <p className="text-xl font-semibold text-gray-300 mb-4">
                                    {movie.overview}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </>
    );
}

export default Home;
