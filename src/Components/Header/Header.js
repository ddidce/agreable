import React from 'react';
import classNames from 'classnames/bind';
import Styles from './style.module.scss';
import Logo from '../../assets/images/we_logo_center.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const cx = classNames.bind(Styles);
    return (
        <div className={cx('header_wrap')}>
            <div className={cx('header-top')}>
                <div className={cx('cart')}>
                    <Link to="/Cart">장바구니</Link>
                </div>
            </div>

            <div className={cx('header_main')}>
                <div className={cx('logo_wrap')}>
                    <img src={Logo} alt="logo" className={cx('logo_img')} />
                </div>
            </div>
        </div>
    );
};

export default Header;
