import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDebounce } from 'use-debounce';
import { SearchResult } from "../types/types";
import { performSearch } from "../api/search";

type SearchType = string | string[];

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState<SearchType>("");
  const [value] = useDebounce<SearchType>(query, 250);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const searchQuery = router.query.search;
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (value) {
      performSearch(value)
        .then((result) => setSearchResults(result.data ?? []))
        .catch((error) => {
          alert("Opps!!! Something went wrong.");
        });
    }
  }, [value]);

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">
        Search for:
      </label>
      <input
        id="searchQuery"
        value={query}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setQuery(e.currentTarget.value);
        }}
        type="text"
        className="border"
      />
      <ul>
        {searchResults.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
