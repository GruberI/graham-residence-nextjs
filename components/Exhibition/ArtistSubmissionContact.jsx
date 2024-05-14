import Link from "next/link";

export default function ArtistSubmissionContact() {
  return (
    <div className="mt-10 sm:mt-20 m-auto max-w-7xl flex justify-center flex-col">
      <h1 className="sm:text-3xl text-2xl text-center pb-2">
        Artist Submission
      </h1>
      <p className="font-thin text-xl text-center pb-8">
        Email us your portfolio and tell us about your work
      </p>
      <button className="bg-white border border-black text-black px-2 py-2 hover:text-white hover:bg-black sm:w-[20%] m-auto font-bold shadow-sm">
        <Link
          href={`mailto:lindsey@graham-collective.com?subject=Portfolio`}
        >
          SUBMIT YOUR WORK
        </Link>
      </button>
    </div>
  );
}
