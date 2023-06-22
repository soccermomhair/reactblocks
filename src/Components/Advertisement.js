import React, { Component } from 'react';
import styles from './AdvertisementComponent.module.css';

const Advertisement = (props) => {
    return (
        <div className='ads'>
            {/* className={styles.ads}>{props.children} */}
        </div>
    );
}

export default Advertisement;
