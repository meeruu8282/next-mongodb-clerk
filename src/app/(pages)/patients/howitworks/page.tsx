import DeliveringBetterHealthcareSolution from '../components/DeliveringBetterHealthcareSolution'
import UseCarelyoRightNow from '../components/UseCarelyoRightNow'
import WhyJoinCarelyo from '../components/WhyJoinCarelyo'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbar/NavbarMobile'

const page = () => {
  return (
    <>
      <div className="  max-h-32px top-25px left-144px ">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
      </div>
      <div className="w-4/5 mx-auto flex flex-col gap-32">
        <DeliveringBetterHealthcareSolution />
        <UseCarelyoRightNow />
        <WhyJoinCarelyo />
      </div>
    </>
  )
}

export default page
