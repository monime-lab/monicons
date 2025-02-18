import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeHeart = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20.5,13a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V8.41L9.38,14.3a3,3,0,0,0,2.11.87,3,3,0,0,0,2.15-.9l.89-.88A1,1,0,0,0,13.13,12l-.93.91a1,1,0,0,1-1.4,0L4.91,7H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3V18a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V14A1,1,0,0,0,20.5,13Zm1.05-9a3.33,3.33,0,0,0-3.88-.54,3.25,3.25,0,0,0-3.88,5.13L17,11.71a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l3.17-3.17A3.26,3.26,0,0,0,21.55,4ZM20.14,7.12,17.67,9.59,15.21,7.12A1.24,1.24,0,0,1,17,5.36a1,1,0,0,0,1.42,0,1.28,1.28,0,0,1,1.76,0A1.26,1.26,0,0,1,20.14,7.12Z'
    }));
};

export default McEnvelopeHeart;