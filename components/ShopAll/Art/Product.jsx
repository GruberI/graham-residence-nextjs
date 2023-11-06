export default function Product({products}) {
    return (
      <div className="bg-white">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0 lg:gap-x-10">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-3/4 w-full overflow-hidden sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75">
                  <img
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{`${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }