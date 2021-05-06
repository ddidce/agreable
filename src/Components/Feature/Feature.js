import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../api/feature';
import FeatureDetail from './FeatureDetail/FeatureDetail';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames/bind';
import Styles from './style.module.scss';

const Feature = () => {
    const [featureDatas, setFeatureDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const cx = classNames.bind(Styles);

    useEffect(() => {
        const getFeatureData = async () => {
            try {
                setError(null);
                setLoading(true);
                const response = await axios.get(API_URL);
                setFeatureDatas(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        getFeatureData();
    }, []);

    const featureItems = featureDatas.map((featureData, i) => {
        return <FeatureDetail featureData={featureData} key={i} />;
    });

    return (
        <>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                showArrows={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
            >
                {featureItems}
            </Carousel>
        </>
    );
};

export default Feature;
