/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Col, Input } from 'antd';
import useSerchPlayer from '../../hooks/useSerchPlayer';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    useSerchPlayer(searchTerm);
    return (
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 10, offset: 2 }}>
            <Input
                placeholder="Rechercher un joueur"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Col>
    );
}

export default Search;
