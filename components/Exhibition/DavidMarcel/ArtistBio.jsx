export default function ArtistBio({ bio }) {
  return (
    <div className="max-w-7xl mx-4 sm:mx-auto">
      <figure className="sm:mt-16 py-10">
        <img className="aspect-video object-cover" src={bio.imgSrc} alt="" />
      </figure>
      <div>
        <h2 className="text-2xl">{bio.title}</h2>
        <p className="mt-6 text-lg">{bio.text}</p>
      </div>
    </div>
  );
}
