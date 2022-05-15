import { useEffect } from 'react';
import usePlayers from './usePlayers';

const useSerchPlayer = (searchTerm: string) => {
    const { initData, setData, setTotal } = usePlayers();
    useEffect(() => {
        if (searchTerm.length === 0) {
            // eslint-disable-next-line consistent-return, no-useless-return
            setData(initData);
            setTotal(initData.length);
            return;
        }
        // eslint-disable-next-line array-callback-return, consistent-return
        const players = initData.filter((player) => {
            if (
                player.firstname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                player.lastname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                player.shortname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                player.country.code
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            ) {
                return player;
            }
        });
        setData(players);
        setTotal(players.length);
    }, [searchTerm]);
};

export default useSerchPlayer;
