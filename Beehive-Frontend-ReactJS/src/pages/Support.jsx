import React from "react";
import bankQR from "../assets/bank.jpg"; // Import bank.jpg
import zaloQR from "../assets/zalo.jpg"; // Import zalo.jpg

const Support = () => {
  return (
    <div className=" bg-white flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Thank You</h1>
        <p className="text-gray-600 mt-2">for using our service</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          We are Group 7
        </h2>
        <p className="text-gray-600">
          This is the Beehive Monitoring Project sponsored by AUT.
        </p>
      </div>
      <div className="mt-8">
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Donation
            </h3>
            <div className="bg-gray-200 p-4 rounded-lg">
              {/* Bank QR Code */}
              <img
                src={bankQR}
                alt="Donation QR Code"
                className="w-32 h-32 mx-auto"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Support
            </h3>
            <div className="bg-gray-200 p-4 rounded-lg">
              {/* Zalo QR Code */}
              <img
                src={zaloQR}
                alt="Support QR Code"
                className="w-32 h-32 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-sm">Thank you for your support!</p>
    </div>
  );
};

export default Support;
