import React from 'react';
import { Col, Row, Spin, Image, Typography, Modal } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import Label from '../../components/label';
import useGetPlayer from '../../hooks/useGetPlayer';
import './details.scss';

const { Title } = Typography;

function Details() {
    const { playerId } = useParams();
    const { player, loading } = useGetPlayer(playerId);
    const navigate = useNavigate();
    return (
        <div>
            {loading && <Spin />}
            {!loading && (
                <div className="modal">
                    <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
                            <Modal
                                centered
                                style={{
                                    width: '80%',
                                    minWidth: '80%',
                                }}
                                visible
                                onCancel={() => navigate('/home')}
                                footer={false}
                            >
                                <div className="modal-content">
                                    <Row>
                                        <Col
                                            xs={{ span: 4, offset: 0 }}
                                            lg={{ span: 4, offset: 0 }}
                                        >
                                            <Image src={player?.picture} />
                                        </Col>
                                        <Col
                                            xs={{ span: 19, offset: 1 }}
                                            lg={{ span: 19, offset: 1 }}
                                        >
                                            <Row>
                                                <Col
                                                    xs={{ span: 19, offset: 1 }}
                                                    lg={{ span: 12, offset: 1 }}
                                                >
                                                    <Row>
                                                        <Title
                                                            level={1}
                                                            className="first-name"
                                                        >
                                                            {player?.firstname}
                                                        </Title>
                                                    </Row>
                                                    <Row>
                                                        <Title
                                                            className="last-name"
                                                            level={1}
                                                        >
                                                            {player?.lastname}
                                                        </Title>
                                                    </Row>
                                                </Col>
                                                <Col
                                                    xs={{ span: 19, offset: 1 }}
                                                    lg={{ span: 6, offset: 1 }}
                                                >
                                                    <Row>
                                                        <Image
                                                            src={
                                                                player?.country
                                                                    .picture
                                                            }
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title
                                                            level={2}
                                                            style={{
                                                                color: '#000000',
                                                                opacity: 0.3,
                                                            }}
                                                        >
                                                            {
                                                                player?.country
                                                                    .code
                                                            }
                                                        </Title>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="RANK"
                                                        value={`#${player?.data.rank}`}
                                                    />
                                                </Col>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="POINTS"
                                                        value={`${player?.data.points}`}
                                                    />
                                                </Col>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="COUNTRY"
                                                        value={`${player?.country.code}`}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="SEX"
                                                        value={`${player?.sex}`}
                                                    />
                                                </Col>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="AGE"
                                                        value={`${player?.data.age}`}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="WEIGHT"
                                                        value={`${
                                                            player &&
                                                            player.data.weight /
                                                                1000
                                                        }kg`}
                                                    />
                                                </Col>
                                                <Col
                                                    xs={{ span: 24, offset: 1 }}
                                                    lg={{ span: 4, offset: 1 }}
                                                >
                                                    <Label
                                                        title="HEIGHT"
                                                        value={`${player?.data.height}cm`}
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Modal>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
}

export default Details;
