import getPlayers from './v1/players/getPlayers';
import getHealth from './v1/healthcheck/getHealth';
import getPlayer from './v1/players/getPlayer';
import higherCountryRatio from './v1/statistiques/higherCountryRatio';
import getImc from './v1/statistiques/getImc';
import medianeHigh from './v1/statistiques/medianeHigh';

const api = {
    getPlayers,
    getHealth,
    getPlayer,
    higherCountryRatio,
    getImc,
    medianeHigh,
};
export default api;
