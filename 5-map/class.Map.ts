class HashMap {
    bucket: any[];

    constructor() {
        this.bucket = new Array(5);
    };
     
    hash(string: string) {
        let result = 0;
        for (let i = 0; i < string.length; i++) {
            result += string.charCodeAt(i)
        }
        return Math.abs(result) % this.bucket.length
    };

    addKey(key: string, value: number) {
        let id = this.hash(key);
        if(!this.bucket[id]) {
            this.bucket[id] = [];
        }
        this.bucket[id].push([key, value])
    };

     getKey(key: string) {
         let id = this.hash(key);
         if(this.bucket[id]) {
            for(let i = 0; i < this.bucket[id].length; i++) {
                if(this.bucket[id][i][0] === key) {
                    return this.bucket[id][i][1]
                }
            }
         } 
     };

     remove(key: string) {
        let id = this.hash(key);
        if(this.bucket[id]) {
            this.bucket[id] = this.bucket[id].filter(item => item[0] !== key)
        }
     };

     clear() {
        this.bucket = new Array(5)
     }

}