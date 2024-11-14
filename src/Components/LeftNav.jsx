import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';




const LeftNav = () => {
   const [categoryItem, setCategoryItem] = useState([])
   useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategoryItem(data.data.news_category));

   },[])
// className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""
    
    return (
      <div>
        <h1>All Categories( {categoryItem?.length}) </h1>

        <div className="flex flex-col gap-2 mt-3 ">
            {
                categoryItem.map(items => <NavLink to={`/category/${items.category_id}`} className='btn'

                key={items.category_id}> {items.category_name}  </NavLink>  )
            }
        </div>
      </div>
    );
};

export default LeftNav;