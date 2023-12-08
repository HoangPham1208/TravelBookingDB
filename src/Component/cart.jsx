import React, {useState} from "react";  
import { useNavigate } from "react-router-dom";
import Table from "../Utils/Table";

const Order = [
  {"id": "001", "status" : "pending", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2021-10-10", "assistant" : "John"},
  {"id": "002", "status" : "pending", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2021-11-10", "assistant" : "John"},
  {"id": "003", "status" : "done", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2021-10-10", "assistant" : "John"},
  {"id": "004", "status" : "pending", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2022-10-10", "assistant" : "John"},
  {"id": "005", "status" : "pending", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2021-10-10", "assistant" : "John"},
  {"id": "006", "status" : "pending", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2023-8-10", "assistant" : "John"},
  {"id": "007", "status" : "done", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2021-10-10", "assistant" : "John"},
  {"id": "008", "status" : "pending", "payment_method" : "visa", "number" : "123456789", "total" : "1000$", "date" : "2021-10-10", "assistant" : "John Alexander Hamilton"},
]
const columns = [
  {
    name: 'ID',
    accessor: 'id',
  },
  {
    name: 'Payment method',
    accessor: 'payment_method',
  },
  {
    name: 'Number',
    accessor: 'number',
  },
  {
    name: 'Date',
    accessor: 'date',
  },
  {
    name: 'Total',
    accessor: 'total',
  },
  {
    name: 'Assistant',
    accessor: 'assistant',
  },
  {
    name: 'Detail',
    accessor: 'Detail',
  },
  {
    name: 'Delete',
    accessor: 'delete',
  },
];

export default function Cart() {
    const currentOrder = Order.filter((order) => order.status === "pending");
  const [showBankingForm, setShowBankingForm] = useState(false);
  const handleOnClose = () => setShowBankingForm(false);
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
                  <button onClick={() => navigate('/user')} className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-300 md:p-0 dark:text-white">Take a trip</button>
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
        <div className="text-center text-3xl pt-5 md:text-5xl font-medium font-serif">
          Your order 
        </div>
        <div className="mx-96 text-center mb-20 mt-10">
          <Table columns={columns} data={currentOrder} />
        </div>
      </section>

      </>
    );
}