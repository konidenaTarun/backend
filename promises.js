function getUserDetails(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({userroll :"678"})
        },2000);
    })
};
const myfun=async() => {
    console.log("123")
    const result =await getUserDetails("123");
    console.log(result);
    console.log("456")
}; 
myfun();


// function getUserDetails(id) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({userroll :"678"})
//         },2000);
//     })
// };
// function getUserSubjects(id) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({userroll :"456"})
//         },2000);    
//     })
// };
// function getUserMarks(id) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({userroll :"123"})
//         },2000);
//     })
// };
// const myfun = async() => {
//     console.log("123")
//     const result = await getUserDetails("456");
//     // const result=await getUserSubjects("678");
//     // const result = await getUserMarks("123");
//     console.log(result);
//     console.log("944");

// };
//  myfun();

