export default async function TwoRowGrid() {
    return (
      <div className="mx-auto grid grid-cols-2 px-2">
        <div className="col-span-2">
          <div className="col-span-2 ">
            <img
              src="https://ipfs.filebase.io/ipfs/QmXxDzFFdxJwH15qfzL8UFbvYwkRjhPCvZ4ptXQ9NiNx4F/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW"
              alt="arial shot of property with winding road"
              className="p-2"
            />
          </div>
        </div>
  
        <div className="col-span-2 flex">
          <div className="aspect-[4/5] w-[50%] h-full">
            <img
              src="https://ipfs.filebase.io/ipfs/QmdtXTAgBTSV3gV8TyFuorYvrFJUAW19DSDiXMhwJK4pjL/QmVctrB52di8UTYcGf5Fw45dVL6Aw7ezasNr1WLybHagSN"
              alt="starry night in desert"
              className="p-2"
            />
          </div>
  
          <div className="aspect-[4/5] w-[50%] h-full">
            <img
              src="https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M"
              alt="white chair in the graham residence living room with sun streaming in"
              className="p-2 h-[99.99%]"
            />
          </div>
        </div>
      </div>
    );
  }
  