import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McImageQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19,13a1,1,0,0,0-1,1v.39l-1.48-1.48a2.77,2.77,0,0,0-3.93,0l-.7.7L9.41,11.12a2.86,2.86,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.45,20Zm13-1a1,1,0,0,1-.18.53L13.31,15l.7-.7a.78.78,0,0,1,1.1,0L18,17.22ZM19,2a3,3,0,0,0-2.6,1.5,1,1,0,0,0,.37,1.37,1,1,0,0,0,1.36-.37A1,1,0,0,1,20,5a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,0,0,0-6Zm.38,7.08A1,1,0,0,0,18.8,9l-.18.06-.18.09-.15.13A1,1,0,0,0,18,10a1,1,0,0,0,.29.71,1,1,0,0,0,1.42,0A1,1,0,0,0,20,10a1,1,0,0,0-.62-.92Z'
    }));
};

export default McImageQuestion;