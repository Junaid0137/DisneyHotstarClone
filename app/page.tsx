import MoviesCarousal from "@/components/MoviesCarousal";
import CarousalBannerWrapper from "@/components/CarousalBannerWrapper";
import { getDiscoverTv, getNowPlaying, getPopularMovies, getTopRatedMovies, getTrendingMovie, getTrendingTv, getUpcommingMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcommingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const tv = await getDiscoverTv();
  const nowPlaying = await getNowPlaying();
  const trendingMovies = await getTrendingMovie();
  const trendingTv = await getTrendingTv();
  return (
    <main className="relative">
      <CarousalBannerWrapper id={0} keyWord={""} />
      <div className="absolute top-[70%] left-0 w-full z-40">
        <MoviesCarousal movies={upcomingMovies} title="UpComing" />
        <MoviesCarousal movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousal movies={popularMovies} title="Popular" />
        <MoviesCarousal movies={tv} title="TV Shows" />
        <MoviesCarousal movies={nowPlaying} title="Now Playing" />
        <MoviesCarousal movies={trendingMovies} title="Trending Movies" />
        <MoviesCarousal movies={trendingTv} title="Trending TV Shows" />
      </div>
    </main>
  );
}
