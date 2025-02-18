import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.57,17.29a1,1,0,0,0-1.41,0,1.06,1.06,0,0,0-.22.33,1.07,1.07,0,0,0,0,.76,1.19,1.19,0,0,0,.22.33,1,1,0,0,0,.32.21,1,1,0,0,0,.39.08,1,1,0,0,0,.92-1.38A.91.91,0,0,0,12.57,17.29ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-6.13-9a3,3,0,0,0-2.6,1.5,1,1,0,1,0,1.73,1,1,1,0,0,1,.87-.5,1,1,0,0,1,0,2,1,1,0,1,0,0,2,3,3,0,0,0,0-6Z'
    }));
};

export default McFileQuestion;