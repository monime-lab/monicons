import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileExclamation = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.92,16.62a.76.76,0,0,0-.09-.18,1.58,1.58,0,0,0-.12-.15,1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.5,1.5,0,0,0,0,.2.84.84,0,0,0,.08.38,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,12,18a.84.84,0,0,0,.38-.08.9.9,0,0,0,.54-.54A.84.84,0,0,0,13,17a1.5,1.5,0,0,0,0-.2A.64.64,0,0,0,12.92,16.62ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-6-8a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Z'
    }));
};

export default McFileExclamation;