export default function Instagram() {
  return (
    <div className="m-auto border-t border-black py-12">
     <div className="max-w-7xl mx-auto">
     <div className="flex flex-col justify-center">
        <a
          href="https://www.instagram.com/graham__collective/"
          target="_blank"
          className="font-thin sm:text-2xl text-xl leading-8 flex sm:justify-center justify-start mx-auto"
        >
          {" "}
          <div className="flex flex-row pb-10">
            <p>@GRAHAM<span className="tracking-tightest">__</span> COLLECTIVE</p>
          </div>
        </a>
      </div>
      <div className="m-auto px-2 sm:px-0 hidden sm:flex md:h-[250px] sm:h-[100px] h-[100px]">
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
            width: "450px",
            height: "160px",
          }}
        ></iframe>
      </div>
     </div>
    </div>
  );
}
