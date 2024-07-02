const cleanSet = (set, startString) => {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const result = Array.from(set)
    .filter((value) => typeof element === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');

  return result;
};
export default cleanSet;
