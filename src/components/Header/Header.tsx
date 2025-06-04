import CaretDowm from "../../Icons/CaretDowm"
import EditIcon from "../../Icons/EditIcon"
import SearchIcon from "../../Icons/SearchIcon"

const Header = () => {
  return (
    <header className="bg-[#E8F3F3] h-[8vh] w-[100vw]">
      <div className="w-[80%] p-2 h-full flex mx-auto justify-around align-center" style={{ alignItems: 'center' }}>
        {/* left side */}
        <div className="flex gap-6">
            <div className="flex text-sm font-medium">HomePages <span className="items-end"><CaretDowm /></span></div>
            <div className="flex text-sm font-medium">About</div>
            <div className="flex text-sm font-medium">Categories <span className="items-end"><CaretDowm /></span></div>
        </div>

        {/* middle section for logo */}
        <div className="flex">
          <span className="text-2xl font-semibold bg-[#00AAA1] text-white">NOTE</span> <span className="flex text-sm font-medium items-end">Book</span>
        </div>

        {/* right section fpr fileter and actions */}
        <div className="flex gap-10" style={{ alignItems: 'center' }}>
            <div className="font-medium flex justify-around align-center"><SearchIcon /></div>
            <div className="font-medium flex  justify-around align-center"><EditIcon /></div>
            <div className="font-medium">Contact</div>
            <div className="flex text-sm font-medium">En <span className="items-end"><CaretDowm /></span></div>
        </div>
      </div>
    </header>
  )
}

export default Header
