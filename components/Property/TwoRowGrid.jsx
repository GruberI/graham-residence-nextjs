export default async function TwoRowGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 max-w-6xl py-20 gap-10">
      <div className="col-span-2">
        <div className="col-span-2 ">
          <img
            src="https://ipfs.filebase.io/ipfs/Qmbd4FWxjiDw2VzcsjTVXZnhLRwVjQJF1w42KeCaLL5PfN/Qmb2NMXEKqzVVNYurkxEYvrABw5Pn1RhzWdtt4Wggp96eg"
            alt="arial shot of property with winding road"
            className="px-2 sm:px-10"
          />
        </div>
      </div>

      <div className="grid-rows-1 col-span-2 flex">
        <div>
          <img
            src="https://ipfs.filebase.io/ipfs/QmTkXg3TM3XrvuAVRM4x3ztaKpri9MRbLGajFKMepXAiTG/QmbHzkjhzmdjgBpkxzg1jmrLp5bkLEhFGCjK2czduPsiWS"
            alt="starry night in desert"
            className="px-2 sm:px-10"
          />
        </div>

        <div>
          <img
            src="https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M"
            alt="white chair in the graham residence living room with sun streaming in"
            className="px-2 sm:px-10"
          />
        </div>
      </div>
    </div>
  );
}