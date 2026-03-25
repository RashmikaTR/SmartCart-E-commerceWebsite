import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import API from "../services/api";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    API.get("/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (

    <div className="p-10 grid grid-cols-4 gap-6">

      {products.map((p)=>(
        <ProductCard key={p.id} product={p}/>
      ))}

    </div>

  );

}

export default Products;