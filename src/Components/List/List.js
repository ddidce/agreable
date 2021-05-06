import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../api/list';
import ListDetail from './ListDetail/ListDetail';
import Styles from './style.module.scss';

const List = ({ props }) => {
    let [listData, setListData] = useState([]);
    let [number, setNumber] = useState(1);
    let [hitBottom, setHitBottom] = useState(false);

    const cx = classNames.bind(Styles);

    useEffect(() => {
        setHitBottom(false);
        const getListData = async () => {
            try {
                await axios.get(API_URL + `?page=${number}`).then((res) => {
                    console.log(res.data);
                    if (!res.data.image) {
                        console.log('이미지를 불러오는데 실패했습니다.');
                    }
                    number++;
                    setNumber(number);
                    listData = [...listData, ...res.data];
                    setListData(listData);
                });
            } catch (e) {
                console.log(e);
            }
        };
        getListData();
    }, [hitBottom]);
    console.log(listData);

    const onScroll = () => {
        if (
            window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 10
        ) {
            setHitBottom(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    console.log(listData);

    const listItems = listData.map((item, i) => {
        return (
            <>
                <ListDetail featureData={item} key={i} />
            </>
        );
    });
    return (
        <>
            <h1 className={cx('list_title')}>윙잇 MADE</h1>
            <div className={cx('list_container')}>
                <ul className={cx('list_wrap')}>{listItems}</ul>
            </div>
        </>
    );
};

export default List;
