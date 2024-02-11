export default function AboutGoldberg() {
  return (
    <div className="mx-auto grid grid-cols-2 max-w-7xl py-24 gap-8 mt-4">
      <div className="grid-rows-3">
        <div className="my-20 ml-20 mb-36">
        <p className="font-bold text-xl">Yoni Goldberg</p>
          <p className="pb-6 text-lg">
            <span className="text-slate-500">The Maker - committed to his craft</span>
          </p>
          <p className="text-xl">
            A professional photographer of over a decade, Yoni specializes in
            portraiture and architecture photography. A jack of all trades, he
            enjoys managing and operating The Graham Residence. He is a lifelong
            learner, always preferring to tackle problems on his own. In his
            rare free time he can be found sailing off the coast of California.
          </p>
        </div>

        <div className="rows-span-2 w-[450px] h-[600px] m-auto">
          <img
            src="https://ipfs.filebase.io/ipfs/QmZ9kYjVu8B45JEDmR4MJgoMNPeGVH3AxK91bgTnEEsHTs/QmbJ6vqa8H36GGDJKHH1pw9zgQrr6ePMpENFijLTNPBQxj"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="grid-rows-3">
        <div className="rows-span-2 w-[450px] h-[600px] m-auto">
          <img
            src="https://ipfs.filebase.io/ipfs/QmZVVWhGpYyCajfbK1ath9Rw6UAhjS5HGQ44VCXUtxBSfz/Qmdbz2AEodoUxvPwS3L9P9J8JzJ2w2BH1yvhbJLDLZfQTF"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="my-20 mr-10 mt-36">
        <p className="font-bold text-xl">Lindsey Goldberg</p>
          <p className="pb-6 text-lg">
            <span className="text-slate-500">The Visionary - sees possibility everywhere</span>
          </p>
          <p className="text-xl">
            {" "}
            A visionary with big ideas, and over a decade of experience in brand
            partnerships, Lindsey left the corporate world to pursue her
            passion, art advising and curation. Her intuitive nature allows her
            to foster meaningful relationships with artists and collectors.
            Through TGR, she provides a space & platform for artists and guests
            alike to inspire and be inspired.
          </p>
        </div>
      </div>
    </div>
  );
}
