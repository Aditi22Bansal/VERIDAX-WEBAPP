export default function StatsSection() {
  return (
    <section className="py-12 bg-mint-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary">10K+</h3>
            <p className="text-gray-500 text-sm mt-1">Volunteers Registered</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary">₹5M+</h3>
            <p className="text-gray-500 text-sm mt-1">Funds Raised</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary">500+</h3>
            <p className="text-gray-500 text-sm mt-1">Community Projects</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary">1000+</h3>
            <p className="text-gray-500 text-sm mt-1">Sustainable Products</p>
          </div>
        </div>
      </div>
    </section>
  )
}

