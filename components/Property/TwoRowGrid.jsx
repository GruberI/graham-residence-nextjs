export default async function TwoRowGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 px-2">
      <div className="col-span-2">
        <div className="col-span-2 sm:h-screen w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmayojLyPFZXZvzX5gBzis26uVZSdB27Y85EfSSGvvdGMB/QmVVSQswM9dDiPjLvwfvMXf3P8F8spNp47WEsPXjTSZvQV"
            alt="arial shot of property with winding road"
            className="p-2 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="col-span-2 flex">
        <div className="w-full sm:h-screen">
          <img
            src="https://ipfs.filebase.io/ipfs/QmUk5k6m3tinH7SxfMCMNwuQLuCHgLdzzLmLAF518c5uvi/QmTLfehxT5ZBtuBv99Hxgctm9B4xfyhdmsDuttSWdiDTWy"
            alt="starry night in desert"
            className="p-2 h-full w-full object-cover"
          />
        </div>

        <div className="w-full sm:h-screen">
          <img
            src="https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M"
            alt="white chair in the graham residence living room with sun streaming in"
            className="p-2 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
