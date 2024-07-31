interface IA {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

type DifferenceKeys<T extends IA, K extends IB> = Pick<T, Exclude< keyof T, keyof K>>

let a: IA = {a: 5, b: ''};
let b: IB = {a: 10, c: true};

function difference<T extends IA, K extends IB>(objA: T, objB: K): DifferenceKeys<T, K> {
    return Object.keys(objA).reduce((acc, curr) => {
        if (!objB.hasOwnProperty(curr)) {
            acc[curr] = objA[curr];
        };
        return acc;
    }, {} as DifferenceKeys<T, K>);
};

console.log(difference(a, b))