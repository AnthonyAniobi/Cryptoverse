import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [state, setState] = useState(cryptosList?.data?.coins);

    console.log(cryptosList);

    return (
        <div>Cryptocurrencies</div>
    )
}

export default Cryptocurrencies