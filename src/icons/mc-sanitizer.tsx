import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSanitizer = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13,12a3,3,0,1,0,3,3A3.00328,3.00328,0,0,0,13,12Zm0,4a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,13,16Zm5.80029-8.3999L16,5.50012V3h1a1,1,0,0,0,0-2H8.65674A4.96656,4.96656,0,0,0,5.12158,2.46436L4.293,3.293A.99989.99989,0,1,0,5.707,4.707l.82861-.82861A3.022,3.022,0,0,1,8.65674,3H10V5.50006l-2.80078,2.1A3.01563,3.01563,0,0,0,6,10V22a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V10A3.01469,3.01469,0,0,0,18.80029,7.6001ZM12,3h2V5H12Zm6,18H8V10a1.00551,1.00551,0,0,1,.3999-.80029L11.3335,7h3.333l2.93311,2.19971A1.00457,1.00457,0,0,1,18,10Z'
    }));
};

export default McSanitizer;