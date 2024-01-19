export default async function TwoColumnGrid() {
  return (
    <div className="mx-auto grid grid-cols-2">
      <div className="col-span-2">
        <div className="col-span-2">
          <img
            src="https://ipfs.filebase.io/ipfs/QmWKp5TpnLHwUrvtvEASzE51Amkiyie6BmpFpw8sqjdpVR"
            alt="between eye and the sky"
            className=""
          />
        </div>
      </div>

      <div className="col-span-2 flex">
        <div className="aspect-[4/5]">
          <img
            src="https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3"
            alt=""
            className="p-2"
          />
        </div>

        <div className="aspect-[4/5]">
          <img
            src="https://ipfs.filebase.io/ipfs/QmeiFCmuZqKA94UHFPWnbyGEToKF8QePYmqQsPTeGJ8jtB/QmSiKUBDbNpTQjuoovtX1YFhPwm4cnfQJGLpGQeZPeE1xL"
            alt=""
            className="p-2"
          />
        </div>
      </div>

      <div className="col-span-2">
        <img
          src="https://ipfs.filebase.io/ipfs/QmW8UUk56Qbr47pRVnzZc4aQMUMAJydvSjFjYnnDzGsjcv/QmT541GQpg2qZhJ4JQa94rEJBxPWjoYkbGxPRDCy2688Bi"
          alt="woman drawing curtains shut"
          className=""
        />
      </div>
    </div>
  );
}
