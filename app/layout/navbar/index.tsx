import Link from "next/link";

function index() {
  return (
    //TODO: modify gap on mobile
    <div className="flex justify-center gap-4 border-b-2 border-black py-3">
      <div>
        <Link href="/shop">Shop</Link>
      </div>
    </div>
  );
}

export default index;
