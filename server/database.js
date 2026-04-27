const {v4: uuidv4} = require("uuid");
const books = [
    {bookId: uuidv4(),title : "T1", author : "A1", price : 100},
    {bookId: uuidv4(),title : "T2", author : "A2", price : 200},
    {bookId: uuidv4(),title : "T3", author : "A3", price : 300},
    {bookId: uuidv4(),title : "T4", author : "A4", price : 400},
    {bookId: uuidv4(),title : "T5", author : "A5", price : 500},
    {bookId: uuidv4(),title : "T6", author : "A6", price : 600}
]
const selectAllAysnc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(books);
        }, 1000);
    });
};
module.exports = {selectAllAysnc};