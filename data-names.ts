
export const GenderObj = {
    GIRL: 'Girl',
    BOY: 'Boy',
    UNISEX: 'Unisex',
} as const;

export const PopularityObj = {
    TRENDY: 'Trendy',
    UNIQUE: 'Unique'
} as const;

export const LengthObj = {
    LONG: 'Long',
    SHORT: 'Short',
    ALL: 'All'
} as const;

export type GenderType = (typeof GenderObj)[keyof typeof GenderObj];
export type PopularityType = (typeof PopularityObj)[keyof typeof PopularityObj];
export type LengthType = (typeof LengthObj)[keyof typeof LengthObj];

export interface Name {
    id: number;
    name: string;
    gender: GenderType;
    popularity: PopularityType;
    length: LengthType;
}


export const nameDataArray: Name[] = [
    {
        id: 1,
        name: "Laith",
        gender: GenderObj.BOY,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 2,
        name: "Jake",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 3,
        name: "Lamelo",
        gender: GenderObj.BOY,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 4,
        name: "Abraham",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 5,
        name: "Bartholomew",
        gender: GenderObj.BOY,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.LONG,
    },
    {
        id: 6,
        name: "Noah",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 7,
        name: "Benjamin",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 8,
        name: "William",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 9,
        name: "Lucus",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 10,
        name: "Harrison",
        gender: GenderObj.BOY,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.LONG,
    },
    {
        id: 11,
        name: "Selma",
        gender: GenderObj.BOY,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 12,
        name: "Asher",
        gender: GenderObj.BOY,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 13,
        name: "Tucker",
        gender: GenderObj.BOY,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },

    {
        id: 14,
        name: "Arya",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 15,
        name: "Olivia",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 16,
        name: "Fay",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 17,
        name: "Brooklyn",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 18,
        name: "Genevieve",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.LONG,
    },
    {
        id: 19,
        name: "Zoe",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 20,
        name: "Valentina",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 21,
        name: "Josephine",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 22,
        name: "Maya",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 23,
        name: "Everleigh",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.LONG,
    },
    {
        id: 24,
        name: "Poppy",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 25,
        name: "Maia",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 26,
        name: "Ivy",
        gender: GenderObj.GIRL,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },

    {
        id: 27,
        name: "Jude",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 28,
        name: "Adrian",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
    {
        id: 29,
        name: "Sunny",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.SHORT,
    },
    {
        id: 30,
        name: "Channing",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.LONG,
    },
    {
        id: 31,
        name: "Tennessee",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.LONG,
    },
    {
        id: 32,
        name: "Dallas",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },

    {
        id: 33,
        name: "Zephyr",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.UNIQUE,
        length: LengthObj.LONG,
    },

    {
        id: 34,
        name: "Teri",
        gender: GenderObj.UNISEX,
        popularity: PopularityObj.TRENDY,
        length: LengthObj.SHORT,
    },
]
