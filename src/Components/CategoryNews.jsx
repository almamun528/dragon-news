import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data:news}= useLoaderData()
    const {
      details,
      author,
      image_url,
      thumbnail_url,
      title,
      total_view,
      rating,
    } = news;
    // const { name, published_date, img } = data.author;
    
// console.log(news,'hello');

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