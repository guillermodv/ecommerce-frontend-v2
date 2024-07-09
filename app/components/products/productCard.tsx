"use client";

import Link from "next/link";
import { currencyFormatter } from "../../util/moneyHelper";

/* eslint-disable @next/next/no-img-element */
export default function ProductCard({ product }: { product: any }) {
  return (
    <article className="flex flex-row py-2 my-0.5 rounded-lg bg-slate-50">
      <div className="rounded-sm px-2">
        <img
          src={product.thumbnail}
          width={130}
          height={200}
          alt={product.title}
        />
      </div>
      <div className="flex-col justify-between px-2">
        <div className="ml-1 inline-block lg:w-[800px] md:w-[200px] sm:w-[180px]">
          <span className="text-xl font-sans text-black truncate block">
            {product.title}
          </span>
        </div>
        <Link
          className="font-sans font-extrabold w-60 text-center text-white bg-blue-400 rounded-lg px-2 shadow-xl mt-4"
          href="/productDetail"
        >
          Ver Detalle
        </Link>
        <div className="font-sans font-extrabold text-black">
          {currencyFormatter({ currency: "USD", value: product.price })}
        </div>
        <Link
          className="font-sans font-extrabold w-60 text-center text-white bg-green-600 rounded-lg px-2 shadow-xl mt-4"
          href={product.permalink}
        >
          Comprar en MercaLibre
        </Link>
      </div>
    </article>
  );
}
