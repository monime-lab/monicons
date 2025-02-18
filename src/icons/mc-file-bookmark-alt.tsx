import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileBookmarkAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7.5,10h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm4,6h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm0-4h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm6.92-2.62a1,1,0,0,0-.21-1.09l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0L11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h4A1,1,0,0,0,18.42,9.38ZM13.5,8a1,1,0,0,1-1-1V5.41L15.09,8Zm7,4h-5a1,1,0,0,0-1,1v8a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05L18,20.53,20,21.83A1,1,0,0,0,21.5,21V13A1,1,0,0,0,20.5,12Zm-1,7.12-.94-.63a1,1,0,0,0-1.12,0l-.94.63V14h3Z'
    }));
};

export default McFileBookmarkAlt;