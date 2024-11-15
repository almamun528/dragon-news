import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data:news}= useLoaderData()

  return (
    <>
      <div>
        {news.map((singleNews, index) => <NewsCard key={index} singleNews={singleNews}>  </NewsCard> 
        )}
      </div>
    </>
  );
};

export default CategoryNews;