import React from 'react';
import { Col, Row, Space } from 'antd';
import usePlayers from '../../hooks/usePlayers';
import Item from './item';

function Items() {
    const { data } = usePlayers();

    return (
        <Row className="ItemList">
            <Col className="infinite-scroll-component ">
                <Space
                    direction="vertical"
                    size="middle"
                    style={{ display: 'flex' }}
                >
                    {data.map((item) => (
                        <Row>
                            <Item player={item} />
                        </Row>
                    ))}
                </Space>
            </Col>
        </Row>
    );
}

export default Items;
