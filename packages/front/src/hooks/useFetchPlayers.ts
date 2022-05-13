import { useEffect, useState } from 'react';
import axios from 'axios';
import runtimeVars from '../configs/runTimeVars';
import PlayerI from '../helpers/playerInterface';

const useFetchPlayers = () => {
    const [data, setData] = useState<Array<PlayerI>>([]);
    const [initData, setInitData] = useState<Array<PlayerI>>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${runtimeVars.BACKEND_BASE_URL}/players`
                );
                setData(response.data.data);
                setInitData(response.data.data);
                setTotal(response.data.total);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        initData,
        loading,
        total,
        setData,
        setInitData,
        setTotal,
    };
};

export default useFetchPlayers;
