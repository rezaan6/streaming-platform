const baseUrl = process.env.TMDB.BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params);
    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
}

export default { getUrl };