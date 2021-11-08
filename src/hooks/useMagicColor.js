import { useEffect, useRef, useState } from 'react';

function getRamdomColor(previousColor) {
    const colorList = ['red', 'yellow', 'green']
    const previousIndex = colorList.indexOf(previousColor)
    // let ramdomIndex = previousIndex

    // while (previousIndex === ramdomIndex) {
    //     ramdomIndex = Math.floor(Math.random() * 3)
    // }
    let ramdomIndex

    do {
        ramdomIndex = Math.floor(Math.random() * 3)
    } while (previousIndex === ramdomIndex)

    return colorList[ramdomIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent')
    const colorRef = useRef('transparent')

    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('original color', color)
            // console.log('Ref Color', colorRef.current)

            const newColor = getRamdomColor(colorRef.current)
            setColor(newColor)

            colorRef.current = newColor
            console.log(newColor)
        }, 1000)

        return () => {
            console.log('Clear Magic Color')
            clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;