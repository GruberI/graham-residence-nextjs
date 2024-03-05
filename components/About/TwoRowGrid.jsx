export default async function TwoRowGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 px-2">
      <div className="col-span-2">
        <div className="sm:h-screen w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmYkCbyMjgWfNgPkiYWjBVPpPCAgGWoZ92Kn5embnV2nog/QmVQju1dQhXSVRyi8Jbu1ZkKLSkak9oUd77jZprmMQLz8q"
            alt="arial shot of property with winding road"
            className="p-2 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="col-span-2 flex">
        <div className="w-screen">
          <img
            src="https://ipfs.filebase.io/ipfs/QmdtXTAgBTSV3gV8TyFuorYvrFJUAW19DSDiXMhwJK4pjL/QmVctrB52di8UTYcGf5Fw45dVL6Aw7ezasNr1WLybHagSN"
            alt="starry night in desert"
            className="p-2  object-cover h-full w-full"
          />
        </div>

        <div className="w-screen">
          <img
            src="https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M"
            alt="white chair in the graham residence living room with sun streaming in"
            className="p-2 object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
