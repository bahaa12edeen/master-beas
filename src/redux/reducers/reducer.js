const priceCounter=(state=0,action)=>{

  switch(action.type){
      case "CHANGE":
        action.obj.value = "$"+action.num* action.price;
        // console.log("holla",action.obj);
        action.obj.textContent = ("$"+action.num* action.price);
        // document.getElementById('')
          return {price:("$"+action.num* action.price), obj: action.obj};
          
      // case "DECREMENT":
      //     return state -1;
      default:
        return state;
  }
}
export default priceCounter;