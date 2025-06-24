// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
// const execute = (time, items)=>{
//     readBooks(time, items[0], (remainingTime)=>{
//         items.shift()
//         console.log(remainingTime)
//         if(items.length > 0){
//             execute(remainingTime, items)
//         }
//     })
// }

// execute(10000, books)

function execute(time, index) {
    if (index < books.length) {
        readBooks(time, books[index], function(sisaWaktu) {
            execute(sisaWaktu, index + 1)
        })
    }
}

execute(10000, 0)
