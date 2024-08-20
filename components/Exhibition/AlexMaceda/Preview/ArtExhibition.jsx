export default function ArtExhibition() {
  return (
    <div
      className="max-w-7xl border-t border-b border-black m-auto py-10"
      id="featured"
    >
      <div>
        <div className="w-full">
          <img
            src="https://alexmaceda.nyc3.cdn.digitaloceanspaces.com/0028_L1011914w.jpg"
            alt="Paintings."
            className="mx-auto max-w-full h-auto object-contain"
          />

          <div className="bg-white border-black py-10" id="subscribe">
            <div className="max-w-2xl m-auto">
              <div className="klaviyo-form-Vj7VSy"></div>
              <div className="flex-grow items-start px-4 min-w-0">
                <div className="flex justify-center">
                  <h2 className="text-left text-4xl font-thin tracking-wide text-black-900"></h2>
                  Collector preview will be sent out on September 10th.
                </div>
                <div className="mt-6 space-y-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
