export default function SectionFirst() {
  return (
    <div
      className="m-auto border-t border-black pt-20 pb-10"
      id="featured"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[2/3] overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmTvdgVEUP4WwHDCxhzpK4UN6fB8dV8Uxm422BpBvQ2MvW"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-11/12 w-11/12 object-cover object-center m-auto"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pb-6">
              <p className="text-2xl tracking-tight text-black-900 sm:text-3xl italic">
                Convergence
              </p>
            </div>

            <div className="space-y-4">
              <p className="tracking-wide leading-7">
                Graham Gallery is honored to present Convergence, an artistic
                dialogue between Los Angeles-based artists Marcel Rozek and
                David Matthew King. The exhibition is set within the High Desert
                of Yucca Valley, where the boundary between home and gallery are
                blurred. Weathered boulders, ancient junipers, and piñon pines
                form a serene backdrop to the exhibition, where the only
                neighbors in sight are blue jays, hummingbirds, and the
                occasional coyote.
              </p>
              <p className="tracking-wide leading-7">
                King’s work radiates the bright elementary colors of childhood
                joy and wonder, juxtaposed against the massive boulders that
                define the local topography. On his choice of ostensibly simple
                colors, he says “I am always trying to make the most with the
                least. My function is to present things in a new way and to take
                something that you might be familiar with and make it
                disorienting or slightly less familiar.”
              </p>
              <p className="tracking-wide leading-7">
                In contrast, Rozek’s artworks are firmly grounded by the
                desert’s rugged terrain. His intricate, initially abstract work
                takes on a new type of realism as it reflects the detailed
                patterns of sand dunes and the hardy flora and fauna that thrive
                in the high desert all around. Rozek’s meticulous attention to
                detail brings the viewer face-to-face with the textures and life
                forms that define the desert’s harsh beauty
              </p>
              <p className="tracking-wide leading-7">
                Together, King and Rozek’s pieces engage in a captivating
                conversation, contrasting King’s vivid abstraction with Rozek’s
                nod to detailed realism. The interplay of these two perspectives
                offers viewers a multifaceted exploration of the desert
                landscape, reflecting solitude, resilience, and natural beauty.
              </p>
            </div>
            <div className="sm:pt-8 pt-4 pb-4">
              <p className="text-center">-Lindsey Goldberg, Founder and Curator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
