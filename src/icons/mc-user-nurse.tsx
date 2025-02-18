import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McUserNurse = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16.1745,12.91626c-.01825-.00818-.03522-.01685-.05383-.0238-.1377-.06214-.27393-.127-.4148-.183a6,6,0,1,0-7.41174,0c-.14087.056-.2771.12085-.4148.183-.01861.00695-.03558.01562-.05383.0238A9.946,9.946,0,0,0,2.06592,20.8916a1,1,0,1,0,1.98828.2168,7.94518,7.94518,0,0,1,3.9873-6.0586L11.293,18.30127a.99963.99963,0,0,0,1.41406,0L15.9585,15.0498a7.94518,7.94518,0,0,1,3.9873,6.0586A.99992.99992,0,0,0,20.93848,22a1.048,1.048,0,0,0,.10986-.00586,1.00007,1.00007,0,0,0,.88574-1.10254A9.946,9.946,0,0,0,16.1745,12.91626ZM8.041,7.59424a3.97749,3.97749,0,0,1,7.918,0ZM12,16.18018l-1.93695-1.93695a7.834,7.834,0,0,1,3.8739,0ZM12,12A4.003,4.003,0,0,1,8.33588,9.59424h7.32824A4.003,4.003,0,0,1,12,12Z'
    }));
};

export default McUserNurse;