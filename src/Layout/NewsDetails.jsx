import React from "react";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import RightNAvBar from "../Components/RightNAvBar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
    const data = useLoaderData()
    const news = data.data[0]
// console.log(news);
  return (
    <div>
      <Logo></Logo>
      <NavBar></NavBar>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon news</h2>
          {/*  */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to home</Link>
              </div>
            </div>
          </div>
          {/*  */}
        </section>
        <section className="col-span-3">
          <RightNAvBar></RightNAvBar>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
