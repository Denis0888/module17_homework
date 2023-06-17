export function evenOrOdd(num) {
   
   let result;

   if ((typeof (+num) == "number") && (!isNaN(+num))) {
      if (num % 2 === 0) {
         return result = "even";
      } else {
         return result = "odd";
      }
   } else {
      return result = "you made a mistake";
   }
}





