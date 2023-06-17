export function typeOfVariable(x) {
   let result;
   if ((typeof(x) == 'number')) {
      return result = "value is Number";
   } else if (typeof(x) == 'string') {
      return result = "value is String";
   } else if (typeof(x) == 'boolean') {
      return result = "value is Boolean";
   } else {
      return result = "value X is undefined";
   }
}
