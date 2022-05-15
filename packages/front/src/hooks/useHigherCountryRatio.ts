import { useEffect, useState } from 'react';
import axios from 'axios';
import runtimeVars from '../configs/runTimeVars';

const useHigherCountryRatio = () => {
    const [higherCountryRatio, setHigherCountryRatio] = useState<{
        country: string;
        ratio: number;
    }>({ country: '', ratio: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${runtimeVars.BACKEND_BASE_URL}/statistiques/higher-country-ratio`
                );

                setHigherCountryRatio(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    return {
        higherCountryRatio,
        loadingHigherCountryRatio: loading,
    };
};

export default useHigherCountryRatio;
