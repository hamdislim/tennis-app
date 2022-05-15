import dataProvider from '../../services/dataProvider';
import Player from '../../dtos/Player';
import CustomError from '../../dtos/customError';

const getAllPlayers = async (
    limit: number,
    skip: number
): Promise<{ data: Player[]; total: number }> => {
    try {
        let players = await dataProvider();
        const total = players.length;
        if (total > 0) {
            if (skip > 0) players = players.slice(skip);
            if (limit < total) players = players.slice(0, limit);
            players.sort((a, b) => a.data.rank - b.data.rank);
        }

        return {
            data: players,
            total,
        };
    } catch (e) {
        console.error(e);
        throw new CustomError('Internal Server Error', 500);
    }
};

export default getAllPlayers;
