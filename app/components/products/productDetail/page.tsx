import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ProductDetail() {
  const productItem: any = {};
  return (
    <article className="flex flex-row py-2 my-0.5 rounded-lg bg-slate-50">
      <div className="rounded-sm px-2"></div>
      <div className="flex-col justify-between px-2">
        <div className="ml-1 inline-block lg:w-[800px] md:w-[200px] sm:w-[180px]">
          <span className="text-xl font-sans text-black truncate block">
            {productItem?.title}
          </span>
        </div>
        <Link
          className="font-sans font-extrabold w-60 text-center text-white bg-green-600 rounded-lg px-2"
          href="www.mercadolibre.com.ar"
        >
          {productItem?.permalink}
        </Link>
      </div>
    </article>
  );
}
