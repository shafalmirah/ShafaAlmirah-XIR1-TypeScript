/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents: number = 0;
let absentStudents: number = 0;
const absentStudentNames: string[] = [];

for (const attendance of attendances) {
  if (attendance.present) {
    presentStudents++;
  } else {
    absentStudents++;
    absentStudentNames.push(attendance.name);
  }
}

const attendancePercentage: number = (presentStudents / attendances.length) * 100;

console.log(`Present students: ${presentStudents}`);
console.log(`Absent students: ${absentStudents}`);
console.log(`Absent student names: ${absentStudentNames.join(", ")}`);
console.log(`Attendance percentage: ${attendancePercentage}%`);
