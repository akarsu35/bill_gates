const Basket = ({basket,total}) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-2xl font-semibold">Your Receipt</h1>
      {basket.map((item, idx) => {
        return (
          <div
            key={idx}
            className="grid grid-cols-3 w-full text-xl border-b-2"
          >
            <div className="flex justify-start p-2">
              <h2>{item.title}</h2>
            </div>
            <div className="flex items-center justify-center">
              <h2>x{item.amount}</h2>
            </div>
            <div className="flex justify-end pr-2">
              <h2 className="text-green-500 font-semibold">
                ${item.price * item.amount}
              </h2>
            </div>
          </div>
        )
      })}
      <div className="w-full ">
        <div className="flex items-center justify-between p-2 ">
          <div>
            <p className="text-lg font-semibold "> TOTAL</p>
          </div>

          <div>
            {' '}
            <p className="text-green-500 text-xl font-semibold">${total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Basket