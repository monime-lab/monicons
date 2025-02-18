import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McYenCircle = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21ZM14.83,6.45,12,10.7,9.17,6.45a1,1,0,0,0-1.39-.28A1,1,0,0,0,7.5,7.55l2.11,3.17H9a1,1,0,0,0,0,2H11l.05.08v.92H9a1,1,0,0,0,0,2h2V18a1,1,0,0,0,2,0V15.72h2a1,1,0,0,0,0-2H13V12.8l.05-.08H15a1,1,0,0,0,0-2h-.61L16.5,7.55a1,1,0,0,0-.28-1.38A1,1,0,0,0,14.83,6.45Z'
    }));
};

export default McYenCircle;