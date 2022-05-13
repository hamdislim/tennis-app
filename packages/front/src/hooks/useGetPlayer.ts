import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import IPlayer from '../helpers/playerInterface';
import isNumber from '../helpers/isNumber';
import runtimeVars from '../configs/runTimeVars';

const useGetPlayer = (id: string | undefined) => {
    const navigate = useNavigate();
    let playerId = 0;
    console.info('heer', id);
    if (typeof id === 'string' && isNumber(id)) {
        playerId = Number.parseInt(id, 10);
    } else {
        navigate('/home');
    }
    console.info('playerId', playerId);

    const [player, setPlayer] = useState<IPlayer>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${runtimeVars.BACKEND_BASE_URL}/player/${playerId}`
                );

                setPlayer(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                navigate('/home');
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);
    return {
        player,
        loading,
    };
};

export default useGetPlayer;
