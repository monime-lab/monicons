import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileQuestionAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.07,12h-5a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm1,8h-8a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v1a1,1,0,0,0,2,0V9a.14.14,0,0,0,0-.06A.86.86,0,0,0,19,8.67l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1,1,0,0,0-.29-.19s-.05,0-.08,0A.88.88,0,0,0,12.12,2h-6a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h8a1,1,0,0,0,0-2Zm-1-14.59L15.65,8H14.07a1,1,0,0,1-1-1Zm5.57,14.88a1.58,1.58,0,0,0-.15-.12,1.08,1.08,0,0,0-.36-.15,1,1,0,0,0-.9.27,1,1,0,0,0,0,1.42,1,1,0,0,0,.7.29,1,1,0,0,0,.93-1.38A1.19,1.19,0,0,0,18.64,20.29ZM13.07,16h-5a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm4.86-3a3,3,0,0,0-2.6,1.5,1,1,0,1,0,1.74,1,1,1,0,1,1,.86,1.5,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM8.07,10h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Z'
    }));
};

export default McFileQuestionAlt;