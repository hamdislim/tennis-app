import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Card, Image, Typography, Row } from 'antd';
import Label from '../label';
import itemProps from './itemProps';

const { Title } = Typography;
type Props = itemProps;

const Item = (props: Props) => {
    const { player } = props;
    const navigate = useNavigate();
    const routeChange = () => {
        navigate(`/details/${player.id}`);
    };
    return (
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 10, offset: 2 }}>
            <Card
                data-testid="clickCard"
                role="button"
                tabIndex={0}
                onClick={routeChange}
                onKeyDown={routeChange}
            >
                <Row>
                    <Col
                        xs={{ span: 4, offset: 0 }}
                        lg={{ span: 4, offset: 0 }}
                    >
                        <Image src={player.picture} />
                    </Col>
                    <Col
                        xs={{ span: 10, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                    >
                        <Row>
                            <Col xs={{ offset: 1 }} lg={{ offset: 1 }}>
                                <Title level={2} style={{ color: '#F2753B' }}>
                                    {`${player.firstname} ${player.lastname}`}
                                </Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xs={{ span: 4, offset: 1 }}
                                lg={{ span: 4, offset: 1 }}
                            >
                                <Label
                                    title="RANK"
                                    value={`#${player.data.rank}`}
                                />
                            </Col>
                            <Col
                                xs={{ span: 4, offset: 14 }}
                                lg={{ span: 4, offset: 4 }}
                            >
                                <Label
                                    title="POINTS"
                                    value={`${player.data.points}`}
                                />
                            </Col>
                            <Col
                                xs={{ span: 4, offset: 6 }}
                                lg={{ span: 4, offset: 6 }}
                            >
                                <Label
                                    title="COUNTRY"
                                    value={player.country.code}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default Item;
