export default async function TwoRowGrid({ imgSrc }) {
  return (
    <div className="mx-auto mt-10 grid grid-cols-2 max-w-7xl">
      <div className="col-span-2">
        <div className="col-span-2 sm:h-screen w-full">
          <img
            src={imgSrc[0].imgSrc}
            alt="living room"
            className="p-2 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="col-span-2 flex">
        <div className="w-full sm:h-screen">
          <img
            src={imgSrc[1].imgSrc}
            alt="Rocks in desert"
            className="p-2 h-full w-full object-cover"
          />
        </div>

        <div className="w-full sm:h-screen">
          <img
            src={imgSrc[2].imgSrc}
            alt="Fireplace"
            className="p-2 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
