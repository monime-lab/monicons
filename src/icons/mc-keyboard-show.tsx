import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McKeyboardShow = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M6.71,10.29A1,1,0,0,0,5,11a1,1,0,1,0,1.92-.38A1,1,0,0,0,6.71,10.29ZM9.29,7.71A1,1,0,0,0,10,8a1,1,0,0,0,.71-.29,1.15,1.15,0,0,0,.21-.33A1,1,0,0,0,11,7a1.05,1.05,0,0,0-.29-.71l-.15-.12-.18-.09A.6.6,0,0,0,10.19,6a1,1,0,0,0-.9.27,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76A1.15,1.15,0,0,0,9.29,7.71ZM6.56,6.17a.76.76,0,0,0-.18-.09L6.2,6a1,1,0,0,0-.91.27,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21A.84.84,0,0,0,6,8a1,1,0,0,0,.71-.29,1.15,1.15,0,0,0,.21-.33A1,1,0,0,0,7,7a1.05,1.05,0,0,0-.29-.71Zm6.15,12.12a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,1.42,1.42L12,20.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6-8a1,1,0,0,0-1.42,0,1,1,0,0,0-.21.33,1,1,0,0,0,1.3,1.3,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,19,11a.84.84,0,0,0-.08-.38A1,1,0,0,0,18.71,10.29ZM14,10H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm6-8H4A3,3,0,0,0,1,5v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V5A3,3,0,0,0,20,2Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1ZM17.62,6.08a.93.93,0,0,0-.33.21A1.05,1.05,0,0,0,17,7a1,1,0,0,0,.08.38,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,18,8a1,1,0,0,0,.71-.29,1.15,1.15,0,0,0,.21-.33A1,1,0,0,0,19,7a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,17.62,6.08Zm-3.06.09-.18-.09L14.2,6a1,1,0,0,0-.58.06.93.93,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,14,8a1,1,0,0,0,.71-.29,1.15,1.15,0,0,0,.21-.33A1,1,0,0,0,15,7a1.05,1.05,0,0,0-.29-.71Z'
    }));
};

export default McKeyboardShow;