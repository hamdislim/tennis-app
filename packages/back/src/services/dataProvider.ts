/* eslint-disable no-useless-return */
import { request } from '../helpers';
import runtimeVars from '../config/runtimeVars';
import CustomError from '../dtos/customError';
import Player from '../dtos/Player';
import validateAndConvert from '../helpers/validateAndConvert';

const dataProvider = async (): Promise<Player[]> => {
    let players: Player[];
    try {
        const data = await request('get', runtimeVars.DATA_HOST);
        players = await Promise.all(
            data.data.players.map(async (player) => {
                const validatedPlayer = await validateAndConvert(
                    Player,
                    player
                );
                if (!validatedPlayer.error) {
                    return player;
                }
                // eslint-disable-next-line consistent-return
                return;
            })
        );
        return players;
    } catch (e) {
        console.error(e);
        throw new CustomError('Internal Server Error', 500);
    }
};

export default dataProvider;
