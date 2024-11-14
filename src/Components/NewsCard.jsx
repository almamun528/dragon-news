import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({singleNews}) => {
    console.log(singleNews, "singleNEws");
        const {
          details,
          author,
          image_url,
          thumbnail_url,
          title,
          total_view,
          rating,
        } = singleNews;
    return (
      <section className="mb-10">
        <div className="flex gap-2 items-center ">
          <img className="w-10 rounded-full" src={author.img} alt="" />

          <span>
            {author.name} <br />
            {author.published_date}
          </span>
        </div>
        {/*  */}
        <div>
          <h1 className="text-lg font-bold">{title}</h1> <br />
          <picture className="flex items-center justify-center">
            <img src={image_url} alt="" />
          </picture>
          <p className="my-2"> {details} </p>
          <Link className="text-orange-400"> Read More </Link>
        </div>
      </section>
    );
};

export default NewsCard;