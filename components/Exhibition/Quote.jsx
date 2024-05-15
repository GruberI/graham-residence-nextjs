export default function Quote({ quote }) {
  return (
    <div className="m-auto mt-20">
      <div className="mx-auto text-center">
        <div className="inset-x-0 bottom-0 sm:static sm:self-stretch border-t border-b border-black py-16 px-10">
          <h1
            className={`sm:text-${quote.size}xl text-lg italic tracking-widest font-bold`}
          >
            {quote.text}
          </h1>
          <p className="pt-8 text-medium">{quote.artist}</p>
        </div>
      </div>
    </div>
  );
}
