export default function ArtExhibition() {
  return (
    <div
      className="max-w-7xl border-t border-b border-black m-auto py-10"
      id="featured"
    >
      <div>
        <div className="w-full">
          <img
            src="https://alexmaceda.nyc3.cdn.digitaloceanspaces.com/AlexMaceda/0028_L1011914w.jpg"
            alt="Paintings."
            className="mx-auto max-w-full h-auto object-contain"
          />

          <div className="bg-white border-black py-10" id="subscribe">
            <div className="max-w-2xl m-auto">
              <div className="klaviyo-form-Vj7VSy"></div>
              <div className="flex-grow items-start px-4 min-w-0">
                <div className="flex flex-col justify-center text-center">
                  <h2 className="text-center text-4xl font-thin tracking-wide text-black-900"></h2>
                  <div>For sales inquiries: <a href="mailto:lindsey@graham-collective.com">Lindsey Goldberg</a>
                </div></div>
                <div className="mt-6 space-y-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
