import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PassengerList from "../Utils/PopupPassenger";

export default function Details() {
    const [showPassenger, setShowPassenger] = useState(false);
    const handleOnClose = () => {
        setShowPassenger(false);
    }
    const quantityOfTicket = 2;
    const navigate = useNavigate();
        
    const getTicket = () => {
        let content = [];
        for (let i = 0; i < quantityOfTicket; i++) {
          content.push(
          <div className="border border-gray-300 p-6 grid grid-cols-3 gap-3 bg-white shadow-lg rounded-lg">
            <div className="font-bold text-teal-600">Ticket ID: {i}</div>
            <div></div>
            <div></div>
            <div className="font-semibold">Flight ID: {i} </div>
            <div className="font-semibold ">Departure: Hanoi</div>
            <div className="font-semibold ">Arrival: Ho Chi Minh</div>
            <button onClick={()=>setShowPassenger(true)}><img src="/ticket.svg" className="h-10" /></button>
            <div className="font-semibold">2021-11-10 10:50</div>
            <div className="font-semibold">2021-11-10 12:50</div>
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
                    onClick={() => navigate('/cart')}
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
        <div className="mx-auto px-auto pb-5">
          <div className="grid">
            <h2 className="text-xl font-bold tracking-wider text-white sm:text-xl place-content-center text-center font-serif "> "Guard that ticket like a treasure, for within it lies the key to unforgettable moments and lifelong memories"</h2>
            <h2 className="text-2xl font-bold tracking-wider text-white sm:text-2xl place-content-center text-center font-serif pt-7"> Let the journey begin!</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center font-bold font-serif py-7 text-3xl">Your plane tickets are READY</div>
        <div className="text-start font-medium font-serif text-lg md:mx-20"> Number of plane tickets: 1</div>
        <div className="container my-7 mx-auto grid grid-cols-2 gap-20 justify-center items-center p-2 md:p-0">          
            {getTicket()}
        </div>
        <div className="text-start font-medium font-serif text-lg md:mx-20"> Number of room tickets: 0</div>
        <div className="container my-7 mx-auto grid grid-cols-2 gap-20 justify-center items-center p-2 md:p-0">          
        </div>
        <div className="text-start font-medium font-serif text-lg md:mx-20"> Number of restaurant tickets: 0</div>
        <div className="container my-7 mx-auto grid grid-cols-2 gap-20 justify-center items-center p-2 md:p-0">          
        </div>
        <PassengerList visible={showPassenger} onClose={handleOnClose}/>
      </section>
    </>
    )
}