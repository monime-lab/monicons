import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileLockAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10,20H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5V7a3,3,0,0,0,3,3h4a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0L11.06,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2ZM12,5.41,14.59,8H13a1,1,0,0,1-1-1ZM13,13a1,1,0,0,0-1-1H7a1,1,0,0,0,0,2h5A1,1,0,0,0,13,13ZM7,10H8A1,1,0,0,0,8,8H7a1,1,0,0,0,0,2Zm0,6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm13-.82V15a3,3,0,0,0-6,0v.18A3,3,0,0,0,12,18v1a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V18A3,3,0,0,0,20,15.18ZM17,14a1,1,0,0,1,1,1H16A1,1,0,0,1,17,14Zm3,5a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Z'
    }));
};

export default McFileLockAlt;