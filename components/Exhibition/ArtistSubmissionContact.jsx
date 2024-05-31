import Link from "next/link";

export default function ArtistSubmissionContact() {
  return (
    <div className="m-auto flex justify-center flex-col border-t border-black py-16">
      <h2 className="sm:text-4xl text-3xl text-center pb-2">
        Artist Submission
      </h2>
      <p className="font-thin text-2xl text-center pb-8">
        Email us your portfolio and tell us about your work
      </p>
      <button className="bg-white border border-black text-black px-2 py-2 hover:text-white hover:bg-black sm:w-[20%] m-auto font-bold shadow-sm text-sm">
        <Link
          href={`mailto:lindsey@graham-collective.com?subject=Portfolio`}
        >
          SUBMIT YOUR WORK
        </Link>
      </button>
    </div>
  );
}
