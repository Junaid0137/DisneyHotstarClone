import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'
import CarousalBanner from './CarousalBanner';
type Props = {
    id: number,
    keyWord: string,
}
async function CarousalBannerWrapper({ id, keyWord }: Props) {
    const movies = await getDiscoverMovies(id, keyWord);
    return (
        <CarousalBanner movies={movies} />
    )
}

export default CarousalBannerWrapper
