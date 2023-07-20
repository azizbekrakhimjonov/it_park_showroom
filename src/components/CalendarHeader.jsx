import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'
function CalendarHeader() {
  const {monthIndex,setMonthIndex}= useContext(GlobalContext)
  function handlePrevMonth() {
    setMonthIndex(monthIndex-1)
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex+1)
  }
  function handleReset() {
    setMonthIndex( monthIndex === dayjs().month()?monthIndex +Math.random():dayjs().month())
  }
  return (
    <header className='px-4 py-2 flex items-center '>
      <img src={logo } className='mr-2 w-12 h-12' alt="" />
      <h1 className="mr-10 text-xl text-grey-500 fond-bold">
        Calendar
      </h1>
      <button className="border border-gray-500 rounded py-2 px-4 mr-5 " onClick={handleReset}> Today </button>
      <button onClick={handlePrevMonth}> 
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'> 
            chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
      <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'> 
            chevron_right
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-600 font-bold mx-2'>
        {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  ) 
}

export default CalendarHeader