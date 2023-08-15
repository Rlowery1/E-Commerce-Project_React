import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from "../Common/Icon/search";
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import './searchBar.css';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearchQueryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]); // Clear results if query is empty
      setIsSearchOpen(false); // Hide the search results
      return;
    }

    setIsSearchOpen(true); // Show the search results

    const filter = {
      or: [
        { name: { contains: query } },
        { description: { contains: query } },
        { category: { contains: query } },
        { subcategory: { contains: query } }
      ]
    };

    try {
      const result = await API.graphql({
        query: listProducts,
        variables: { filter },
        authMode: 'API_KEY'
      }) as {
        data: {
          listProducts: {
            items: any[];
          };
        };
      };
      setSearchResults(result.data.listProducts.items); // Show all results
      setSearchError(null);
    } catch (error) {
      console.error("Error searching:", error);
      setSearchError("An error occurred while searching. Please try again.");
    }
  };


  const toggleSearch = () => {
    if (isSearchOpen) {
      setSearchResults([]); // Clear results when closing the search field
    }
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by name, description, category, or subcategory..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className={`search-input ${isSearchOpen ? "open" : ""}`}
        />
        {searchError && <div className="search-error">{searchError}</div>}
      </div>
      <div className="icon-wrapper" onClick={toggleSearch}>
        <Search className="search-instance" />
      </div>
      {isSearchOpen && (
        <div className="search-results">
          {searchResults.map(item => (
            <Link key={item.id} to={`/product/${item.id}`} className="search-result-item">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
