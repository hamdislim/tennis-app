import { useEffect, useState } from 'react';
import axios from 'axios';
import runtimeVars from '../configs/runTimeVars';

const useMedianeHigh = () => {
    const [mediane, setMediane] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${runtimeVars.BACKEND_BASE_URL}/statistiques/mediane-high`
                );

                setMediane(response.data.mediane);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    return {
        mediane,
        medianeLoading: loading,
    };
};

export default useMedianeHigh;
