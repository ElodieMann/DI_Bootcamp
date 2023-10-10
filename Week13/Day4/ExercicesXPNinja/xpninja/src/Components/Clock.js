import React, { useEffect, useState } from 'react'

const Clock = () => {
const [currentDate, setCurrentDate] = useState(new Date())

const tick = () => {
    setCurrentDate(new Date())
}

useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
        clearInterval(interval);
      };
}, [])

return (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {currentDate.toLocaleTimeString('en-US')}</h2>
    </div>
)
}

export default Clock