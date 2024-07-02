export default function getStudentsByLocation(students, city) {
  const newArray = students.filter((student) => student.location === city);
  return newArray;
}
