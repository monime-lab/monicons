import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McKeyboardAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M6.71,9.29a1,1,0,0,0-1.42,0,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21A.84.84,0,0,0,6,11a1,1,0,0,0,.92-1.38A1,1,0,0,0,6.71,9.29ZM10,11a1,1,0,0,0,.92-1.38,1,1,0,0,0-.21-.33A1,1,0,0,0,9.81,9a.6.6,0,0,0-.19.06l-.18.09-.15.12A1.05,1.05,0,0,0,9,10a1,1,0,0,0,1,1ZM6.38,13.08a1,1,0,0,0-.76,0A1,1,0,0,0,5,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,7,14a1,1,0,0,0-.29-.71A.93.93,0,0,0,6.38,13.08ZM14,13H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm.71-3.71a1,1,0,0,0-1.42,0,1,1,0,0,0-.21.33A1,1,0,1,0,15,10a.84.84,0,0,0-.08-.38A1,1,0,0,0,14.71,9.29Zm3.85,3.88a.76.76,0,0,0-.18-.09,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21A1.05,1.05,0,0,0,17,14a1,1,0,1,0,2,0,1.05,1.05,0,0,0-.29-.71ZM20,5H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM18.71,9.29A1,1,0,0,0,17,10a1,1,0,1,0,1.92-.38A1,1,0,0,0,18.71,9.29Z'
    }));
};

export default McKeyboardAlt;