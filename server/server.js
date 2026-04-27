const express = require("express")
const server = express();
const cors = require("cors");

const database = require("./database")
server.use(cors());
server.listen(4000);
const {selectAllAysnc} = require("./database");
server.get("/books", async (request, response) => {
   const promise = database.selectAllAysnc();
    try{
        const  books = await promise ;
        response.send({status : "SUCCESS", data: books});
    }catch(ex){
        response.send({status : "FAILED" , date : ex});
    }
});