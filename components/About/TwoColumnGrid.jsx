export default async function TwoColumnGrid() {
  return (
    <div className="grid grid-cols-2 w-screen px-2 bg-[#f4f5f1]">
     

      <div className="col-span-2 flex">
        <div className="w-full h-screen aspect-[3/4]">
          <img
            src="https://ipfs.filebase.io/ipfs/Qmdyf8RcB2LsQTmSXCLaS9qe9JomMZmFzARNou4hQcJvFy/QmW36C3Fm3rUSyKV7c4hLF4WeJk7v3iHwyWJjnGHr6SQS3"
            alt=""
            className="object-cover p-2 h-full w-full"
          />
        </div>

        <div className="w-full h-screen">
          <img
            src="https://ipfs.filebase.io/ipfs/QmUuGPS8vHhaawFrK2C31J9Z24RAno5Z2mBKkQ5eKr1hR6/QmPGzMAWV9nBSZPj6CasFmeRJAovRGGHi1iWuD4QToNroM"
            alt=""
            className="object-cover p-2 h-full w-full aspect-[3/4]"
          />
        </div>
      </div>

      <div className="col-span-2 h-screen w-full">
        <img
          src="https://ipfs.filebase.io/ipfs/QmYTuXismQUCXVPb6MTPNd1AMwVbi7BjQRYAG6gtHQHymP/QmNqmfpcLzdfj9CeVsURAbP8ZfWGUndiRifrHAp8veYiwa"
          alt="woman drawing curtains shut"
          className="p-2 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
