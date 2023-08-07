const EJS = require("ejs")

class HTMLParser{
    static async Parse(table){
        try{
            return await EJS.renderFile("./table.ejs", {header: table.header, rows: table.rows})
        }catch(error){
            console.log(error)
            return undefined
        }
    }
}

module.exports = HTMLParser