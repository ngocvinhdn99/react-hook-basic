import { useEffect, useState } from 'react';

function updateClock(date) {
    if (!date) return ''

    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)

    return `${hours}:${minutes}:${seconds}`
}

function useClock() {
    const [timeClock, setTimeClock] = useState('')

    useEffect(() => {
        const timeClock = setInterval(() => {
            const now = new Date()
            const newTimeString = updateClock(now)

            setTimeClock(newTimeString)
        }, 1000);

        return () => {
            console.log('Clean clock')
            clearInterval(timeClock)
        }
    }, [])

    return { timeClock }
}

export default useClock;