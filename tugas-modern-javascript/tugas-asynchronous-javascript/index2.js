var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
const execute = (time, items) =>{
    readBooksPromise(time,items[0]).then((res)=>{
        items.shift()
        if(items.length> 0){
            execute(res, items)
        }
    }).catch((err)=>{
        console.log("waktu habis");
    })
}
execute(10000, books)