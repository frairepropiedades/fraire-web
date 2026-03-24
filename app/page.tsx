export default function Home() {
  return (
    <main className="bg-white min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">FRAIRE</h1>
        <nav className="flex gap-6">
          <a href="#">Inicio</a>
          <a href="#">Propiedades</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold">
          Encontrá tu próxima propiedad
        </h2>
        <p className="mt-4 text-lg">
          Compra, venta y alquiler en Balcarce
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl">
          Ver propiedades
        </button>
      </section>

      {/* PROPIEDADES */}
      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
            titulo: "Casa en Balcarce",
            detalle: "3 ambientes · USD 85.000",
          },
          {
            img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            titulo: "Departamento céntrico",
            detalle: "2 ambientes · USD 60.000",
          },
          {
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            titulo: "Casa con patio",
            detalle: "4 ambientes · USD 120.000",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt="propiedad"
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{item.titulo}</h3>
              <p className="text-gray-600">{item.detalle}</p>

              <a
                href="https://wa.me/549XXXXXXXXXX"
                target="_blank"
                className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Consultar
              </a>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}