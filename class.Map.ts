
class HashMap {
    bucket: any[];

    constructor() {
        this.bucket = Array(5).fill([])
    };
    
    hash(string: string) {
        let result = 0;
        for (let i = 0; i < string.length; i++) {
            result += string.charCodeAt(i)
        }
        return Math.abs(result) % 10
    };

    addKey(key: string, value: number) {
        let id = this.hash(key)
        this.bucket[0].push(key, value)
        return this.bucket
    };

    // getKey(key) {
    //     let id = this.hash(key)
    //     this.bucket[id].push(key)
    //     return this.bucket[id]
    //  }
}

const hashTamplate = new HashMap();
console.log(hashTamplate.bucket[hashTamplate.hash('london')])
 console.log(hashTamplate.addKey('London', 40))
// console.log(hashTamplate.getKey('Moscow'))
console.log(hashTamplate.hash('London'))