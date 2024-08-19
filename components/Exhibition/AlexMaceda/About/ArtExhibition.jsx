export default function ArtExhibition() {
  return (
    <div
      className="max-w-7xl border-t border-b border-black m-auto py-20"
      id="featured"
    >
      <div className="">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[5/4] bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmeZESJ42SKkVCEqP4B6e8a7vuSuwt1AsBH7Wk3QMSuRx8"
                alt="Painting."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="px-4">
            <h2 className="text-center text-4xl font-thin tracking-wide text-black-900 ">
              The Desert Will Hold You
            </h2>

            <div className="mt-6 space-y-6">
              <p className="text-black-800 leading-6">
                For the past four years, I’ve made my home in The Desert, a
                place I never expected to live, but that called me nonetheless.
                I’ve immersed myself in her contradictions: harsh yet soft,
                expansive yet small, still yet dynamic, barren yet fertile,
                washed out and yet so full of color. I’ve explored her exterior
                landscapes in parallel to diving into my own interior ones.
              </p>
              <p className="text-black-800 leading-6">
                In a world where everything moves so quickly, when endings come
                as rapidly as beginnings, The Desert has offered me stillness.
                Time slows down here and moments you want to savor seem to last
                a bit longer, allowing you to savor them even more slowly. There
                is a sensuality and richness to this place. It wraps itself
                around you, in a way. It holds you.
              </p>
              <p className="text-black-800 leading-6">
                This feeling of being held by someone – or something – greater
                is at the core of this body of work. Dreamlike images of
                anthropomorphic landscapes, figures reaching towards each other
                – or towards something – whatever it is they most desire. Sunset
                and moonrise at the same moment, soft pink gradients melting
                into blue on one side and warm tans on the other. These
                paintings are an ode of gratitude to a place that has given me
                so much and an invite to you, the viewer, to see what you might
                find if you come here too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
