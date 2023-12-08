import React from "react";  
import { useNavigate } from "react-router-dom";
import SearchingPlane from "./searchingPlane";
import SearchingHotel from "./searchingHotel";
import SearchingRestaurant from "./searchingRestaurant";

export default function User() {
   const navigate = useNavigate();
    return (
      <>
      <section className="relative isolate overflow-hidden bg-gray-900 xl:h-full pb-10">
        <img
          src="/hero-banner.jpg"
          alt=""
          // make backgorund grey color to transparent
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-30"
        />
        <nav className="p-12  ">
          <hr/>
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
            <hr/>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-lg">
                <li>
                  <button  className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">
                    <img src="bell.svg" className="h-8" />
                  </button>
                </li>
                <li>
                  <button 
                  onClick={() => navigate('/cart')}
                  className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">
                    <img src="cart-shopping.svg" className="h-8" />
                  </button>
                </li>
                <li>
                  <a href="#" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">Your promotion</a>
                </li>
                <li>
                  <button onClick={() => navigate('/account')} href="#" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">Account</button>
                </li>
                <li>
                  <button onClick={() => navigate('/')}  className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">Logout</button>
                </li>
                
              </ul>
            </div>
          </div>
          <hr/>
        </nav>
        <div className="mx-auto px-auto pb-7">
          <div className="grid">
            <h2 className="text-4xl font-bold tracking-wider text-white sm:text-7xl place-content-center text-center font-serif ">READY FOR THE NEXT TRIP ?</h2>
            <p className="mt-6 text-xl leading-8 text-gray-300 text-center"> 
           "<span className="text-2xl font-bold font-serif text-teal-400">Pack</span> your dreams, <span className="text-2xl font-bold font-serif text-teal-400">lace</span> up your wanderlust, and <span className="text-2xl font-bold font-serif text-teal-400">buckle</span> in for a journey of a lifetime" <br/>
           <span className="font-serif">'READY for the Next Trip'</span> - Because every adventure begins with anticipation. <br/>
            <span className="text-2xl font-bold text-amber-300">Where to next?</span> 
            </p>
          </div>
        </div>
        <div className="text-white text-center">
          <button className="bg-gray-400 p-3 rounded-3xl font-serif font-medium text-4xl hover:bg-teal-300 hover:text-fuchsia-500">Order now</button>
        </div>
      </section>
      <section className="pb-10 pt-5">
        <SearchingPlane/>
        <SearchingHotel/>
        <SearchingRestaurant/>
      </section>
      </>
    );
}