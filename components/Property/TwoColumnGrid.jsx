export default async function TwoColumnGrid() {
  return (
    <div className="mx-auto grid grid-cols-2 max-w-6xl py-10 sm:py-20 gap-10">
      <div className="col-span-2">
        <div className="col-span-2 ">
          <img
            src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
            alt="between eye and the sky"
            className="px-2 sm:px-10"
          />
        </div>
      </div>

      <div className="grid-rows-1 col-span-2 flex">
        <div className="aspect-3/4">
          <img
            src="https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3"
            alt=""
            className="px-2 sm:px-10"
          />
        </div>

        <div className="aspect-3/4">
          <img
            src="https://ipfs.filebase.io/ipfs/QmeiFCmuZqKA94UHFPWnbyGEToKF8QePYmqQsPTeGJ8jtB/QmSiKUBDbNpTQjuoovtX1YFhPwm4cnfQJGLpGQeZPeE1xL"
            alt=""
            className="px-2 sm:px-10"
          />
        </div>
      </div>

      <div className="col-span-2">
        <img
          src="https://ipfs.filebase.io/ipfs/QmW8UUk56Qbr47pRVnzZc4aQMUMAJydvSjFjYnnDzGsjcv/QmT541GQpg2qZhJ4JQa94rEJBxPWjoYkbGxPRDCy2688Bi"
          alt="woman drawing curtains shut"
          className="px-2 sm:px-10"
        />
      </div>
    </div>
  );
}