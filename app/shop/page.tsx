import { ShowProducts } from "../components/products";
import { storeData } from "../data";

export default function page() {
  return (
    <div>
      {!storeData && <h1>No posee productos para mostrar</h1>}
      {storeData && storeData?.products && (
        <ShowProducts items={storeData?.products} />
      )}
    </div>
  );
}
