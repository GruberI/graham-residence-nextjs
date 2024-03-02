export default async function TwoColumnGrid2() {
  return (
    <div className="grid grid-cols-2 w-screen px-2 pb-6 sm:pb-0">
      <div className="col-span-2 flex">
        <div className="w-full sm:h-screen aspect-[3/4]">
          <img
            src="https://ipfs.filebase.io/ipfs/QmNxRGDXKMcBK6ehDcvAEtaQoaWQbPoJWtzTQUnsuvkQLH/QmTWzJNS45ewpJiznRbws5UL2NUSe49TknNcA71KWibBQP"
            alt=""
            className="object-cover p-2 h-full w-full"
          />
        </div>

        <div className="w-full sm:h-screen aspect-[3/4]">
          <img
            src="https://ipfs.filebase.io/ipfs/QmZiPZYmzCfRpLYmbjoveouAMJDdHqQr4jk1w6WGPrcB4m/QmesruK88eqKhgZn1NYFTEskR8VwZBWyLwPwqT2npA6LGa"
            alt=""
            className="object-cover p-2 h-full w-full"
          />
        </div>
      </div>

      <div className="col-span-2 sm:h-screen w-full">
        <img
          src="https://ipfs.filebase.io/ipfs/QmUk5k6m3tinH7SxfMCMNwuQLuCHgLdzzLmLAF518c5uvi/QmTLfehxT5ZBtuBv99Hxgctm9B4xfyhdmsDuttSWdiDTWy"
          alt="woman drawing curtains shut"
          className="p-2 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
