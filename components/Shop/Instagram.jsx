export default function Instagram() {
  return (
    <div className="m-auto border-t border-black">
      <div className="flex flex-col justify-center mt-20">
        <p className="font-thin sm:text-3xl text-2xl leading-8 flex sm:justify-center justify-start mb-20">
          {" "}
          @THEGRAHAMRESIDENCE
        </p>
      </div>
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
      <div className="max-w-7xl md:h-[250px] sm:h-[100px] h-[100px] m-auto">
      <iframe
          src="https://snapwidget.com/embed/1055188"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
}
