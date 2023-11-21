import Link from "next/link";


export default function ExhibitionList() {
    const artistExhibitions = [
        {
          artist: "Kyle Steed",
          name: "A Quiet Noise",
          imgSrc:
            "https://ipfs.filebase.io/ipfs/QmZUP4GfbWpnwySsEh2jJ1KdG96dPEK7fSnoGRK7AeCaZc/QmdFrNgmbK3FwH8DTjzPQJEXfk8CHXBeb72HSe37ArVRgW",
          imgAltText:
            "Painting by Kyle Steed hung in living room of Graham Residence",
          href: "/exhibition/kyle-steed",
        },
        {
          artist: "Thai Mainhard",
          name: "Desert Spring",
          imgSrc:
            "https://ipfs.filebase.io/ipfs/QmWjsuayG2e1Nt996UGJEXEZGvd9x3DCqe9FyijEUxwQyD",
          imgAltText:
            "Various paintings by Thai resting on porch at the graham residence",
          href: "/exhibition/thai-mainhard",
        },
      ];
  return (
    <div className="grid ">
      {artistExhibitions.map((exhibit, i) => {
        <Link href={exhibit.href} className="flex flex-col" key={i}>
          <div className="aspect-[7/5] overflow-hidden">
            <img
              src={exhibit.imgSrc}
              alt={exhibit.imgAltText}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p>Exhibition</p>
          <h1>{exhibit.name}</h1>
          <p>{exhibit.artist} on display at the Graham Residence</p>
        </Link>;
      })}
    </div>
  );
}
