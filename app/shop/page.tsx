import { storeData } from "../data";

export default function page() {
  return (
    <div>
      {!storeData && <h1>No posee productos para mostrar</h1>}
      {storeData && <h1>Shop</h1>}
    </div>
  );
}
