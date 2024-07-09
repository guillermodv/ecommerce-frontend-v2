interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
  arrivedTime: number;
  quantity: number;
}

interface Store {
  StoreName: string;
  description: string;
  products: Product[];
  id: number;
}

export type { Product, Store };
