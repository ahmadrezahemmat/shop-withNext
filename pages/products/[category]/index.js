import { useRouter } from "next/router";
import db from "../../../data/db.json";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard/ProductCard";
import styles from "@/styles/ProductsByCategory.module.css";

export default function ProductsByCategory() {
  const { category } = useRouter().query;
  const [products, setProducts] = useState(db[category]);
  const [searchKey, setSearchKey] = useState('');
  useEffect(() => {
    setProducts(db[category])
    setSearchKey('')
  }, [category]);
  useEffect(() => {
    if (searchKey) {
      const searchProduct = db[category].filter((product) =>
        product.text.includes(searchKey)
      );
      setProducts(searchProduct);
    } else {
      setProducts(db[category]);
    }
  }, [searchKey]);

  return (
    <div className="container">
      <div className={`${styles.searchContainer} section`}>
        <input
          type="text"
          placeholder="دنبال چی میگردی؟"
          className={styles.search}
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
      </div>
      <div className="section">
        <h1>محصولات:{category}</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
