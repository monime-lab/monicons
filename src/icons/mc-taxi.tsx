import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTaxi = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M17.38,14.58a1,1,0,0,0-.58-.06.64.64,0,0,0-.18.06.76.76,0,0,0-.18.09l-.15.12a1.05,1.05,0,0,0-.29.71,1,1,0,0,0,.29.71,1.19,1.19,0,0,0,.33.22,1,1,0,0,0,1.09-.22,1.15,1.15,0,0,0,.21-.33A.84.84,0,0,0,18,15.5a1.05,1.05,0,0,0-.29-.71A.93.93,0,0,0,17.38,14.58ZM20,10.68V7.5a3,3,0,0,0-3-3h-.78l-.77-2.32a1,1,0,0,0-.95-.68h-5a1,1,0,0,0-.95.68L7.78,4.5H7a3,3,0,0,0-3,3v3.18A3,3,0,0,0,2,13.5v6a1,1,0,0,0,1,1H4v1a1,1,0,0,0,2,0v-1H18v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,1-1v-6A3,3,0,0,0,20,10.68ZM10.22,3.5h3.56l.33,1H9.89ZM6,7.5a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v3H6Zm14,11H4v-5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1ZM6.62,14.58a1,1,0,0,0-.33.21A1.05,1.05,0,0,0,6,15.5a1,1,0,0,0,1.38.93,1.19,1.19,0,0,0,.33-.22A1,1,0,0,0,8,15.5a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,6.62,14.58ZM13,14.5H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z'
    }));
};

export default McTaxi;