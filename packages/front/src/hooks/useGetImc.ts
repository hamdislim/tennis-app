import { useEffect, useState } from 'react';
import axios from 'axios';
import runtimeVars from '../configs/runTimeVars';

const useGetImc = () => {
    const [imc, setImc] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${runtimeVars.BACKEND_BASE_URL}/statistiques/get-imc`
                );

                setImc(response.data.imc);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    return {
        imc,
        loadingImc: loading,
    };
};

export default useGetImc;
