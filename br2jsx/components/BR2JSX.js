import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

const BR2JSX = (props) => {
    const text = props.text.split(/<br\s?\/?>/).reduce((accu, elem) => {
        return accu === null ? [elem] : [...accu, <br key={elem} />, elem]
    }, null);

    return(
        <div className='br2jsx'>
            {text}
        </div>
    )
};

BR2JSX.propTypes = {
    text: PropTypes.string.isRequired,
};

export default BR2JSX;