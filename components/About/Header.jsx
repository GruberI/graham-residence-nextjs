"use client";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    <div className="m-auto sm:px-0 mx-4 pt-10 sm:pt-20 pb-6" id="featured">
      <div className="mx-auto px-4 sm:px-6 mb-10">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-10 sm:gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[7/6] overflow-hidden bg-black-100">
              <img
                src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW.jpg"
                alt="The graham residence nestled in the rocks at dawn."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="sm:ml-5 flex flex-col content-start">
            <div className="space-y-3">
              <Fade>
                <h3 className="text-3xl mb-4">
                  It all started with The Graham Residence...
                </h3>
              </Fade>
              <p className="text-lg">
                Lindsey and Yoni were living in LA and found themselves craving
                space to reset out in nature. As design and nature lovers, they
                often found that they had to sacrifice one or the other in their
                travels, but The Graham Residence united both, with thoughtful
                mid-century design and sliding glass doors that showcase the
                sprawling high desert landscape.
              </p>
              <p className="text-lg pt-2">
                Since launching in 2017, The Graham Residence has hosted
                thousands of guests from all over the world. It has also been
                home to countless photoshoots, elopements, and events.
              </p>
              <p className="text-lg pt-2">
                In 2023, Lindsey launched Graham Collective, inspired by the vision
                to create a contextual gallery space and guest experience. The
                Graham Residence is curated with seasonal exhibitions by
                contemporary artists, all of which are available for
                acquisition. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
