import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { searchTerm } from "../features/articles";
import SearchArticle from "./SearchArticle"; 

const ArticleList = () => {
  const dispatch = useDispatch(); 
  const articles = useSelector((state) => state.articles.articles); 
  console.log(articles);

  const handleSearchTerm = (search) => {
    dispatch(searchTerm(search)); 
  };

  return (
    <div>
      <SearchArticle handleSearch={handleSearchTerm} />
      <ul>
        {articles?.map((article) => (
          <li key={article.id}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
