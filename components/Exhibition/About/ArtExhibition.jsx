export default function ArtExhibition() {
  return (
    <div
      className="w-screen sm:px-0 lg:px-0 border-t  border-gray-400"
      id="featured"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-26 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
              <div className="aspect-h-1 aspect-w-1  bg-gray-100">
                <img
                  src="https://ipfs.filebase.io/ipfs/QmQTWf7mwwEodd5RUH2ShWPtbNqqJDr5DwXbwPJgv33Qhs"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="text-center mt-2 text-7xl font-thin tracking-wide text-gray-900 sm:text-6xl">
                A Quiet Noise
              </h2>

              <div className="mt-10 space-y-10">
                <p className="mt-3 text-base text-gray-800 leading-8">
                  Sitting under an open sky watching the light slowly fade from
                  hues of blue and pink to shades of deep purple I heard the
                  sound of a bird's wings above me. I was struck with awe at how
                  quiet the world had become at this moment to hear something so
                  delicate. These new works speak to my search for solace in a
                  season of change. While distractions abound, the practice of
                  solitude is vitally important. I worked into those early
                  morning hours at night where true solitude can be found.
                  Listening to the stillness of air.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-7 text-base text-gray-800 leading-8">
            In nature I believe there is no concept of chaos, only cosmos. The
            use of repeated symbols and imagery in my work creates the kind of
            structure I need. The placement of hands and eyes and feet are all
            reminders of finding myself in the midst of a greater landscape. My
            connection to the land can be sensed in the color palette. I want to
            find balance somewhere between that place of stillness to hear the
            flight of birds above me and the chaos of day-to-day life spinning
            underneath me.
          </p>
        </div>
      </div>
    </div>
  );
}
