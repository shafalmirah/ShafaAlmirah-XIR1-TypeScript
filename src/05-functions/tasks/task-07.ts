/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(studentsArray: { name: string; major: string; active: boolean }[]): number {
  let count = 0;
  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].active) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(studentsArray: { name: string; major: string; active: boolean }[]): number {
  let count = 0;
  for (let i = 0; i < studentsArray.length; i++) {
    if (!studentsArray[i].active) {
      count++;
    }
  }
  return count;
}

function countStudentsByMajor(studentsArray: { name: string; major: string; active: boolean }[], majorName: string): number {
  let count = 0;
  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].major === majorName) {
      count++;
    }
  }
  return count;
}

function printEnrollmentReport(studentsArray: { name: string; major: string; active: boolean }[]): void {
  console.log("=== University Enrollment Report ===");
  console.log(`Total Students: ${studentsArray.length}`);
  console.log(`Active Students: ${countActiveStudents(studentsArray)}`);
  console.log(`Inactive Students: ${countInactiveStudents(studentsArray)}`);
  console.log(`Software Engineering Students: ${countStudentsByMajor(studentsArray, "Software Engineering")}`);
  console.log(`Networking Students: ${countStudentsByMajor(studentsArray, "Networking")}`);
  console.log(`Multimedia Students: ${countStudentsByMajor(studentsArray, "Multimedia")}`);
}

// Display the enrollment report
printEnrollmentReport(students);