
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import products from './components/products'
import Basket from './components/Basket'

function App() {
const [money,setMoney]=useState(1000000000)
const [basket,setBasket]=useState([])
const [total,setTotal]=useState(0)

const resetBasket =()=>{
  setBasket([])
}
useEffect(()=>{
  setTotal(
    basket.reduce((acc, item) => {
      return (
        acc +
        item.amount * products.find((product) => product.id === item.id).price
      )
    }, 0)
  )
  console.log(basket)
},[basket])

  return (
    <div>
      <Header total={total} money={money} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <div>
          <Basket total={total} basket={basket} />
          <button onClick={resetBasket} className='bg-red-500 p-2 text-white rounded-md'>Clear All</button>
        </div>
      )}
    </div>
  )
}

export default App
