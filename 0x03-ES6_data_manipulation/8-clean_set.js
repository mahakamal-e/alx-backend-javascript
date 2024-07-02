const cleanSet = (set, startString) => {
  if (startString === '') return '';
  let result = Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.substring(startString.length))
    .join('-');
    
    return result;
}
export default cleanSet;
