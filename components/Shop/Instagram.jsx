import Calendar from "../Navbar/CalendarWidget/Calendar";

export default function Instagram() {
  return (
    <div className="m-auto border-t border-black">
      <div className="flex flex-col justify-center pt-20">
        <p className="font-thin sm:text-3xl text-2xl leading-8 flex sm:justify-center justify-start">
          {" "}
          WE'D LOVE TO SEE YOU AT THE GRAHAM RESIDENCE
        </p>

        <div className="mb-14 mt-6 m-auto">
          <Calendar />
        </div>
      </div>
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
      <div className="max-w-7xl m-auto">
        <iframe
          src="https://snapwidget.com/embed/1055188"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
        ></iframe>
      </div>
    </div>
  );
}
