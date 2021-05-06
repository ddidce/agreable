import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import classNames from 'classnames/bind';
import Styles from './style.module.scss';

const ListDetail = ({ key, featureData }) => {
    const cx = classNames.bind(Styles);

    console.log(featureData);
    let URL = `https://image.wingeat.com/${featureData.image}`;
    return (
        <li key={key} className={cx('list_card_item')}>
            <a href="" className={cx('list_card_link')}>
                <img src={URL} alt="feature" className={cx('list_card_img')} />
                <p className={cx('list_card_itemName')}>
                    {featureData.itemName}
                </p>
                <h2 className={cx('list_card_price')}>{featureData.price}원</h2>
            </a>
        </li>
    );
};

export default ListDetail;
