import getPlayerController from '../../../controllers/players/getPlayer';
import CustomError from '../../../dtos/customError';
import { isNumber } from '../../../helpers';

const getPlayer = async (req, res, next): Promise<void> => {
    try {
        const { playerId } = req.params;
        if (!playerId || !isNumber(playerId))
            throw new CustomError('INVALID_INPUT', 422);
        const { data } = await getPlayerController(
            Number.parseInt(playerId, 10)
        );
        if (!data || !data.id) throw new CustomError('NOT_FOUND', 404);
        return res.status(200).send({
            data,
        });
    } catch (e) {
        console.error(e);
        return next(e);
    }
};
export default getPlayer;
