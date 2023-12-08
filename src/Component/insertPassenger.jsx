import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function InsertPassenger() {
    const navigate = useNavigate();
    const quantityOfPassenger = 3;
    const getForm = () => {
      let content = [];
      for (let i = 0; i < quantityOfPassenger; i++) {
        content.push(
        <div className="border border-gray-300 p-6 grid grid-cols-1 gap-3 bg-white shadow-lg rounded-lg">
          <div className="font-bold text-teal-600">Passenger {i}</div>
          <div className="font-semibold">Full name: <input type="text" placeholder="Full name" className="p-1 font-normal"/></div>
          <div className="font-semibold">Phone number: <input type="text" placeholder="Phone number" className="p-1 font-normal" /></div>
          <div className="font-semibold">Email: <input type="text" placeholder="Email" className="p-1 font-normal"/></div>
          <div className="font-semibold">CID: <input type="text" placeholder="CID"  className="p-1 font-normal"/></div>
          <div className="font-semibold">Birthday: <input type="date"  className="p-1  font-normal"/></div>
          <div className="grid grid-cols-2">
            <div className="font-semibold">Cabin type: 
              <select className=" p-1 font-normal">
                <option>Economy</option>
                <option>Businness</option>
              </select>
            </div>  
            <div className="font-semibold flex py-1">
              Luggages type
              <button
              ><img src="/luggage.svg" className="h-8 px-3" /></button>
            </div>
            <div className="font-semibold py-1">Price: 100$</div>
            <div className="font-semibold py-1">Price: 0$</div>
          </div>
          <div className="font-semibold py-1 flex justify-center text-teal-600">
            Total: 100$
          </div>
        </div>
        )
      }
      return content
    }
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
                    <img src="/bell.svg" className="h-8" />
                  </button>
                </li>
                <li>
                    <button 
                    onClick={() => navigate('/user/listPlane')}
                    className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">
                        <img src="/arrow-left.svg" className="h-8" />
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
            <h2 className="text-4xl font-bold tracking-wider text-white sm:text-3xl place-content-center text-center font-serif "> "Join the Journey: Let's Make Memories Together!"</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center text-4xl font-semibold font-serif p-3">Fill your information</div>
        <div className="container my-7 mx-auto grid grid-cols-3 gap-20 justify-center items-center p-2 md:p-0">          
            {getForm()}
        </div>
      </section>
      <section>
        <div className="text-center pb-5 text-2xl">Total cost : 300$</div>
        <div className="text-center">
          {/* submit */}
          <button 
            onClick={() => navigate('/user')}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full text-2xl">
            Submit
          </button>
         </div>
      </section>
    </>
    )
}