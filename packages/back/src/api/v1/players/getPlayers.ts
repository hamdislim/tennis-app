import getAllPlayers from '../../../controllers/players/getAllPlayers';
import CustomError from '../../../dtos/customError';
import { limitHandler, skipHandler } from '../../../helpers';

const getPlayers = async (req, res, next): Promise<void> => {
    try {
        const warnings = {};
        const limit = limitHandler(req, warnings);
        const skip = skipHandler(req, warnings);
        const { data, total } = await getAllPlayers(limit, skip);
        if (!data || total === 0) throw new CustomError('NOT_FOUND', 404);
        return res.status(200).send({
            data,
            total,
            warnings,
        });
    } catch (e) {
        console.error(e);
        return next(e);
    }
};
export default getPlayers;
