export function PageHeaderHero({
  title = "",
  smallTitle = null,
  imgSrc = null,
}) {
  return (
    <div className="relative isolate overflow-hidden mt-[135px] md:mt-[0px] h-[440px] md:h-[600px]">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      ) : null}

      <div className="mx-auto w-full mt-0 h-full flex items-center justify-center px-10">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          {smallTitle ? (
            <p className="font-thin tracking-tight text-white sm:text-3xl text-xl animate-fadeTwo">
              {smallTitle}
            </p>
          ) : null}

          {title ? (
            <h1 className="font-thin tracking-wide text-white sm:text-7xl text-5xl animate-fadeTwo font-[cormorant]">
              {title}
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PageHeaderHero;
