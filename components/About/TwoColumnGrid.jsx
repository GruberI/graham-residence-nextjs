export default async function TwoColumnGrid() {
  return (
    <div className="grid grid-cols-2 w-screen px-2 bg-[#f4f5f1]">
     

      <div className="col-span-2 flex">
        <div className="w-full aspect-[3/4]">
          <img
            src="https://ipfs.filebase.io/ipfs/QmNdt9bpx4hYyB4KMckJc3b3Swt4w1PwH9zYvM32K5g5HJ"
            alt=""
            className="object-cover p-2 h-full w-full"
          />
        </div>

        <div className="w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmfBrg5ZBp1mjgKS7AqGKd4e8MbLFVvT33ND3WfbadEY7k/QmbyitaXxSxH1pWtT1TTzD7PgsujdfZTEEpqD5PGdDb9DX"
            alt=""
            className="object-cover p-2 h-full w-full aspect-[3/4]"
          />
        </div>
      </div>

      <div className="col-span-2 h-screen w-full">
        <img
          src="https://ipfs.filebase.io/ipfs/QmRCwsnbLzYRuaF68NT3zewf6RMXcV4cb4v6KpksiWPVaH/QmZiaUKpt7EHwUWVbJbyCQgBWgGicYjxkTqDHUZdm7pvfy"
          alt="woman drawing curtains shut"
          className="p-2 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
