import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col">
          <h5 className="font-bold text-center py-2 text-black">
            ¡Bienvenido a Capify!
          </h5>
          <p className="text-center pb-3 text-black">
            Aquí encontrarás las mejores marcas y productos de la tienda.
          </p>
          <img src="https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Moov-Library/default/dw19b720d7/25sept/full3adidasbc.jpg?sw=1920&sfrm=jpg&q=90" />
        </div>
      </section>
    </main>
  );
}
