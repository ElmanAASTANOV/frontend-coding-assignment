import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {SearchResult} from '../types/types';
import {performSearch} from '../api/search';

export default function Search() {
  const router = useRouter();
  const searchQuery = router.query.search; 
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if(!searchQuery){
      return;
    }
    performSearch(searchQuery as string).then(result => setSearchResults(result.data??[]))
    .catch(error => {
      alert("Opps!!! Something went wrong.");
    })

  }, [searchQuery])

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">Search for:</label>
      <input id="searchQuery" value={searchQuery} type="text" className="border" />
      <ul>
        {searchResults.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
