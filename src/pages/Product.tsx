//Product images
import Product1 from "../assets/products/Product-1.webp"
import Product2 from "../assets/products/Product-2.webp"
import Product3 from "../assets/products/Product-3.webp"
import Product4 from "../assets/products/Product-4.webp"
import Product5 from "../assets/products/Product-5.webp"
import Product6 from "../assets/products/Product-6.webp"

const Product = () => {

  //product full data

  const products = [
  {
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum quam urna, sit amet faucibus diam viverra et.",
    price : "300$",
    image: Product1
  },
    {
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum quam urna, sit amet faucibus diam viverra et.",
    price : "250$",
    image: Product2
  },
  {
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum quam urna, sit amet faucibus diam viverra et.",
    price : "200$",
    image: Product3
  },
  {
    name: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum quam urna, sit amet faucibus diam viverra et.",
    price : "300$",
    image: Product4
  },
  {
    name: "Product 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum quam urna, sit amet faucibus diam viverra et.",
    price : "300$",
    image: Product5
  },
  {
    name: "Product 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum quam urna, sit amet faucibus diam viverra et.",
    price : "300$",
    image: Product6
  }
]

  return (
    <section className="w-full bg-slate-200 flex flex-col text-blue-850">
      <h1 className="w-full text-center font-extrabold text-blue-950 text-xl md:text-3xl mt-4">Our Products</h1>
      <section className="w-full flex flex-col items-center mb-2">
        
        {/*Products section */}
        <ul className="w-full flex flex-col justify-around">
          {products.map((product, i)=>{
            return <li className="w-full h-[90vh] flex flex-col md:flex-row items-center justify-around mt-3 border-b-2 border-b-blue-900 mb-6 md:border-b-0 md:mb-0" key={i}>
              <img src={product.image} alt={product.name} className="w-[60%] md:w-[45%] h-[85%] object-cover rounded-md md:drop-shadow-2xl md:drop-shadow-slate-400"/>
              <section className="w-[60%] md:w-[45%] h-[85%] mt-2 md:mt-0 flex flex-col gap-6 text-blue-900">
                <h3 className="w-full text-center mt-2 mb-4 text-xl md:text-2xl fond-bold">{product.name}</h3>
                <p className="md:text-lg">Description: {product.description}</p>
                <p className="md:text-lg font-bold">Price: {product.price}</p>
              </section>
            </li>
          })}
        </ul>

        <p className="text-start text-lg md:text-xl font-semibold mt-8 mb-6">Come check out our store for more</p>
      </section>
    </section>
  )
}

export default Product