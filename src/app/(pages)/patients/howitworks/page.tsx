import React from 'react'
import DeliveringBetterHealthcareSolution from '../components/DeliveringBetterHealthcareSolution'
import UseCarelyoRightNow from '../components/UseCarelyoRightNow'
import WhyJoinCarelyo from '../components/WhyJoinCarelyo'

const page = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-col gap-32">
      <DeliveringBetterHealthcareSolution />
      <UseCarelyoRightNow />
      <WhyJoinCarelyo />
    </div>
  )
}

export default page
