// function sum(a,b){
//     return a+b;
// }
async function getRemoteData(){
   const server =await fetch("https://dummyjson.com/products");
   const jsondata = await server.json();
   console.log(jsondata);
   return jsondata;
}
module.exports = getRemoteData;