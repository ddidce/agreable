import React from 'react';
import classNames from 'classnames/bind';
import Styles from './style.module.scss';

const CartItem = ({ item, idx }) => {
    const cx = classNames.bind(Styles);

    return (
        <div>
            <div className={cx('cartItem_wrap')}>
                <div className={cx('cartItem_card')}>
                    <img
                        src={'https://image.wingeat.com/' + item.image}
                        alt="장바구니 이미지"
                        className={cx('cartItem_img')}
                    />
                    <div className={cx('cartItem_desc')}>
                        <p className={cx('cartItem_name')}>{item.itemName}</p>
                        <h1 className={cx('cartItem_price')}>{item.price}원</h1>
                    </div>
                </div>
                <h1 className={cx('cartItem_totalprice')}>{item.price}원</h1>
            </div>
        </div>
    );
};

export default CartItem;
