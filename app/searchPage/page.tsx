import { Suspense } from "react";
import Loading from "../loading";
import ShowProducts from "../components/products/showProducts";

interface props {
  searchParams: any;
}

const searchApi = (searchParam: string) =>
  `https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}`;

async function getData(searchParam: string) {
  const res = await fetch(searchApi(searchParam));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ItemPage({ searchParams }: props) {
  const { search } = searchParams;
  const { results: items } = await getData(search);

  return (
    <Suspense fallback={<Loading />}>
      <ShowProducts items={items} />
    </Suspense>
  );
}
