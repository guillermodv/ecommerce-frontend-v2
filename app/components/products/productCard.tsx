"use client";

import { Product } from "@/app/interfaces";
import Link from "next/link";
import { currencyFormatter } from "../../util/moneyHelper";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const url = `/productDetail?id=${product.id}`;
  return (
    <article className="flex flex-row py-2 my-0.5 rounded-lg bg-slate-50">
      <div className="rounded-sm px-2">
        <img src={product.image} width={130} height={200} alt={product.name} />
      </div>
      <div className="flex-col justify-between px-2">
        <div className="ml-1 inline-block lg:w-[800px] md:w-[200px] sm:w-[180px]">
          <span className="text-xl font-sans text-black truncate block">
            {product.name}
          </span>
        </div>
        <Link
          className="font-sans font-extrabold w-60 text-center text-white bg-blue-400 rounded-lg px-2 shadow-xl mt-4"
          href={url}
        >
          Ver Detalle
        </Link>
        <div className="font-sans font-extrabold text-black">
          {currencyFormatter({ currency: "USD", value: product.price })}
        </div>
      </div>
    </article>
  );
}
