export default function SectionFirst() {
  return (
    <div className="m-auto border-t border-black py-16 max-w-7xl" id="featured">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-black-100 flex justify-start">
              <img
                src="https://ipfs.filebase.io/ipfs/QmTvdgVEUP4WwHDCxhzpK4UN6fB8dV8Uxm422BpBvQ2MvW"
                alt="Paintings against the wall."
                className="object-cover object-center m-auto w-full h-full sm:mr-10"
              />
            </div>
          </div>
          <div className="flex flex-col pt-10 mx-2">
            <div className="pb-4">
              <p className="text-2xl tracking-tight text-black-900 sm:text-3xl italic text-center sm:text-left sm:pl-4">
                Convergence
              </p>
            </div>

            <div className="space-y-4 mx-4 text-center sm:text-left">
              <p>
                The Graham Collective is honored to present Convergence, an artistic
                dialogue between Los Angeles-based artists Marcel Rozek and
                David Matthew King. The exhibition is set in the high desert
                of Yucca Valley, where the boundary between home and gallery are
                blurred. Weathered boulders, ancient junipers, and piñon pines
                form a serene backdrop to the exhibition, where the only
                neighbors in sight are blue jays, hummingbirds, and the
                occasional coyote.
              </p>
              <p>
                King’s work radiates the bright colors of childhood, juxtaposed 
                against massive boulders that define the local topography. Together
                they create a feeling of joy and wonder and reflect how I feel upon
                arriving at The Graham Residence. On his choice of primary
                colors, he says “I am always trying to make the most with the
                least. My function is to present things in a new way and to take
                something that you might be familiar with and make it
                disorienting or slightly less familiar.”
              </p>
              <p>
                Rozek is a process oriented painter working by pouring diluted 
                oil paint onto a raw unprimed canvas, allowing interactions 
                between the materials he uses and the space the work exists within 
                to become the subject. Organic shapes naturally take form, and here 
                at The Graham Residence his works are firmly grounded by the
                desert’s rugged terrain. I see in them the detailed patterns of sand
                dunes and the hardy flora and fauna that thrive in the high desert. 
                Rozek’s meticulous attention to detail brings me face-to-face with the 
                textures and life forms that define the desert’s harsh beauty
              </p>
              <p>
                Together, King and Rozek’s pieces engage in a captivating
                conversation of exploration, experimentation, wonder, resilience, 
                and natural beauty.
              </p>
            </div>
            <div className="sm:pt-8 pt-4 pb-4">
              <p className="text-center">
                -Lindsey Goldberg, Founder and Curator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
