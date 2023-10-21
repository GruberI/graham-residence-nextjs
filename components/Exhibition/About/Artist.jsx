export default function Artist() {
    return (
      <div className="w-screen sm:px-0 lg:px-0 border-t  border-gray-400">
      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-6">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
              <div className="overflow-hidden bg-gray-100" style={{height: '600px'}}>
                <img
                  src="https://ipfs.filebase.io/ipfs/QmUPPSHdoa5JiaLXvRKV3mG4pWSKEvsTjty4T81nmFknF9"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="object-fit object-center"
                />
              </div>
            </div>
            <div>
              <div className=" space-y-10">
                <p><span className='font-semibold'>Kyle Steed</span> (b. 1982; Savannah, GA)</p>
                <p className="mt-3 text-sm text-gray-900 leading-7">
                Kyle Andrew Steed is a self-taught painter, photographer, muralist and typographer. For the first fourteen years of his life he moved across the southern US before his family settled in Nashville, Tennessee. This itinerant childhood where he often sought stability and a sense of home gave way to his singular visual language that draws on a range of influences including meditations, loss, sought utopias, memory, identity as well as longing and understanding of self. 
                <br></br>
                <br></br>
                Following his graduation from high school he enlisted in the US Air Force where he was assigned to an intelligence outpost in Misawa, Japan. He relocated to Dallas, Texas in 2007. For the next five years he worked in the digital creative space and created over a dozen hand-written font libraries. This time in his life greatly informs his latest series of work which borrows font makings structural guidelines and the human form.
                <br></br>
                <br></br>
                From the intimate scale of his journals and polaroid photography to the monumental scale of his murals and paintings the thorough through line of the work lies in the exploration of the relationship between the human body and the landscapes we inhabit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }