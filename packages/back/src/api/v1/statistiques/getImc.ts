import getImcController from '../../../controllers/statistiques/getImc';
import CustomError from '../../../dtos/customError';

const getImc = async (req, res, next): Promise<void> => {
    try {
        const imc = await getImcController();
        if (!imc) throw new CustomError('NOT_FOUND', 404);
        return res.status(200).send({
            imc,
        });
    } catch (e) {
        console.error(e);
        return next(e);
    }
};
export default getImc;
