export default async function TwoColumnGrid() {
  return (
    <div className="grid grid-cols-2 w-screen px-2 bg-[#f4f5f1]">
      <div className="col-span-2">
        <div className="col-span-2 sm:h-screen w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
            alt="between eye and the sky"
            className="p-2 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="col-span-2 flex">
        <div className="aspect-[4/5] w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3"
            alt=""
            className="object-cover p-2 h-full w-full"
          />
        </div>

        <div className="aspect-[4/5] w-full">
          <img
            src="https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M"
            alt=""
            className="object-cover p-2 h-full w-full"
          />
        </div>
      </div>

      <div className="col-span-2 sm:h-screen w-full">
        <img
          src="https://ipfs.filebase.io/ipfs/QmW8UUk56Qbr47pRVnzZc4aQMUMAJydvSjFjYnnDzGsjcv/QmT541GQpg2qZhJ4JQa94rEJBxPWjoYkbGxPRDCy2688Bi"
          alt="woman drawing curtains shut"
          className="p-2  h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
