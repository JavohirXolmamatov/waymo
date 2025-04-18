import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Kechirasiz, sahifa topilmadi.</p>
        <NavLink
          to={"/"}
          className="py-3 w-7/10 mx-auto rounded-xl text-white text-md font-medium underline block my-4 bg-green-500"
        >
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
