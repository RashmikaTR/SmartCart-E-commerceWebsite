import ProductCard from "../components/productCard";

const products = [
  {
    id:1,
    name:"Laptop",
    price:1200,
    image:"https://via.placeholder.com/200"
  },
  {
    id:2,
    name:"Phone",
    price:800,
    image:"https://via.placeholder.com/200"
  }
];

function Products() {

  return (

    <div className="p-10 grid grid-cols-4 gap-6">

      {products.map((p)=>(
        <ProductCard key={p.id} product={p}/>
      ))}

    </div>

  );
}

export default Products;