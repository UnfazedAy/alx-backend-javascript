export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((res) => res.location === city);
}
