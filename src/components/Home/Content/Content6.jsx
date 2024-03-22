import React, { useState } from "react";

const Content6 = () => {
  const [clinetData1, setClientData1] = useState(0);
  const [clinetData2, setClientData2] = useState(0);
  const [clinetData3, setClientData3] = useState(0);

  return (
    <>
      <div className="sm:flex sm:flex-row flex-col h-96 text-white sm:mb-0 mb-[750px] ">
        <div className="bg-blue-900 h-96 sm:w-1/3 w-full flex flex-col justify-center pl-20 gap-4">
          <h1 className="text-2xl font-bold">
            Quality Resourching & <br />
            <span className="text-orange-500">Analytics</span>
          </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Read more</p>
        </div>

        <div className="flex flex-col bg-orange-500 h-96 sm:w-1/3 w-full justify-center items-start gap-5 p-20">
          <h1 className="text-sx text-blue-900 font-bold">Our Skills</h1>
          <h1 className="text-2xl font-bold">
            Get a solution for all your <br /> industries needs.
          </h1>
          <div>
            <p>Production</p>
            <p>International</p>
            <p>Customer Satisfaction</p>
            <p>Utilization Rate</p>
          </div>
        </div>

        <div className="bg-blue-900 h-96 sm:w-1/3 w-full p-10 flex flex-col justify-center gap-5 ">
          <h1 className="text-orange-500 font-bold">Clients</h1>
          <h1 className="font-bold text-2xl ">
            We can work with Big & <br /> Small Clients
          </h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="flex justify-between">
            <h1 className="text-orange-500 text-5xl font-bold">
              {clinetData1}+
            </h1>{" "}
            {/* i have to use state here  */}
            <h1 className=" text-5xl font-bold">{clinetData2}</h1>
            <h1 className="text-5xl font-bold">{clinetData3}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content6;
