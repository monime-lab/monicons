import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHouseUser = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.66406,10.25244l-9-8a.99893.99893,0,0,0-1.32812,0l-9,8a.99991.99991,0,0,0,1.32812,1.49512L4,11.449V21a.99974.99974,0,0,0,1,1H19a.99974.99974,0,0,0,1-1V11.449l.33594.29859a.99991.99991,0,0,0,1.32812-1.49512ZM9.18427,20a2.98208,2.98208,0,0,1,5.63146,0ZM10.5,14.5A1.5,1.5,0,1,1,12,16,1.50164,1.50164,0,0,1,10.5,14.5ZM18,20H16.89893a5.00092,5.00092,0,0,0-2.25867-3.22821A3.46849,3.46849,0,0,0,15.5,14.5a3.5,3.5,0,0,0-7,0,3.46849,3.46849,0,0,0,.85974,2.27179A5.00092,5.00092,0,0,0,7.10107,20H6V9.6712l6-5.33331L18,9.6712Z'
    }));
};

export default McHouseUser;