import React, { Component } from 'react';
import styles from './AdvertisementComponent.module.css';

const Main = (props) => {
    return (
        <div className='main-part'>
            {props.children}

        </div>
    );
}

export default Main;
