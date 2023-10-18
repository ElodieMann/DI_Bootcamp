import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { searchTerm } from "../features/articles"; 

const SearchArticle = () => {
  const dispatch = useDispatch(); 
    const articles = useSelector((state) => state.articles.articles); 

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(searchTerm(e.target.value)); 
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search articles"
        onChange={handleSearch}
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default SearchArticle;
