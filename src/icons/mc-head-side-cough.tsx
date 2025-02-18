import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHeadSideCough = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M4.29291,20.29291a1,1,0,1,0,1.41418,0A.99988.99988,0,0,0,4.29291,20.29291Zm-3-3a1,1,0,1,0,1.41418,0A.99988.99988,0,0,0,1.29291,17.29291Zm4-1.00073a1,1,0,1,0,1.41418,0A.99988.99988,0,0,0,5.29291,16.29218ZM16.15039,2.00342a7.06726,7.06726,0,0,0-7.28418,7.063V9.082L7.0957,12.84033A.99943.99943,0,0,0,8,14.2666h.86621v1.79981A1.9355,1.9355,0,0,0,10.7998,18H11.667v1.7998a1,1,0,0,0,2,0V17.98639A.99416.99416,0,0,0,13.59961,16l-.8324.0202A.94008.94008,0,0,0,12.667,16a.94011.94011,0,0,0-.12756.02576l-1.67322.04065V13.2666a.99974.99974,0,0,0-1-1H9.57715l1.20508-2.55908a.99032.99032,0,0,0,.09472-.46729c0-.01074-.00976-.16259-.01074-.17382A5.02527,5.02527,0,0,1,12.4043,5.43066a5.09178,5.09178,0,0,1,3.68554-1.42822A5.23852,5.23852,0,0,1,21,9.32129l-1.833,6.9873a1.0083,1.0083,0,0,0,.00586.53321l.93262,3.23486a1.00046,1.00046,0,0,0,.96094.72363,1.01739,1.01739,0,0,0,.27734-.03955.99991.99991,0,0,0,.68359-1.23779l-.85644-2.96924,1.7959-6.76416A1.03147,1.03147,0,0,0,23,9.5332V9.32129A7.25231,7.25231,0,0,0,16.15039,2.00342Z'
    }));
};

export default McHeadSideCough;