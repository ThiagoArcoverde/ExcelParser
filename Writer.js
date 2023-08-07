const fs = require("fs")
const util = require("util")
const pdf = require("html-pdf")

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }


    async WriteHTML(fileName, buffer){
        try{
            await this.writer(fileName, buffer)
            return true;
        }catch(error){
            console.log(error)
            return false
        }
        
    }

    async WritePDF(fileName, buffer){
        try{
            pdf.create(buffer, {}).toFile(fileName, (error) => {
                console.log(error)
            })
        }catch(error){
            console.log(error)
        }
    }

}

module.exports = Writer