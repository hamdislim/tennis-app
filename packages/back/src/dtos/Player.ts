import { Expose } from 'class-transformer';

import { IsDefined, IsNumber, IsAlpha } from 'class-validator';

class Player {
    @IsDefined()
    @Expose()
    @IsNumber()
    id: number;

    @IsDefined()
    @Expose()
    @IsAlpha()
    firstname: string;

    @IsDefined()
    @Expose()
    @IsAlpha()
    lastname: string;

    @IsDefined()
    @Expose()
    shortname: string;

    @IsDefined()
    @Expose()
    @IsAlpha()
    sex: string & { length: 1 };

    @IsDefined()
    @Expose()
    country: {
        picture: string;
        code: string;
    };

    @IsDefined()
    @Expose()
    picture: string;

    @IsDefined()
    @Expose()
    data: {
        rank: number;
        points: number;
        weight: number;
        height: number;
        age: number;
        last: number[];
    };
}

export default Player;
