import { Movie } from '@/typing'
import React from 'react'
import MovieCard from './MovieCard'
import { cn } from '@/lib/utils'
type Props = {
    title?: String,
    movies: Movie[],
    isVertial?: boolean,
}
function MoviesCarousal({ title, movies, isVertial }: Props) {
    return (
        <div className='z-20'>
            <h2 className='text-xl font-bold px-10 py-2'>{title}</h2>
            <div className={cn('flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide', isVertial && 'flex-col space-x-0 space-y-12')}>
                {isVertial ?
                    movies.map((movie) => (
                        <div
                            key={movie.id}
                            className={cn(isVertial && "flex flex-col space-y-5 mb-1 p-5 rounded-md items-center lg:flex-row cursor-pointer space-x-5 hover:bg-gray-500/10 hover:scale-105 transition-transform duration-500 ease-out")}
                        >
                            <MovieCard movie={movie} />
                            <div className='max-w-2xl'>
                                <p className='font-bold'>{movie.title} ({movie.release_date?.split('-')[0]})</p>
                                <hr className='mb-3' />
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    ))
                    : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    )
}

export default MoviesCarousal
