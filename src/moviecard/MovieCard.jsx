import React from 'react';
// import { AiFillStar } from 'react-icons/ai';

function MovieCard({ movie, onClick }) {
    const { _id, title, release_date, overview, poster_path, genres } = movie;

    return (
        <div
            className="max-w-sm m-2 rounded-lg overflow-hidden shadow-xl cursor-pointer bg-gray-100 shadow-gray-400 group"
            onClick={() => onClick(_id)}
        >
            <div className="relative">
                <img
                    src={poster_path}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{
                        aspectRatio: '2/3', // Adjusting for a typical movie poster aspect ratio
                        objectFit: 'cover',
                        maxHeight: '100%',
                        maxWidth: '100%',
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="font-bold text-white text-xl mb-2">{title}</div>
                    <div className="text-white mb-2">
                        <span className="text-sm">{release_date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-white text-sm">{overview.slice(0, 60)}...</p>
                        <div className="flex flex-wrap">
                            {genres.map((genre, index) => (
                                <span key={index} className='bg-[rgba(255,255,255,0.5)] text-dark mx-1 px-1 py-1 rounded-full text-sm inline-block'>
                                    {genre}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
