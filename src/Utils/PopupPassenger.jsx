import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  


const passenger = [
  {
    "name": "Nguyen Van A",
    "phone": "0123456789",
    "email": "nva@email",
    "cid": "123456789",
    "birthday": "2000-01-01",
    "cabinType": "Economy"
  },
  {
    "name": "Nguyen Van B",
    "phone": "0123456789",
    "email": "nvb@email",
    "cid": "123456788",
    "birthday": "2000-01-02",
    "cabinType": "Economy"
  },
  {
    "name": "Nguyen Van C",
    "phone": "0123456789",
    "email": "nvc@email",
    "cid": "123456787",
    "birthday": "2000-01-03",
    "cabinType": "Bussiness"
  },
  {
    "name": "Nguyen Van D",
    "phone": "0123456789",
    "email": "nvd@email",
    "cid": "123456786",
    "birthday": "2000-01-04",
    "cabinType": "Bussiness"
  }
]


export default function PassengerList({visible, onClose}){
    const handleOnClose = () => {
        onClose();
    }
    const navigate = useNavigate();
  if (!visible) return null;
  return (
    <section className="flex justify-center place-content-center place-self-center">
      <div 
    className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="mb-14 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-8/12 bg-white rounded-3xl ">
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
          <div className="text-center font-semibold font-serif text-2xl">
            PASSENGERS LIST OF TICKET NO. 1
          </div>
          <div className="text-center font-medium font-serif text-lg">
            Number of passengers: 4
          </div>
          {/* <!-- Header --> */}
          <div className="flex justify-center overflow-y-scroll h-[400px]">
            <table className="text-center mb-10 mt-5 ">
              <thead className="text-center">
                <tr>
                  <th className="px-4 py-2 ">Full name</th>
                  <th className="px-4 py-2 ">Phone number</th>
                  <th className="px-4 py-2 ">Email</th>
                  <th className="px-4 py-2 ">CID</th>
                  <th className="px-4 py-2 ">Birthday</th>
                  <th className="px-4 py-2 ">Cabin type</th>
                  <th className="px-4 py-2 "></th>
                </tr>
              </thead>
              <tbody>
                {
                  passenger.map((item) => (
                    <tr>
                      <td className="border ">
                        <input type="text" value={item.name} className="border-0 bg-transparent text-center"></input>
                      </td>
                      <td className="border ">
                        <input type="text" value={item.phone} className="border-0 bg-transparent text-center"></input>
                      </td>
                      <td className="border">
                        <input type="text" value={item.email} className="border-0 bg-transparent text-center"></input>
                      </td>
                      <td className="border ">
                        <input type="text" value={item.cid} className="border-0 bg-transparent text-center"></input>
                      </td>
                      <td className="border ">
                        <input type="text" value={item.birthday} className="border-0 bg-transparent text-center"></input>
                      </td>
                      <td className="border">
                        <input type="text" value={item.cabinType} className="border-0 bg-transparent text-center"></input>
                      </td>
                      <td className=" px-4">
                        <button 
                        type="button">
                          <img src="/rectangle-close.svg" className="h-8" />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <form>
                <button
                onClick={handleOnClose}
                 type="button" className="pb-5"> 
                  <img src="/circle-check.svg" className="h-8 p" />
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
