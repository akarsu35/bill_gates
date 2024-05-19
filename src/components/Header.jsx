const Header = ({money,total}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-white max-w-full min-w-[20rem]">
      <img src="./images/billgates.jpg" alt="" className="rounded-full max-w-40 m-4" />
      <div className="bg-green-500 w-full h-16 flex items-center justify-center text-white">
         <span className="text-2xl font-semibold sm:text-3xl">${money - total} </span>
      </div>
    </div>
  )
}
export default Header