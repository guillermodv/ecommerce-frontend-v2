import Link from "next/link";

function index() {
  return (
    //TODO: modify gap on mobile
    <div className="flex justify-center gap-4 border-b-2 border-black py-3">
      <div>
        <Link href="/shop">Productos</Link>
      </div>
    </div>
  );
}

export default index;
