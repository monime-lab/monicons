import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18.42,8.22A7,7,0,0,0,5.06,10.11,4,4,0,0,0,6,18H8a1,1,0,0,0,0-2H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,13a3,3,0,0,1-3,3,1,1,0,0,0,0,2,5,5,0,0,0,1.42-9.78Zm-5.5,10.4a.56.56,0,0,0-.09-.17l-.12-.16a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21l-.12.16a.56.56,0,0,0-.09.17.64.64,0,0,0-.06.18,1.5,1.5,0,0,0,0,.2,1.23,1.23,0,0,0,0,.19.6.6,0,0,0,.06.19.56.56,0,0,0,.09.17l.12.16A1.05,1.05,0,0,0,12,20a1,1,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21l.12-.16a.56.56,0,0,0,.09-.17.6.6,0,0,0,.06-.19A1.23,1.23,0,0,0,13,19a1.5,1.5,0,0,0,0-.2A.64.64,0,0,0,12.92,18.62ZM12,11a3,3,0,0,0-2.6,1.5,1,1,0,0,0,.37,1.37,1,1,0,0,0,1.36-.37A1,1,0,0,1,12,13a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6Z'
    }));
};

export default McCloudQuestion;