/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

// Non-void function 1: Count submitted assignments
function countSubmittedAssignments(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  let count = 0;
  for (let i = 0; i < submissionsArray.length; i++) {
    if (submissionsArray[i].submitted) {
      count++;
    }
  }
  return count;
}

// Non-void function 2: Count missing assignments
function countMissingAssignments(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  let count = 0;
  for (let i = 0; i < submissionsArray.length; i++) {
    if (!submissionsArray[i].submitted) {
      count++;
    }
  }
  return count;
}

// Non-void function 3: Count passed students
function countPassedStudents(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  const passingScore = 75;
  let count = 0;
  for (let i = 0; i < submissionsArray.length; i++) {
    if (submissionsArray[i].score >= passingScore) {
      count++;
    }
  }
  return count;
}

// Non-void function 4: Count students requiring revision
function countStudentsRequiringRevision(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  const passingScore = 75;
  let count = 0;
  for (let i = 0; i < submissionsArray.length; i++) {
    if (submissionsArray[i].submitted && submissionsArray[i].score < passingScore) {
      count++;
    }
  }
  return count;
}

// Non-void function 5: Calculate average score
function calculateAverageScore(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  let total = 0;
  for (let i = 0; i < submissionsArray.length; i++) {
    total += submissionsArray[i].score;
  }
  return total / submissionsArray.length;
}

// Non-void function 6: Find highest score
function findHighestScore(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  let highest = submissionsArray[0].score;
  for (let i = 1; i < submissionsArray.length; i++) {
    if (submissionsArray[i].score > highest) {
      highest = submissionsArray[i].score;
    }
  }
  return highest;
}

// Non-void function 7: Find lowest score (excluding 0 from non-submissions)
function findLowestScore(submissionsArray: { student: string; submitted: boolean; score: number }[]): number {
  let lowest = submissionsArray[0].score;
  for (let i = 1; i < submissionsArray.length; i++) {
    if (submissionsArray[i].score < lowest) {
      lowest = submissionsArray[i].score;
    }
  }
  return lowest;
}

// Void function: Display the complete assignment report
function printAssignmentReport(submissionsArray: { student: string; submitted: boolean; score: number }[]): void {
  console.log("=== LMS Assignment Submission Report ===");
  console.log(`Total Students: ${submissionsArray.length}`);
  console.log(`Submitted Assignments: ${countSubmittedAssignments(submissionsArray)}`);
  console.log(`Missing Assignments: ${countMissingAssignments(submissionsArray)}`);
  console.log(`Passed Students: ${countPassedStudents(submissionsArray)}`);
  console.log(`Students Requiring Revision: ${countStudentsRequiringRevision(submissionsArray)}`);
  console.log(`Average Score: ${calculateAverageScore(submissionsArray).toFixed(2)}`);
  console.log(`Highest Score: ${findHighestScore(submissionsArray)}`);
  console.log(`Lowest Score: ${findLowestScore(submissionsArray)}`);
}

// Display the report
printAssignmentReport(submissions);