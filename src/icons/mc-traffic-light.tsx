import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTrafficLight = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,5.5A1.5,1.5,0,1,0,13.5,7,1.5,1.5,0,0,0,12,5.5Zm10,3h-.54A6,6,0,0,0,23,4.5a1,1,0,0,0-1-1H17.82A3,3,0,0,0,15,1.5H9a3,3,0,0,0-2.82,2H2a1,1,0,0,0-1,1,6,6,0,0,0,1.54,4H2a1,1,0,0,0-1,1,6,6,0,0,0,1.54,4H2a1,1,0,0,0-1,1,6,6,0,0,0,5.16,5.93A3,3,0,0,0,9,22.5h6a3,3,0,0,0,2.84-2.07A6,6,0,0,0,23,14.5a1,1,0,0,0-1-1h-.54A6,6,0,0,0,23,9.5,1,1,0,0,0,22,8.5ZM6,18.37A4,4,0,0,1,3.13,15.5H6Zm0-5A4,4,0,0,1,3.13,10.5H6Zm0-5a4.09,4.09,0,0,1-1.83-1,4.09,4.09,0,0,1-1-1.83H6ZM16,19.5a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V4.5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Zm3.83-2.17a4.09,4.09,0,0,1-1.83,1V15.5h2.87A4.09,4.09,0,0,1,19.83,17.33Zm0-5a4.09,4.09,0,0,1-1.83,1V10.5h2.87A4.09,4.09,0,0,1,19.83,12.33Zm0-5a4.09,4.09,0,0,1-1.83,1V5.5h2.87A4.09,4.09,0,0,1,19.83,7.33ZM12,15.5A1.5,1.5,0,1,0,13.5,17,1.5,1.5,0,0,0,12,15.5Zm0-5A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5Z'
    }));
};

export default McTrafficLight;