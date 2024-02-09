"use client";
import { Slide } from "react-awesome-reveal";

export default function Header() {
  return (
    <div
      className="m-auto sm:px-0 mx-8 border-t border-black pt-20 sm:pt-40 pb-12"
      id="featured"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-10">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="aspect-[7/5] overflow-hidden bg-black-100">
              <img
                src="https://ipfs.filebase.io/ipfs/QmXxDzFFdxJwH15qfzL8UFbvYwkRjhPCvZ4ptXQ9NiNx4F/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW"
                alt="Kyle Steed painting in The Graham Residence living room during the day."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <Slide direction="right">
            <div className="ml-5 flex flex-col content-start">
              <div className="space-y-3">
                <p className="tracking-wide leading-7 text-lg">
                  <span className="font-semibold">The Graham Residence</span>{" "}
                  began in 2017 when Lindsey and Yoni were living in LA and
                  found themselves craving space to reset out in nature. One
                  visit to Joshua Tree National Park had them returning until
                  they stumbled upon the property that would become The Graham
                  Residence.{" "}
                </p>
                <p className="tracking-wide leading-7 text-lg">
                  As design and nature lovers, they often found that they had to
                  sacrifice either design or nature in their travels, but The
                  Graham Residence unites them both, with thoughtful mid-century
                  design and sliding glass doors that showcase the sprawling
                  high desert landscape around it.{" "}
                </p>

                <p className="tracking-wide leading-7 text-lg">
                  TGR is ever-evolving. In 2023, Lindsey launched Graham
                  Gallery, curating the home with rotating works of art by
                  emerging contemporary artists, all of which are available for
                  purchase. In 2024, Lindsey and Yoni launched an ecommerce
                  shop, selling curated goods within the home that guests kept
                  asking about.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
