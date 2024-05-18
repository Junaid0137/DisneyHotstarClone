import MoviesCarousal from '@/components/MoviesCarousal'
import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'
type Props = {
    params: {
        id: number,
    }
    searchParams: {
        genre: string
    }
}
async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    const movies = await getDiscoverMovies(id);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-4 mt-32'>
                <h1 className='text-6xl font-bold px-10 mb-5'>Results for {genre}</h1>
                <MoviesCarousal title="Movies" movies={movies} isVertial />
            </div>
        </div>
    )
}

export default GenrePage
