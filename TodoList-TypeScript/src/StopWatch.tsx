import React, { useEffect, useState } from 'react'

export default function StopWatch() {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval: any;
        if (running) {
            interval = setInterval(() => {
                setTime(prev => prev + 10)
            }, 10)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [running])

    return (
        <div className='text-center mt-[90px] rounded-md border border-gray-600 max-w-[400px] mx-auto py-[50px]'>
            <h1 className='text-2xl md:text-4xl font-bold mb-3'>cornometr</h1>
            <div className="mb-3">
                <span className='text-base mx-1 md:text-4xl'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span> :
                <span className='text-base mx-1 md:text-4xl'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
                <span className='text-base mx-1 md:text-4xl'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="flex items-center justify-center gap-x-[10px] ">
                {
                    running ? (<button onClick={() => { setRunning(false) }} className='bg-red-600 py-3 px-4 rounded-md'>Stop</button>) :
                        (<button onClick={() => { setRunning(true) }} className='bg-red-600 py-3 px-4 rounded-md bg-blue-600'>Start</button>)
                }
                <button onClick={() => { setTime(0) }} className=' py-3 px-4 rounded-md bg-yellow-400'>Reset</button>
            </div>
        </div>
    )
}
