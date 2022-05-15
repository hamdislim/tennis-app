import dataProvider from '../../services/dataProvider';
import Player from '../../dtos/Player';
import CustomError from '../../dtos/customError';

const getPlayer = async (id: number): Promise<{ data: Player }> => {
    try {
        let player: Player;
        const players = await dataProvider();

        if (players.length > 0) {
            player = players.find((pl) => pl.id === id);
        }

        return {
            data: player,
        };
    } catch (e) {
        console.error(e);
        throw new CustomError('Internal Server Error', 500);
    }
};

export default getPlayer;
