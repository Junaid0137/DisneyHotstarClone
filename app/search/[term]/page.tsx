import MoviesCarousal from '@/components/MoviesCarousal';
import { getPopularMovies, getSearchMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation'
import React from 'react'
type Props = {
    params: {
        term: string,
    }
}

async function SearchPage({ params: { term } }: Props) {
    if (!term) notFound();
    const termUse = decodeURI(term);
    const movies = await getSearchMovies(termUse);
    const popularMovies = await getPopularMovies();
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-4 mt-32'>
                <h1 className='text-6xl font-bold px-10 mb-5'>Results for {termUse}</h1>
                <MoviesCarousal title="Movies" movies={movies} isVertial={true} />
                <MoviesCarousal title="You may also like" movies={popularMovies} />
            </div>
        </div>
    )
}

export default SearchPage
