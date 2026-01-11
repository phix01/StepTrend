import "./Products.css";
import products from "../productData";
import ProductItem from "./ProductItem";
import { useState } from "react";

const Products = () => {
  const [filter, setFilter] = useState("all");

  // Filtreye göre ürünleri filtrele
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const productList = filteredProducts.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <main className="products-wrapper">
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Tüm Ürünler
        </button>
        <button
          className={filter === "kadin" ? "active" : ""}
          onClick={() => setFilter("kadin")}
        >
          Kadın Ayakkabı
        </button>
        <button
          className={filter === "erkek" ? "active" : ""}
          onClick={() => setFilter("erkek")}
        >
          Erkek Ayakkabı
        </button>
        <button
          className={filter === "cocuk" ? "active" : ""}
          onClick={() => setFilter("cocuk")}
        >
          Çocuk Ayakkabı
        </button>
      </div>
      <ul className="products">{productList}</ul>
    </main>
  );
};

export default Products;
