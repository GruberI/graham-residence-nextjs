export default function Instagram() {
  return (
    <div className="m-auto border-t border-black">
      <div className="flex flex-col justify-center pt-16 sm:pt-20">
        <a
          href="https://www.instagram.com/graham___collective/"
          target="_blank"
          className="font-thin sm:text-3xl text-2xl leading-8 flex sm:justify-center justify-start mb-16 sm:mb-20 mx-auto"
        >
          {" "}
          @GRAHAM__COLLECTIVE
        </a>
      </div>
      <div className="max-w-7xl m-auto px-2 sm:px-0 hidden sm:flex md:h-[250px] sm:h-[100px] h-[100px]">
        <iframe
          src="https://snapwidget.com/embed/1055188"
          className="snapwidget-widget"
          allowtransparency="true"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <div className="inline sm:hidden">
        <iframe
          src="https://snapwidget.com/embed/1057391"
          className="snapwidget-widget"
          allowtransparency="true"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "640px",
            height: "160px",
          }}
        ></iframe>
      </div>
    </div>
  );
}
