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

type PickKeys<T> = (obj: T, arr: [ keyof T]) => K

const pickObjectKeys: PickKeys<IUser> = (obj: IUser, arr: [ keyof IUser]) => {
    const newObj = {} as K;
    arr.forEach( key => {
        newObj[key] = obj[key]
    });
    return newObj
}
