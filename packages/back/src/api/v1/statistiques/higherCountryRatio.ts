import higherCountryRatioController from '../../../controllers/statistiques/higherCountryRatio';
import CustomError from '../../../dtos/customError';

const higherCountryRatio = async (req, res, next): Promise<void> => {
    try {
        const data = await higherCountryRatioController();
        if (!data || !data.country) throw new CustomError('NOT_FOUND', 404);
        return res.status(200).send({
            data,
        });
    } catch (e) {
        console.error(e);
        return next(e);
    }
};
export default higherCountryRatio;
