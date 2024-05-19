const Product = ({ product, basket, setBasket,total,money }) => {
  const basketItem = basket.find((item) => item.id === product.id)

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id)
    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ])
    } else {
      setBasket([...basket, { id: product.id, title: product.title, price:product.price ,amount: 1 }])
    }
  }

  const removeBasket=()=>{
    const currentBasket = basket.find((item) => item.id === product.id)
    currentBasket.amount -= 1
    const basketWithoutCurrent =basket.filter((item)=>item.id !==product.id)
    if (currentBasket.amount === 0) {
      
      setBasket([
        ...basketWithoutCurrent
      ])
    } else {
        setBasket([...basketWithoutCurrent,currentBasket])
    }
  }
  return (
    <div className="flex flex-col items-center justify-between border border-transparent max-w-[26rem] min-w-[20rem] bg-white mt-2 p-2">
      <div>
        <div className="h-56">
          <img src={product.image} alt="" />
        </div>

        <h6 className="text-xl font-bold">
          {product.title[0].toUpperCase()}
          {product.title.slice(1, product.title.lenght)}
        </h6>
        <h6 className="text-xl font-semibold text-green-500">
          ${product.price}
        </h6>
      </div>

      <div className="flex items-center justify-center text-white gap-2">
        <button
          disabled={!basketItem}
          className={`bg-gray-400 min-w-24 md:min-w-[4.5rem] lg:w-20 h-8 rounded-sm ${
            basketItem && 'bg-red-500'
          }`}
          onClick={removeBasket}
        >
          Sell
        </button>
        <p className="min-w-24 md:min-w-[4.5rem] lg:w-20 h-8 border bg-gray-200 text-black text-lg">
          {(basketItem && basketItem.amount) || 0}
        </p>
        <button
          disabled={total + product.price > money}
          className="bg-green-500  min-w-24 md:min-w-[4.5rem] lg:w-20 h-8 rounded-sm"
          onClick={addBasket}
        >
          Buy
        </button>
      </div>
    </div>
  )
}
export default Product
