"use client";
import { Fade } from "react-awesome-reveal";

export default function AboutGoldberg() {
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 max-w-7xl py-10 gap-8 mb-1 hidden sm:flex">
        <div className="grid-rows-3">
          <div className="my-20 ml-20 mb-36">
            <p className="font-semibold text-2xl">YONI</p>
            <Fade>
              <p className="pb-6 text-lg sm:text-xl">
                <span className="font-[cormorant] italic">
                  The Maker - committed to his craft
                </span>
              </p>
            </Fade>
            <p className="sm:text-xl text-lg">
              A commercial photographer of over a decade, Yoni specializes in
              fashion, portraiture and architecture photography. On the side, he
              enjoys managing and operating The Graham Residence. He is a
              lifelong learner, always preferring to learn new trades 
              in order to tackle problems on his own. In his free time he can 
              be found sailing off the coast of California.
            </p>
          </div>

          <div className="rows-span-1 sm:rows-span-2 w-[450px] h-[600px] m-auto">
            <img
              src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/006.jpg"
              alt="linds"
              className="h-full w-full object-cover mt-10 sm:mt-0"
            />
          </div>
        </div>
        <div className="grid-rows-3 sm:grid-rows-3">
          <div className="rows-span-1 sm:rows-span-2 w-[450px] h-[600px] m-auto">
            <img
              src="https://ipfs.filebase.io/ipfs/QmZVVWhGpYyCajfbK1ath9Rw6UAhjS5HGQ44VCXUtxBSfz/Qmdbz2AEodoUxvPwS3L9P9J8JzJ2w2BH1yvhbJLDLZfQTF"
              alt="yoni"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="my-20 mr-10 mt-36 pb-10">
            <p className="font-semibold text-2xl">LINDSEY</p>
            <Fade>
              <p className="pb-6 text-lg sm:text-xl">
                <span className=" font-[cormorant] italic">
                  The Visionary - sees possibility everywhere
                </span>
              </p>
            </Fade>
            <p className="sm:text-xl text-lg">
              {" "}
              A visionary with big ideas, and over a decade of experience in
              brand partnerships, Lindsey left the corporate world to pursue her
              passion for Art Advising and Curation. Her intuitive nature allows
              her to foster meaningful relationships with artists and
              collectors. Through The Graham Collective, she provides a space &
              platform for artists and clients alike to inspire and be inspired.
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto max-w-7xl inline sm:hidden grid grid-col-1">
        <div className="w-[350px] h-[500px] m-10 m-auto">
          <img
            src="https://ipfs.filebase.io/ipfs/QmZVVWhGpYyCajfbK1ath9Rw6UAhjS5HGQ44VCXUtxBSfz/Qmdbz2AEodoUxvPwS3L9P9J8JzJ2w2BH1yvhbJLDLZfQTF"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-10 m-auto mt-6 pb-10 sm:pb-0">
          <p className="font-bold text-2xl">YONI</p>
          <p className="pb-4 sm:pb-6 text-lg">
            <span>
              The Maker - committed to his craft
            </span>
          </p>
          <p className="text-xl">
            A professional photographer of over a decade, Yoni specializes in
            fashion, portraiture and interiors photography. He
            enjoys managing and operating The Graham Residence & The Graham Collective. In his
            free time he can be found sailing off the coast of California.
          </p>
        </div>
      </div>

      <div className="w-[350px] h-[500px] m-10 m-auto sm:hidden">
        <img
          src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/006.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-10 m-auto sm:hidden mb-10 mt-6">
        <p className="font-bold text-2xl">LINDSEY</p>
        <p className="pb-4 sm:pb-6 text-lg">
          <span className="text-slate-500">
            The Visionary - sees possibility everywhere
          </span>
        </p>
        <p className="text-xl">
          A visionary with big ideas, and over a decade of experience in brand
          partnerships, Lindsey left the corporate world to pursue her passion,
          art advising and curation. Her intuitive nature allows her to foster
          meaningful relationships with artists and collectors. Through The
          Graham Residence, she provides a space & platform for artists and
          guests alike to inspire and be inspired.
        </p>
      </div>
    </div>
  );
}
