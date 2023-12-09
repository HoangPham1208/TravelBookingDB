import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  


const PaymentData = [
  {"method" : "vietcombank", "number" : "123456789", "status": "active"},
  {"method" : "MB bank", "number" : "123456789", "status": "inactive"},
  {"method" : "paypal", "number" : "123456789", "status": "active"},
  {"method" : "visa", "number" : "123456789", "status": "active"},
  {"method" : "mastercard", "number" : "123456789", "status": "inactive"},
  {"method" : "jcb", "number" : "123456789", "status": "inactive"},
  {"method" : "american express", "number" : "123456789", "status": "inactive"},
  {"method" : "discover", "number" : "123456789", "status": "inactive"},
  {"method" : "diners club", "number" : "123456789", "status": "active"},
  {"method" : "unionpay", "number" : "123456789", "status": "inactive"},
  {"method" : "mastercard", "number" : "123456789", "status": "active"},
  {"method" : "jcb", "number" : "123456789", "status": "inactive"},
  {"method" : "american express", "number" : "123456789", "status": "inactive"},
  {"method" : "discover", "number" : "123456789", "status": "active"},
  {"method" : "diners club", "number" : "123456789", "status": "inactive"},
  {"method" : "unionpay", "number" : "123456789", "status": "active"},

]

export default function SuccessOrder({visible, onClose}){
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
          <div className="text-center font-semibold font-serif text-2xl">
            PAYMENT
          </div>
          {/* <!-- Header --> */}
          <div className="flex justify-center overflow-y-scroll h-[400px]">
            <table className="text-center mb-10 mt-5 ">
              <thead className="">
                <tr>
                  <th className="px-4 py-2 ">Method</th>
                  <th className="px-4 py-2 ">Number</th>
                  <th className="px-4 py-2 ">Status</th>
                </tr>
              </thead>
              <tbody>
                {PaymentData.map((item) => (
                  <tr>
                    <td className="border px-4 py-2">{item.method}</td>
                    <td className="border px-4 py-2">{item.number}</td>
                    {(item.status == "active") ? ( <td className="border px-4 py-2 text-green-500">{item.status}</td> ) : ( <td className="border px-4 py-2 text-red-500">{item.status}</td> )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <form>
                <div className="text-2xl font-semibold font-serif py-3 flex justify-center">Add new payment</div>
                <div>
                  <input type="text" placeholder="Method" className="border-2 border-gray-300 rounded-lg p-2 mb-3 mx-5"></input>
                  <input type="text" placeholder="Number" className="border-2 border-gray-300 rounded-lg p-2 mb-3 mx-5 "></input>
                </div>
                <div className="flex justify-center pt-3 pb-5">
                  <button type="button">
                    <img src="/circle-plus.svg" className="h-8" />
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
