export default function SignUp() {
    return (
      <div className="bg-white py-10 sm:py-24 border-t border-black mt-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 sm:px-24">
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-sm text-black sm:text-3xl">
              subscribe
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-8">
            Sign up to be notified when we have new exhibitions and events
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
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
              />
              <button
                type="submit"
                className="flex-none bg-white px-3.5 py-2.5 text-sm font-light hover:font-semibold shadow-sm border border-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }