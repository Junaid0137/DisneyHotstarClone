import { SearchResults } from "@/typing";
// import { fetch, setGlobalDispatcher, Agent } from 'undici';
// setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 } }))
async function fetchFromTMDB(url: URL, cacheTime?: number) {
    url.searchParams.set("include_adult", "true");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API}`,
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24,
        },
    };
    const res = await fetch(url.toString(), options);

    const data = (await res.json()) as SearchResults;
    return data;
};

export async function getUpcommingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getDiscoverMovies(id?: number, keyword?: string) {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

    keyword && url.searchParams.set("with_keywords", keyword);
    id && url.searchParams.set("with_genres", id.toString());

    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getDiscoverTv(id?: number, keyword?: string) {
    const url = new URL(`https://api.themoviedb.org/3/discover/tv`);

    keyword && url.searchParams.set("with_keywords", keyword);
    id && url.searchParams.set("with_genres", id.toString());

    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getNowPlaying() {
    const url = new URL(`https://api.themoviedb.org/3/movie/now_playing`);
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getTrendingMovie() {
    const url = new URL("https://api.themoviedb.org/3/trending/movie/day?language=en-US");
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getTrendingTv() {
    const url = new URL("https://api.themoviedb.org/3/trending/tv/day?language=en-US");
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getSearchMovies(term: string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");
    url.searchParams.set("query", term);

    const data = await fetchFromTMDB(url);
    return data.results;
}