export const imagesArray = [
    {
      id: 1,
      name: "Between the Eye and Sky am I",
      src: "https://ipfs.filebase.io/ipfs/QmTbAeVrcSrxttFnv5J2LHnAiYKprgzc94vgtcn7gHjXHy",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Forgotten Lexicon No. 03",
      src: "https://ipfs.filebase.io/ipfs/QmNgNgovNe1FAYgWzfm6u8FDyrx57SUdfSEKSqLNmFwVLF",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Decent of Sun",
      src: "https://ipfs.filebase.io/ipfs/QmVmbeMmM9h244UCofAkThHxYzWUpTbYJRi5y6r2y2bpZA",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
        id: 4,
        name: "The Break of Dawn",
        src: "https://ipfs.filebase.io/ipfs/QmVmbeMmM9h244UCofAkThHxYzWUpTbYJRi5y6r2y2bpZA",
        alt: "Angled front view with bag zipped and handles upright.",
      },
  ]

export default function MultiImageGrid() {
  return (
    <div className="mx-auto my-20 max-w-1xl sm:px-6 lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="aspect-h-3 aspect-w-3 ">
      <img
        src={imagesArray[0].src}
        alt={imagesArray[0].alt}
        className="aspect-h-5 w-full object-cover object-center"
      />
      <p className='pt-2 pb-3'>{imagesArray[0].name}</p>
      <div className="aspect-h-3 aspect-w-3 ">
      <img
        src={imagesArray[3].src}
        alt={imagesArray[3].alt}
        className="h-full w-full object-cover object-center"
      />
      <p className='pt-2 pb-3'>{imagesArray[3].name}</p>
    </div>
    </div>
    <div className="grid-cols-3 sm:grid-cols-1 lg:gap-y-8">
      <div className="aspect-h-2 aspect-w-3 ">
        <img
          src={imagesArray[2].src}
          alt={imagesArray[2].alt}
          className="h-full w-full object-cover object-center"
        />
        <p className='pt-2 pb-2'>{imagesArray[2].name}</p>
      </div>
      <div className="aspect-h-3 aspect-w-3 ">
      <img
        src={imagesArray[0].src}
        alt={imagesArray[0].alt}
        className="h-full w-full object-cover object-center"
      />
      <p className='pt-2 pb-3'>{imagesArray[0].name}</p>
    </div>
    </div>
  </div>
  );
}
