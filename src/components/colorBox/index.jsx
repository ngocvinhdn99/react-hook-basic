import React, { useState } from 'react';
import './styles.scss';

ColorBox.propTypes = {

};

function getRamdomColor() {
    const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const ramdomIndex = Math.trunc(Math.random() * 5)
    return colorList[ramdomIndex]
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color-box') || 'deeppink'
        console.log(initColor)

        return initColor
    })

    function handleColorBoxClick() {
        const newColor = getRamdomColor()
        setColor(newColor)
        localStorage.setItem('color-box', newColor)
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleColorBoxClick}
        >
            {color}
        </div>
    );
}

export default ColorBox;