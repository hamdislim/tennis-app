import Player from '../../dtos/Player';
import dataProvider from '../../services/dataProvider';

const higherCountryRatio = async (): Promise<{
    country: string;
    ratio: number;
}> => {
    const countries: { country: string; ratio: number }[] = [];
    try {
        // get All players
        const players = await dataProvider();

        // if players exists
        if (players.length > 0) {
            // loop on players to groupe with country
            players.forEach((pl: Player) => {
                // get if country alrady exists in the list of countries
                const index = countries.findIndex(
                    (co) => co.country === pl.country.code
                );
                // if country exists only recalculate the ratio
                if (index !== -1) {
                    const rat =
                        (pl.data.last.reduce((a, b) => a + b, 0) * 100) /
                        pl.data.last.length;
                    countries[index].ratio = (countries[index].ratio + rat) / 2;
                }

                // if country does not exists calculate the ratio and push it to the list
                else {
                    countries.push({
                        country: pl.country.code,
                        ratio:
                            (pl.data.last.reduce((a, b) => a + b, 0) * 100) /
                            pl.data.last.length,
                    });
                }
            });
            countries.sort((a, b) => b.ratio - a.ratio);
        }
        return {
            ...countries[0],
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default higherCountryRatio;
