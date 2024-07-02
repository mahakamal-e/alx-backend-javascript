export default function getStudentIdsSum(students) {
  const result = students.reduce((acc, student) => acc + student.id, 0);
  return result;
}
