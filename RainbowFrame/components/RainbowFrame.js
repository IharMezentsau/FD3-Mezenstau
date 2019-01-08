import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

const RainbowFrame = (props) => {
    const arrayColorsLength = props.colors.length,
        i = 0;

    if (i < arrayColorsLength) {
        return (
            <div style={{border: `solid 5px ${props.colors[i]}`, padding: "10px"}}>
                <RainbowFrame colors={props.colors.slice(1)}>
                    {props.children}
                </RainbowFrame>
            </div>
        );
    } else
        return props.children;

};

RainbowFrame.propTypes = {
    colors: PropTypes.array.isRequired,
};

export default RainbowFrame;