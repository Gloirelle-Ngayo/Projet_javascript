import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
//import { useState } from "react";
const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]



function App() {
  const [productsCp, setProductsCp] = useState(PRODUCTS)
  const [productsCp1, setProductsCp1 ] = useState([])

  const filterProductCp = (event) => {
    console.log("button : "+ event.target.checked)
    if(event.target.checked){
      setProductsCp(productsCp.filter((product)=> product.stocked == true))
      console.log(productsCp)
    }else{
      setProductsCp(PRODUCTS)
    }
    
  }
 
  const filterUseInputValue = (event) => {
    setProductsCp1(PRODUCTS.filter(
      (product) => 
      product.name.toLowerCase().includes(event.target.value.toLowerCase()) && product.stocked
    ))

    if(productsCp1.length > 0){
      setProductsCp(productsCp1)
    }else{
      setProductsCp(PRODUCTS.map((product) => (product.name.toLowerCase() == event.target.value.toLowerCase()) ? {...product, search : true} : {...product, search : false}
      ))
    }

    if(event.target.value.length == 0){
      setProductsCp(PRODUCTS)
    }
    console.log(productsCp)
  }

  return(
    <>
    <div>
      <label htmlFor="filter">Faire un filtre</label>
      <input type="checkbox" name="" id="filter" onChange={filterProductCp} />
    </div>
    <div>
      <label htmlFor="filter">Entrer le nom du fruit</label>
      <input type="text" name="" id="filter" onKeyUp={filterUseInputValue} />
    </div>
      <table className="table">
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {productsCp.map((product,index)=>(
            <tr key={index} className={!product.stocked && product.search ? "table-danger" : ""} >
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App
