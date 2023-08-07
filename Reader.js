const fs = require('fs')
const util = require('util')

class Reader{
    
    constructor(){
        this.readFile = util.promisify(fs.readFile);
    }

    async Read(filePath){
        try{
            return await this.readFile(filePath, "utf-8")
        }catch(error){
            return undefined;
        }
    }   
}

module.exports = Reader