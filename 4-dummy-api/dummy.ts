enum Gender{
    FEMALE = 'female',
    MALE = 'male'
}

interface IAdress {
    adress: string,
    city: string,
    coordinates: {
        lat: number,
        lng: number
    },
    country: string,
    postalCode: string,
    state: string,
    stateCode: string
}

interface IBank {
    cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
}

interface ICompany {
    adress: IAdress,
        department: string,
        name: string,
        title: string,
}

interface ICrypto {
    coin: string,
    network: string,
    wallet: string,
}

interface User {
    adress: IAdress,
    age: number,
    bank: IBank,
    birthDate: string,
    bloodGroup: string,
    company: ICompany,
    crypto: ICrypto,
    ein: string,
    email: string,
    eyeColor: string,
    firstName: string,
    gender: Gender,
    hair: {
        color: string,
        type: string,
    },
    height: number,
    id: number,
    image: string,
    ip: string,
    lastName: string,
    macAdress: string,
    maidenName: string,
    password: string,
    phone: string,
    role: string,
    ssn: string,
    university: string,
    userAgent: string,
    username: string,
    weight: number
}


async function dummyApi(){
    try {
        const responseUsers = await fetch('https://dummyjson.com/users')
        const { users } = await responseUsers.json()
        console.log(users)
        return users
        
    } catch (error) {
        console.error(error)
    }
}

dummyApi()