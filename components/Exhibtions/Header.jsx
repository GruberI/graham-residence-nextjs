import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white mt-48 lg:mt-40 pb-8 sm:pb-0">
      <div className="mx-10">
        <Link href={"gallery/convergence"}>
          <div className="flex flex-col">
            <img
              src="https://ipfs.filebase.io/ipfs/QmZ4am2kZo6LMK7KptheixUvctBBdvBML9rZxTAiJXxGRr/RackMultipart20240501-16-jji7xo.jpg"
              alt=""
              className="object-cover object-center w-screen max-h-[500px]"
            />
            <div className="my-4">
              <h1 className="my-2 text-3xl">CONVERGENCE</h1>
              <p className="w-11/12 lg:w-9/12 text-xl">
                {" "}
                The vibrant works of two LA based artists converse with one
                another among the muted landscape.
              </p>
              <p className="w-11/12 lg:w-8/12 mt-2 sm:mt-0">
                {" "}
                On display at the Graham Residence, June 4th - July 31
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div id="upcoming-exhibitions"></div>
    </div>
  );
}
