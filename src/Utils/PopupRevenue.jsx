import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import Table10 from "./Table10";


const revenueData = [
    {
        month: "January",
        total: "1000000000 $",
    },

    {
        month: "February",
        total: "2000000000 $",
    },
    {
        month: "March",
        total: "3000000000 $",
    },
    {
        month: "April",
        total: "4000000000 $",
    },
    {
        month: "May",
        total: "5000000000 $",
    },
    {
        month: "June",
        total: "6000000000 $",
    },
    {
        month: "July",
        total: "7000000000 $",
    },
    {
        month: "August",
        total: "8000000000 $",
    },
    {
        month: "September",
        total: "9000000000 $",
    },
    {
        month: "October",
        total: "10000000000 $",
    },
    {
        month: "November",
        total: "11000000000 $",
    },
    {
        month: "December",
        total: "12000000000 $",
    },

]
const revenueColumns = [
    {
        Header: "Month",
        accessor: "month",
    },
    {
        Header: "Total",
        accessor: "total",
    },
]
export default function RevenueDetail({visible, onClose}){
  const navigate = useNavigate();
  const handleOnClose = () => {
    onClose();
  }
  if (!visible) return null;
  return (
    <section className="flex justify-center place-content-center place-self-center">
      <div 
    className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="mb-14 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-4/12 bg-white rounded-3xl ">
      <div>
          {/* <!-- Close button --> */}
          <div className="flex justify-between">
            <div></div>
            <div></div>
            <div>
              <button
                type="button"
                className=" font-semibold text-xl mx-3 mt-3  rounded-3xl hover:bg-gray-300 font-serif"
                onClick={handleOnClose}
              >
                {/* <!-- Close --> */}
                <img src="/close.svg" className="h-8" />
              </button>
            </div>
          </div>
          <div className="text-center font-semibold font-serif text-3xl">
            Statistics
          </div>
          {/* <!-- Header --> */}
          <div className="px-10 py-3">
            <Table10 columns={revenueColumns} data={revenueData} />
          </div>
          
        </div>
      </div>
    </div>
    </section>
  )
}
