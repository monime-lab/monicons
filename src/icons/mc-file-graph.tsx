import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileGraph = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm5.21045,2.38623-1.67334,2.15186-.86816-.78125a.9997.9997,0,0,0-1.44971.11865l-2,2.5a.9998.9998,0,1,0,1.56152,1.249l1.33789-1.67236.87891.791a.99989.99989,0,0,0,1.45849-.12939l2.3335-3a1.00005,1.00005,0,0,0-1.5791-1.22754Zm5.7771-3.44794a1.0088,1.0088,0,0,0-.27936-.64373l-.00146-.0019L13.70734,2.29327l-.00183-.00146a.99022.99022,0,0,0-.28608-.19281c-.0299-.014-.061-.02191-.09246-.033a.98253.98253,0,0,0-.26667-.05383C13.03925,2.01086,13.02136,2,13,2H7A3.00328,3.00328,0,0,0,4,5V19a3.00328,3.00328,0,0,0,3,3H17a3.00328,3.00328,0,0,0,3-3V9C20,8.97809,19.989,8.95984,19.98755,8.93829ZM14,5.41406,16.58594,8H15a1.0013,1.0013,0,0,1-1-1ZM18,19a1.0013,1.0013,0,0,1-1,1H7a1.0013,1.0013,0,0,1-1-1V5A1.0013,1.0013,0,0,1,7,4h5V7a3.00328,3.00328,0,0,0,3,3h3Z'
    }));
};

export default McFileGraph;