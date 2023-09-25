import React,{useState, useEffect} from 'react'

function DateTimeDisplay() {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    useEffect(() => {
      // Update the current date every second
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    // Function to get the current day
    const getCurrentDay = () => {
      return currentDate.getDate().toString();
    };
  
    // Function to get the current month
    const getCurrentMonth = () => {
      return currentDate.toLocaleDateString(undefined, { month: 'long' });
    };
  
    return (
      <div className='flex gap-3 items-center '>
        <div>
          <div className='date'>{getCurrentDay()}</div>
        </div>
        <div className='flex flex-col leading-4 font-Abril font-thin text-[11px]'>
          <div>{getCurrentMonth()}</div>
          <p>available <br></br>for work</p>
        </div>
      </div>
    );
  }

export default DateTimeDisplay