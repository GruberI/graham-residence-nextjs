export default function Header() {
  return (
    <div className="bg-white mt-48 lg:mt-40" id="current-exhibit">
      <div className="mx-10">
        <h1 className="sm:text-5xl text-3xl sm:pb-6 pb-1 tracking-widest sm:mt-6 mb-10 text-center">
          Current Exhibitions
        </h1>
        <div className="flex flex-col">
          <img
            src="https://ipfs.filebase.io/ipfs/QmZ4am2kZo6LMK7KptheixUvctBBdvBML9rZxTAiJXxGRr/RackMultipart20240501-16-jji7xo.jpg"
            alt=""
            className="object-cover object-center w-screen max-h-[500px]"
          />
          <div className="my-4">
            <p>Exhibition</p>
            <h1 className="my-2 text-2xl">Convergence</h1>
            <p className="w-11/12 lg:w-8/12">
              {" "}
              The vibrant work of two LA based artists converse with one another
              among the muted landscape. On display at the Graham Residence, May
              2024 - July 2024
            </p>
          </div>
        </div>
      </div>
      <div id="upcoming-exhibitions"></div>
    </div>
  );
}
