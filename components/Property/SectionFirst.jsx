export default function SectionFirst() {
  return (
    <div className="m-auto border-t border-black max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-20 mb-12">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-black-100 aspect-square">
              <img
                src="https://ipfs.filebase.io/ipfs/QmRNe1ozYPmn3kgLTkuTe9PvEgYZR3maqTYQBarpNSf7wD"
                alt="Arial view of The Graham Residence at sunset with person in hotub and white car parked"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <p className="tracking-wide leading-7 text-xl text-center sm:text-left">
                The Graham Residence is a mid-century modern retreat situated on
                20 acres of pristine high desert land surrounded by weathered
                boulders, ancient junipers, Joshua trees and piñon pines in the
                heart of Yucca Valley, just outside of Joshua Tree National
                Park. Serenity and solitude are pervasive and the only neighbors
                in sight are blue jays, hummingbirds, and the occasional coyote.
                This is Mojave Desert at its finest.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
