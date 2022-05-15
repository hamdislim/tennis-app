import React from 'react';
import { Col, Typography, Row } from 'antd';
import labelProps from './labelProps';

const { Title } = Typography;
type Props = labelProps;

const Label = (props: Props) => {
    const { title, value } = props;

    return (
        <Col>
            <Row>
                <Title
                    level={4}
                    style={{
                        color: '#000000',
                        opacity: 0.3,
                    }}
                >
                    {title}
                </Title>
            </Row>
            <Row>
                <Title level={5} style={{ color: '#F2753B' }}>
                    {value}
                </Title>
            </Row>
        </Col>
    );
};

export default Label;
