const API_KEY = process.env.API_KEY

export const categories = {
    discover: {
        title: 'DISCOVER',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    }
}
