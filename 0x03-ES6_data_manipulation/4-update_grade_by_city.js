export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const cobj = obj;
      for (const student of newGrades) {
        if (student.studentId === cobj.id) {
          cobj.grade = student.grade;
          return cobj;
        }
      }
      cobj.grade = 'N/A';
      return cobj;
    });
}
