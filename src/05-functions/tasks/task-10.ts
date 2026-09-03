/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type E = { student: string; course: string; completed: boolean; score: number; duration: number };

const getTotalEnrollments = (e: E[]): number => e.length;
const countCompletedEnrollments = (e: E[]): number => e.filter(x => x.completed).length;
const countIncompleteEnrollments = (e: E[]): number => getTotalEnrollments(e) - countCompletedEnrollments(e);
const calculateCompletionPercentage = (e: E[]): number => (countCompletedEnrollments(e) / getTotalEnrollments(e)) * 100;

const findHighestScore = (e: E[]): number => Math.max(...e.map(x => x.score));
const findLowestScore = (e: E[]): number => Math.min(...e.map(x => x.score));
const calculateAverageScore = (e: E[]): number => e.reduce((sum, x) => sum + x.score, 0) / e.length;
const countPassingStudents = (e: E[]): number => e.filter(x => x.score >= 75).length;

// Course Statistics
const getUniqueCourses = (e: E[]): string[] => [...new Set(e.map(x => x.course))];
const countStudentsInCourse = (e: E[], course: string): number => e.filter(x => x.course === course).length;
const calculateAverageScoreForCourse = (e: E[], course: string): number => {
  const filtered = e.filter(x => x.course === course);
  return filtered.length > 0 ? filtered.reduce((sum, x) => sum + x.score, 0) / filtered.length : 0;
};

// Learning Statistics
const getTotalLearningHours = (e: E[]): number => e.reduce((sum, x) => sum + x.duration, 0);
const calculateAverageDuration = (e: E[]): number => getTotalLearningHours(e) / getTotalEnrollments(e);

// Display Functions
function printCompletionStatistics(e: E[]): void {
  console.log("=== Completion Statistics ===");
  console.log(`Total: ${getTotalEnrollments(e)} | Completed: ${countCompletedEnrollments(e)} | Incomplete: ${countIncompleteEnrollments(e)} | Rate: ${calculateCompletionPercentage(e).toFixed(2)}%`);
}

function printAcademicStatistics(e: E[]): void {
  console.log("\n=== Academic Statistics ===");
  console.log(`Highest: ${findHighestScore(e)} | Lowest: ${findLowestScore(e)} | Average: ${calculateAverageScore(e).toFixed(2)} | Passing: ${countPassingStudents(e)}`);
}

function printCourseStatistics(e: E[]): void {
  console.log("\n=== Course Statistics ===");
  getUniqueCourses(e).forEach(course => 
    console.log(`${course}: ${countStudentsInCourse(e, course)} students, Avg: ${calculateAverageScoreForCourse(e, course).toFixed(2)}`)
  );
}

function printLearningStatistics(e: E[]): void {
  console.log("\n=== Learning Statistics ===");
  console.log(`Total Hours: ${getTotalLearningHours(e)} | Avg Duration: ${calculateAverageDuration(e).toFixed(2)} hours`);
}

function printFullDashboard(e: E[]): void {
  console.log("╔═══════════════════════════════════════════════════╗");
  console.log("║  ONLINE LEARNING PLATFORM - DIRECTOR DASHBOARD   ║");
  console.log("╚═══════════════════════════════════════════════════╝");
  printCompletionStatistics(e);
  printAcademicStatistics(e);
  printCourseStatistics(e);
  printLearningStatistics(e);
}

printFullDashboard(enrollments);