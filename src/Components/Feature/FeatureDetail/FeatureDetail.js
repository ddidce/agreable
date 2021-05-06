import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import classNames from 'classnames/bind';
import Styles from './style.module.scss';

const FeatureDetail = ({ key, featureData }) => {
    const cx = classNames.bind(Styles);

    // console.log(featureData);
    let URL = `https://image.wingeat.com/${featureData.image}`;
    return (
        <div key={key} className={cx('feature_wrap')}>
            <img src={URL} alt="feature" />
        </div>
    );
};

export default FeatureDetail;
