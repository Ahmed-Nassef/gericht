import React from 'react'
import BarHeader from '../container/BarContainers/BarHeader/BarHeader'
import BookTable from '../container/BarContainers/bookTable/BookTable'
import Drinks from '../container/BarContainers/drinks/Drinks'
import HappyHours from '../container/BarContainers/happy Hours/HappyHours'
import Poison from '../container/BarContainers/poison/Poison'
import SpecialMenu from '../container/Menu/SpecialMenu'
import FindUs from '../container/Findus/FindUs'
const Bar = props => {
  return (
    <>
    <BarHeader />
    <BookTable />
    <Drinks />
    <Poison />
    <HappyHours />
    <SpecialMenu />
    <FindUs />
    </>
  )
}


export default Bar