const updateStudentGradeByCity = (students, city, newGrades) => {
  const filteredStudents = students.filter((student) => student.location === city);
  const updatedStudents = filteredStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A', // Set grade to 'N/A' if no grade found
    };
  });

  return updatedStudents;
};

export default updateStudentGradeByCity;
