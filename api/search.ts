export const performSearch = (query: string) => fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`)
.then((response) => response.json());