/* eslint-disable */
export default function getListStudentIds(studentsArray) {
  if (!(studentsArray instanceof Array)) {
    return [];
  }
  return studentsArray.map((student) => student.id);
}
