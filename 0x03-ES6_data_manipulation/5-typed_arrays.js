const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
};
export default createInt8TypedArray;
