import classNames from 'classnames/bind';
import Styles from './style.module.scss';

export const OrderButton = ({ children }) => {
    const cx = classNames.bind(Styles);
    return <button className={cx('cartItem_order')}>{children}</button>;
};
