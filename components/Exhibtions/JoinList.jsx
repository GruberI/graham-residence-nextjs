"use client";
// import { useState } from "react";
// import axios from "axios";

export default function JoinList() {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     email,
  //   };
  //   axios
  //     .post(
  //       "https://sheet.best/api/sheets/0c1935a8-4b33-4c54-98fa-321453cf03c5",
  //       data
  //     )
  //     .then((response) => {
  //       setEmail("");
  //     });
  // };

  return (
    <div className="bg-white max-w-7xl mx-auto">
      <div className="max-w-3xl m-auto">
        <div className="klaviyo-form-YiLnCF"></div>
      </div>
      {/* <div className="mx-auto sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 sm:px-24">
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-sm text-black sm:text-3xl">
            join the list
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-8">
            Sign up to collect previews evenst, openins and drops
          </p>
          <form
            className="mx-auto mt-10 flex max-w-md gap-x-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto border bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              type="submit"
              className="round-sm flex-none bg-white px-3.5 py-2.5 text-sm font-light hover:font-semibold shadow-sm border border-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div> */}
      <div id="past-exhibitions"></div>
    </div>
  );
}
