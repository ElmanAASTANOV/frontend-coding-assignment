import {SearchResult} from '../types/types'
import {performSearch} from '../api/search'
export default function Search({searchQuery, searchResults, errorMessage}) {

  return (
    <div className="p-4">
      {errorMessage && <h2>{errorMessage}</h2>}
      <label htmlFor="searchQuery" className="mr-4">Search for:</label>
      <input defaultValue={searchQuery} id="searchQuery" type="text" className="border" />
      <ul>
        {searchResults.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchQuery = context.query.search ?? "";
  let result: SearchResult[] = [];
  let errorMessage = null;
  try{
     result = (await performSearch(searchQuery as string)).data ?? [];
  } 
  catch(error){
    errorMessage = "Opps!!! Something went wrong." + error
  }
  
  
  return {
    props: {searchQuery, searchResults: result, errorMessage}, // will be passed to the page component as props
  }
}
