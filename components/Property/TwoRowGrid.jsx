export default async function TwoRowGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 px-2">
      <div className="col-span-2">
        <div className="col-span-2 h-screen w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/Qmbd4FWxjiDw2VzcsjTVXZnhLRwVjQJF1w42KeCaLL5PfN/Qmb2NMXEKqzVVNYurkxEYvrABw5Pn1RhzWdtt4Wggp96eg"
            alt="arial shot of property with winding road"
            className="p-2 h-full w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex">
        <div className="aspect-[4/5] w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmTkXg3TM3XrvuAVRM4x3ztaKpri9MRbLGajFKMepXAiTG/QmbHzkjhzmdjgBpkxzg1jmrLp5bkLEhFGCjK2czduPsiWS"
            alt="starry night in desert"
            className="p-2 h-full w-full"
          />
        </div>

        <div className="aspect-[4/5] w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmeiFCmuZqKA94UHFPWnbyGEToKF8QePYmqQsPTeGJ8jtB/QmSiKUBDbNpTQjuoovtX1YFhPwm4cnfQJGLpGQeZPeE1xL"
            alt="white chair in the graham residence living room with sun streaming in"
            className="p-2 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
