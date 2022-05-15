import React from 'react';
import { Col, Row, Spin, Statistic } from 'antd';
import Search from '../../components/search/search';
import useFetchPlayers from '../../hooks/useFetchPlayers';
import { PlayersContext } from '../../context/playersContext';
import useGetImc from '../../hooks/useGetImc';
import useGetHigherCountryRatio from '../../hooks/useHigherCountryRatio';
import useMedianeHigh from '../../hooks/useMedianeHigh';
import Items from '../../components/items/items';
import './home.scss';

function Home() {
    const { data, initData, total, loading, setData, setTotal, setInitData } =
        useFetchPlayers();

    const { imc, loadingImc } = useGetImc();
    const { higherCountryRatio, loadingHigherCountryRatio } =
        useGetHigherCountryRatio();
    const { mediane, medianeLoading } = useMedianeHigh();
    return (
        <div className="Items">
            {loading && <Spin />}
            {!loading &&
                !loadingImc &&
                !loadingHigherCountryRatio &&
                !medianeLoading && (
                    <PlayersContext.Provider
                        value={{
                            data,
                            initData,
                            total,
                            setData,
                            setTotal,
                            setInitData,
                        }}
                    >
                        <Row>
                            <Col
                                xs={{ span: 24 }}
                                lg={{ span: 12, offset: 12 }}
                            >
                                <Row>
                                    <Col
                                        className="site-statistic-card"
                                        xs={{ span: 24 }}
                                        lg={{ span: 4, offset: 6 }}
                                    >
                                        <Statistic
                                            title="Imc"
                                            value={imc}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Col>
                                    <Col
                                        className="site-statistic-card"
                                        xs={{ span: 24 }}
                                        lg={{ span: 6, offset: 1 }}
                                    >
                                        <Statistic
                                            title="higher Country Ratio"
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                            value={`${higherCountryRatio.country}: ${higherCountryRatio.ratio}% `}
                                        />
                                    </Col>
                                    <Col
                                        className="site-statistic-card"
                                        xs={{ span: 24 }}
                                        lg={{ span: 4, offset: 1 }}
                                    >
                                        <Statistic
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                            title="Median"
                                            value={mediane}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Search />
                        </Row>
                        <Row>
                            <Items />
                        </Row>
                    </PlayersContext.Provider>
                )}
        </div>
    );
}

export default Home;
