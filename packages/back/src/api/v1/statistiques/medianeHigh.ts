import medianeHighController from '../../../controllers/statistiques/medianeHigh';
import CustomError from '../../../dtos/customError';

const medianeHigh = async (req, res, next): Promise<void> => {
    try {
        const mediane = await medianeHighController();
        if (!mediane) throw new CustomError('NOT_FOUND', 404);
        return res.status(200).send({
            mediane,
        });
    } catch (e) {
        console.error(e);
        return next(e);
    }
};
export default medianeHigh;
