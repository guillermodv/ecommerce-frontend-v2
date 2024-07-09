"use client";
import ProductCard from "./productCard";

interface props {
  items: any;
}

export default function ShowProducts({ items }: props) {
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
