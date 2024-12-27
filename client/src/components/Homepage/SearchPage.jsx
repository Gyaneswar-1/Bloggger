import React, { useState, useEffect } from "react";
import Navbarr from "./Navbarr";
import { getHomePageData } from "../../services/apiManage.service";
import Cardd from "../ReuseableComponents.jsx/Cardd";
import { Spinner } from "@chakra-ui/react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getHomePageData();
      setDataArray(data);
      setFilteredData(data); // Show all data initially
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = dataArray.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Navbarr />
      <form className="max-w-md mx-auto" onSubmit={handleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-zinc-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            placeholder="Search blogs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50  dark:bg-zinc-700  placeholder-zinc-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700"
          >
            Search
          </button>
        </div>
      </form>
      <div className="text-white h-full w-full flex flex-col gap-9 justify-center items-center pt-10">
        {isLoading ? (
          <Spinner size="xl" color="green.500" />
        ) : filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Cardd
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              images={item.images}
              username={item.username}
              created_at={item.created_at}
              userpfp={item.pfp}
            />
          ))
        ) : (
          <p>No blogs found!</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
