/*
* - Клас Promise
* - resolve
* - reject
* - then, catch, finally
*/

// const prom = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0.5) {
//             resolve("Ok lalala");
//         }

//         reject("Oooops");


//     }, 1000)


// })

// prom
//     .then((res) => {
        
//         console.log("then", res);
        
//     })

//     .catch((error) => {

//         console.log("catch", error);
        
//     })
//     .finally(() => {
//         console.log("finally");
        
//     })

// console.log(prom);


/*
* Ланцюги промісів
* - декілька послідовних then
* - then повертає проміс
 */

// const prom = new Promise((resolve) => {

//     resolve(5);

// })

// prom
//     .then(function(data) {

//         // console.log(data);
//         return data * 2;
        
//     })
//     .then((result) => {
//         // console.log(result);
//         return result * 10
        
//     }) 
//     .then(data => {
//         console.log(data);
        
//     })


//****** Task */

// console.log("step 1");

// setTimeout(() => {
//     console.log("step 2");
    
// }, 0)

// new Promise((resolve) => {

//     resolve("step 3")
// })
//     .then(data => {
//         console.log(data);
//         return "step 4"
        
//     })
//     .then(data => {
//         console.log(data);
        
//     })

// setTimeout(() => {
//     console.log("step 5");
    
// },0)





//==================

// const prom = new Promise((resolve) => {
//     resolve(10);
// })

// prom
//     .then((data) => {
//         // console.log(data);
//         return new Promise((resolve) => {
//             resolve(data * 2);
//         })   
//     })
//     .then(result => {
//             console.log(result);
            
//         })