import React from 'react';
import Logo from '../Components/Logo';
import Marque from '../Components/Marque';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import LeftNav from '../Components/LeftNav';


const HomeLayout = () => {
    return (
      <>
        <section>
          <Logo></Logo> {/* this is logo component */}
          <Marque></Marque>
          <NavBar></NavBar>

          <main className=' w-11/12 mx-auto grid grid-cols-12 gap-3'>

          <div className="left col-span-3 ">
            <LeftNav></LeftNav>
          </div>

          <div className='col-span-6 '>Main Content <Outlet></Outlet>  </div>

          <div className="right col-span-3">  Right sidebar </div>


        </main>


        </section>
      </>
    );
};

export default HomeLayout;