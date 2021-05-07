import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import Header from '../Header/Header';
import classNames from 'classnames/bind';
import Styles from './style.module.scss';
import { OrderButton } from '../Button/Button';

const Cart = () => {
    const cart = useSelector((store) => store.cartReducer);

    const cx = classNames.bind(Styles);

    const cartItem =
        cart.length >= 1 ? (
            cart.map((item, idx) => {
                console.log(item);
                return <CartItem key={idx} item={item} idx={idx} />;
            })
        ) : (
            <div>장바구니가 비어 있습니다.</div>
        );
    return (
        <div>
            <Header />
            <h2 className={cx('cart_title')}>장바구니</h2>
            <div className={cx('cartItem_container')}>
                <div>{cartItem}</div>
                <div className={cx('cartItem_payment_wrap')}>
                    <div className={cx('cartItem_payment')}>
                        <p>결제 예정 금액</p>
                        <p>원</p>
                    </div>

                    <OrderButton>{'주문하기'}</OrderButton>
                </div>
            </div>
        </div>
    );
};

export default Cart;
