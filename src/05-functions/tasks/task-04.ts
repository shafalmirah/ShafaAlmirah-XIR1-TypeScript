/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

// Function to print attendance report
function printAttendanceReport(attendanceArray: { name: string; present: boolean }[]): void {
  let totalPresent = 0;
  let totalAbsent = 0;
  let absentNames: string[] = [];

  // Loop through attendance array
  for (let i = 0; i < attendanceArray.length; i++) {
    if (attendanceArray[i].present) {
      totalPresent++;
    } else {
      totalAbsent++;
      absentNames.push(attendanceArray[i].name);
    }
  }

  // Display the report
  console.log("=== Attendance Report ===");
  console.log(`Total Present: ${totalPresent}`);
  console.log(`Total Absent: ${totalAbsent}`);
  console.log(`Absent Students: ${absentNames.join(", ")}`);
}

// Call the function
printAttendanceReport(attendances);