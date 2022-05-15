const apiFetchMock = {
    players: [
        {
            id: 52,
            firstname: 'Novak',
            lastname: 'Djokovic',
            shortname: 'N.DJO',
            sex: 'M' as string & { length: 1},
            country: {
                picture:
                    'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
                code: 'SRB',
            },
            picture:
                'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
            data: {
                rank: 2,
                points: 2542,
                weight: 80000,
                height: 188,
                age: 31,
                last: [1, 1, 1, 1, 1],
            },
        },
        {
            id: 95,
            firstname: 'Venus',
            lastname: 'Williams',
            shortname: 'V.WIL',
            sex: 'F' as string & { length: 1},
            country: {
                picture:
                    'https://data.latelier.co/training/tennis_stats/resources/USA.png',
                code: 'USA',
            },
            picture:
                'https://data.latelier.co/training/tennis_stats/resources/Venus.webp',
            data: {
                rank: 52,
                points: 1105,
                weight: 74000,
                height: 185,
                age: 38,
                last: [0, 1, 0, 0, 1],
            },
        },
    ],
};
export default apiFetchMock;