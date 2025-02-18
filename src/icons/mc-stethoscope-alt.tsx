import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McStethoscopeAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19,8a2.99253,2.99253,0,0,0-1,5.81567V15.5a4.5,4.5,0,0,1-9,0V14.48047l3.124-2.49854A4.976,4.976,0,0,0,14,8.07764V3a1,1,0,0,0-1-1H11a1,1,0,0,0,0,2h1V8.07764a2.98608,2.98608,0,0,1-1.12549,2.34277L8,12.71924,5.126,10.42041A2.985,2.985,0,0,1,4,8.07764V4H5A1,1,0,0,0,5,2H3A1,1,0,0,0,2,3V8.07764a4.975,4.975,0,0,0,1.87646,3.90429L7,14.48041V15.5a6.5,6.5,0,0,0,13,0V13.81573A2.99257,2.99257,0,0,0,19,8Zm0,4a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,19,12Z'
    }));
};

export default McStethoscopeAlt;