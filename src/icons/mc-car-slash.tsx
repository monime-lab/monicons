import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCarSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7,13a1,1,0,1,0,1,1A1,1,0,0,0,7,13ZM19.76,9.11,18.41,5.05a3,3,0,0,0-2.85-2H9.66a1,1,0,0,0,0,2h5.9a1,1,0,0,1,1,.69L17.61,9H15.66a1,1,0,0,0,0,2H19a1,1,0,0,1,1,1v3.34a1,1,0,1,0,2,0V12A3,3,0,0,0,19.76,9.11Zm-16-6.82A1,1,0,0,0,2.29,3.71L5.11,6.52,4.24,9.11A3,3,0,0,0,2,12v4a3,3,0,0,0,2,2.82V20a1,1,0,0,0,2,0V19H17.59l.41.41V20a1,1,0,0,0,1,1,.91.91,0,0,0,.46-.13l.83.84a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm3,5.81.9.9H6.39ZM5,17a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H9.59l2,2H11a1,1,0,0,0,0,2h2a.91.91,0,0,0,.46-.13L15.59,17Z'
    }));
};

export default McCarSlash;