"use client";
import { Product } from "@/app/interfaces";
import ProductCard from "./productCard";

interface Props {
  items: Product[];
}

export default function ShowProducts({ items }: Props) {
  return (
    <section className="py-2">
      {items?.map((item: any) => (
        <div key={item.id}>
          <ProductCard product={item} />
        </div>
      ))}
    </section>
  );
}
