export default function GroceryShopApp() {

  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      category: "Fruits",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Organic Milk",
      price: 65,
      category: "Dairy",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Brown Bread",
      price: 45,
      category: "Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Fresh Tomatoes",
      price: 40,
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-green-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Fresh Grocery Store</h1>

          <button className="bg-white text-green-600 px-4 py-2 rounded-xl font-semibold shadow">
            Cart (0)
          </button>
        </div>
      </header>

      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Fresh Grocery Delivered Fast
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Fruits, vegetables, dairy products and daily essentials.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg transition">
            Shop Now
          </button>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="flex items-center justify-between mb-8">

          <h3 className="text-3xl font-bold text-gray-800">
            Popular Products
          </h3>

          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-xl px-4 py-2 w-64"
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <span className="text-sm text-green-600 font-semibold">
                  {product.category}
                </span>

                <h4 className="text-xl font-bold text-gray-800 mt-2">
                  {product.name}
                </h4>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>

                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl">
                    Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p>© 2026 Fresh Grocery Store</p>
          <p>Fast Delivery | Fresh Products | Secure Payment</p>
        </div>
      </footer>

    </div>
  );
}
