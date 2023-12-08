import { Tab } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../Utils/Table";

const Plane = [
  {"id": "VNA001", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA002", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-11-10 10:05", "datetime_arrival" : "2021-11-10 12:00"},
  {"id": "VNA002", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-12-10 11:05", "datetime_arrival" : "2021-12-10 13:00"},
  {"id": "VNA003", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA004", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA005", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA006", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA007", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA008", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "VNA009", "departure" : "Ho Chi Minh", "arrival" : "Hanoi", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 12:00"},
  {"id": "BBO001", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"},
  {"id": "BBO002", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-11-10 10:00", "datetime_arrival" : "2021-11-10 11:00"},
  {"id": "BBO003", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-12-10 10:00", "datetime_arrival" : "2021-12-10 11:00"},
  {"id": "BBO004", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"},
  {"id": "BBO005", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"},
  {"id": "BBO006", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"},
  {"id": "BBO007", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"},
  {"id": "BBO008", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"},
  {"id": "BBO009", "departure" : "Ho Chi Minh", "arrival" : "Da Nang", "datetime_departure" : "2021-10-10 10:00", "datetime_arrival" : "2021-10-10 11:00"}
]
const columns = [
  {
    name: 'ID',
    accessor: 'id',
  },
  {
    name: 'Departure',
    accessor: 'departure',
  },
  {
    name: 'Arrival',
    accessor: 'arrival',
  },
  {
    name: 'Datetime departure',
    accessor: 'datetime_departure',
  },
  {
    name: 'Datetime arrival',
    accessor: 'datetime_arrival',
  },
  {
    name: 'Choose plane',
    accessor: 'ChoosePlane',
  },
];
export default function ListPlane() {
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
                    <img src="/bell.svg" className="h-8" />
                  </button>
                </li>
                <li>
                    <button 
                    onClick={() => navigate('/user')}
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
            <h2 className="text-4xl font-bold tracking-wider text-white sm:text-3xl place-content-center text-center font-serif "> "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experiences."</h2>
            <h2 className="text-center text-white font-serif text-3xl pt-5">- Eleanor Roosevelt -</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center text-3xl font-serif font-semibold py-5">
          Available flights
        </div>
        <div className="mx-96 text-center mb-20 mt-10">
          <Table columns={columns} data={Plane} />
        </div>
      </section>
    </>
    )
}