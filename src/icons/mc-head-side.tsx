import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHeadSide = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.23047,2.00342A7.37247,7.37247,0,0,0,7.77734,4.11719,7.44044,7.44044,0,0,0,5.5,9.5v.03027L3.5957,13.57373A.99944.99944,0,0,0,4.5,15h1v2a2.00229,2.00229,0,0,0,2,2h1v2a1,1,0,0,0,2,0V19a1,1,0,0,0,0-2h-3V14a.99974.99974,0,0,0-1-1H6.07617L7.416,10.15576a.99036.99036,0,0,0,.09472-.46435c0-.01026-.00976-.18116-.01074-.19141A5.45491,5.45491,0,0,1,9.16992,5.55273a5.52688,5.52688,0,0,1,4-1.55029A5.6849,5.6849,0,0,1,18.5,9.77246l-1.9668,7.50488a1.01018,1.01018,0,0,0,.00586.5337l1,3.4663a1.00148,1.00148,0,0,0,.96094.72315,1.01777,1.01777,0,0,0,.27734-.03955,1.00043,1.00043,0,0,0,.6836-1.23828l-.92383-3.2002,1.92969-7.26611A1.03147,1.03147,0,0,0,20.5,10V9.77246A7.698,7.698,0,0,0,13.23047,2.00342Z'
    }));
};

export default McHeadSide;