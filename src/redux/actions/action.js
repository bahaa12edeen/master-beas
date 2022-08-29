export const priceChnge=(num, price, obj)=>{
  return{
    type:"CHANGE",
    num: num, 
    price: price,
    obj: obj
  };
}