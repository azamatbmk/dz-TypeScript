interface IUser {
    name: string;
    age: number;
    skills: string[];
};

const form: IUser = {
    name: 'Vasia',
    age: 18,
    skills: ['typescript, javascript']
};

function pickObjectKeys<K, T extends IUser> (obj: T, arr: [ keyof IUser]): K {
    const newObj = {} as K;
    arr.forEach( key => {
        newObj[key] = obj[key]
    });
    return newObj
}
