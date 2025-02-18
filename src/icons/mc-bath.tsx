import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBath = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M22,12H5V6.41016A1.97474,1.97474,0,0,1,6.04,4.65137a1.99474,1.99474,0,0,1,1.14764-.2312,3.49114,3.49114,0,0,0,.83771,3.55444L9.08594,9.03516a.99965.99965,0,0,0,1.41406,0L14.03516,5.5a.99964.99964,0,0,0,0-1.41406L12.97461,3.02539a3.494,3.494,0,0,0-4.52972-.34253A3.99247,3.99247,0,0,0,3,6.41016V12H2a1,1,0,0,0,0,2H3v3a2.995,2.995,0,0,0,2,2.81567V21a1,1,0,0,0,2,0V20H17v1a1,1,0,0,0,2,0V19.81573A2.99507,2.99507,0,0,0,21,17V14h1a1,1,0,0,0,0-2ZM9.43945,4.43945a1.50184,1.50184,0,0,1,2.1211,0l.35351.35352L9.793,6.91406l-.35352-.35351A1.50123,1.50123,0,0,1,9.43945,4.43945ZM19,17a1.00067,1.00067,0,0,1-1,1H6a1.00067,1.00067,0,0,1-1-1V14H19Z'
    }));
};

export default McBath;