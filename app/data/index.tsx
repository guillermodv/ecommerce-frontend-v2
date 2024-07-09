import { Store } from "../interfaces";

export const storeData: Store = {
  id: 1,
  StoreName: "Vinogourmet",
  description: "a very long description",
  products: [
    {
      name: "vino blanco",
      description: "blanco",
      price: 15,
      image:
        "https://acdn.mitiendanube.com/stores/002/095/913/products/md-imagenes-web-de-productos-10-e7022e3d7eda2d0a3117032729716592-480-0.png",
      id: 1,
      arrivedTime: 1,
      quantity: 1,
    },
    {
      name: "vino tinto",
      description: "tinto comun",
      price: 12,
      image:
        "https://acdn.mitiendanube.com/stores/002/095/913/products/md-imagenes-web-de-productos-10-e7022e3d7eda2d0a3117032729716592-480-0.png",
      id: 2,
      arrivedTime: 1,
      quantity: 10,
    },
    {
      name: "vino rosado",
      description: "vino rosado tranca",
      price: 11,
      image:
        "https://acdn.mitiendanube.com/stores/002/095/913/products/md-imagenes-web-de-productos-10-e7022e3d7eda2d0a3117032729716592-480-0.png",
      id: 3,
      arrivedTime: 1,
      quantity: 4,
    },
    {
      name: "vino blend",
      description: "blend de vinos",
      price: 15,
      image:
        "https://acdn.mitiendanube.com/stores/002/095/913/products/md-imagenes-web-de-productos-10-e7022e3d7eda2d0a3117032729716592-480-0.png",
      id: 4,
      arrivedTime: 1,
      quantity: 4,
    },
  ],
};
