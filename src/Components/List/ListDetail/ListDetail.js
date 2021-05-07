import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import classNames from 'classnames/bind';
import Styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../store/actions';
import { Link } from 'react-router-dom';

const ListDetail = ({ key, featureData, item }) => {
    const cx = classNames.bind(Styles);
    // console.dir(featureData);

    const dispatch = useDispatch();
    console.log(dispatch(addCart(featureData)));

    let URL = `https://image.wingeat.com/${featureData.image}`;
    return (
        <li
            key={key}
            className={cx('list_card_item')}
            onClick={() => dispatch(addCart(featureData))}
        >
            <Link href="" className={cx('list_card_link')}>
                <img src={URL} alt="feature" className={cx('list_card_img')} />
                <p className={cx('list_card_itemName')}>
                    {featureData.itemName}
                </p>
                <h2 className={cx('list_card_price')}>{featureData.price}원</h2>
            </Link>
        </li>
    );
};

export default ListDetail;
