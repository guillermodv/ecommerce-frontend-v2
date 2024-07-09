"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { storeData } from "../data";
import { Product } from "../interfaces";

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const productItem: Product | undefined = storeData.products.find(
    (product) => (product.id = Number(id))
  );

  console.log("SALIDA", JSON.stringify(storeData.products));

  if (!productItem) {
    return <div>No item found</div>;
  }

  return (
    <article className="flex flex-row py-2 my-0.5 rounded-lg bg-slate-50">
      <div className="flex flex-col mb-4">
        <Link
          href="/shop"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M13.293 16.293a1 1 0 0 1-1.414 0L6 10.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Volver</span>
        </Link>
        <div className="bg-white shadow-md rounded-lg p-6 m-6">
          <img
            src={productItem.image}
            alt={productItem.name}
            className="mb-4 rounded-lg"
          />
          <h2 className="text-xl font-semibold mb-2">{productItem.name}</h2>
          <p className="text-gray-700 mb-2">{productItem.description}</p>
          <p className="text-gray-900 font-semibold mb-2">
            ${productItem.price}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
