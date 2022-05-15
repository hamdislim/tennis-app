import CustomError from '../../dtos/customError';
import dataProvider from '../../services/dataProvider';

const medianeHigh = async (): Promise<number> => {
    try {
        // get All players
        const players = await dataProvider();

        // if players exists
        if (players.length > 0) {
            // sort table with the players height
            players.sort((a, b) => a.data.height - b.data.height);
            // if the table length is an even number
            if (players.length % 2 === 0) {
                return players[players.length / 2].data.height;
                // if the table length is an odd number
            }
            return (
                (players[Math.trunc(players.length / 2)].data.height +
                    players[Math.trunc(players.length / 2) + 1].data.height) /
                2
            );
        }
        return 0;
    } catch (e) {
        throw new CustomError('Internal Server Error', 500);
    }
};

export default medianeHigh;
