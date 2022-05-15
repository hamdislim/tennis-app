import dataProvider from '../../services/dataProvider';
import CustomError from '../../dtos/customError';

const getImcController = async (): Promise<number> => {
    try {
        let imc = 0;
        const players = await dataProvider();
        const total = players.length;
        if (total > 0) {
            players.forEach((pl) => {
                imc += pl.data.weight / 1000 / (pl.data.height / 100) ** 2;
            });

            imc /= players.length;
        }
        return imc;
    } catch (e) {
        console.error(e);
        throw new CustomError('Internal Server Error', 500);
    }
};

export default getImcController;
