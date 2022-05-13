interface PlayerI {
    id: number;

    firstname: string;

    lastname: string;

    shortname: string;

    sex: string & { length: 1 };

    country: {
        picture: string;
        code: string;
    };

    picture: string;

    data: {
        rank: number;
        points: number;
        weight: number;
        height: number;
        age: number;
        last: number[];
    };
}

export default PlayerI;
