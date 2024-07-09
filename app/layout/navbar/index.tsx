import Link from "next/link";

function index() {
  return (
    //TODO: modify gap on mobile
    <div className="flex justify-center gap-4 border-b-2 border-black py-3">
      <div>
        <Link href="/searchPage?search=hombre">Hombre</Link>
      </div>
      <div>
        <Link href="/searchPage?search=mujer">Mujer</Link>
      </div>
      <div>
        <Link href="/searchPage?search=ropa">Ropa</Link>
      </div>
      <div>
        <Link href="/searchPage?search=oferta">Ofertas</Link>
      </div>
    </div>
  );
}

export default index;
