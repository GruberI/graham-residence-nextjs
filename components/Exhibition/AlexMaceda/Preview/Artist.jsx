export default function Artist() {
  return (
    <div className="m-auto border-t border-black max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-20 mb-12">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-black-100 aspect-square">
              <img
                src="https://alexmaceda.nyc3.cdn.digitaloceanspaces.com/2024_aM70298.jpg"
                alt="Alex"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">ALEX MACEDA</span> (b. 1989)
              </p>
              <p className="tracking-wide leading-7">
              Alex Maceda is a Filipina-American artist and writer living 
              and working between Joshua Tree, California and New York City. 
              Her energetic painting and lyrical writing explore the medial spaces 
              between waking and dreaming, reality and imagination, literal and abstract. 
              She is particularly inspired by the human condition and the feminine experience, 
              as well as esoteric, shamanic, and spiritual themes. {" "}
              </p>

              <p className="tracking-wide leading-7">
              Defined by movement, her abstract practice utilizes the physicality of 
              freeform mark-making and experiments with the materiality of paint and 
              its transparency (or lack thereof) to articulate layered, multi-faceted 
              compositions. In her abstract figuration, Alex makes manifest compositions 
              she sees in dreams and meditative states onto canvas, and/or depicts archetypal, 
              yet specific, experiences she has in her waking life. 
              </p>

              <p className="tracking-wide leading-7">
              She holds a BA in Classical Studies with a Minor in Studio Art from Dartmouth College 
              and an MBA from Stanford Graduate School of Business. She is an MFA candidate 
              in Painting at the New York Studio School. Alex is passionate about mental health and 
              a dedicated student of yoga, meditation and other healing modalities. She was raised 
              in between the San Francisco Bay Area and Manila, Philippines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
