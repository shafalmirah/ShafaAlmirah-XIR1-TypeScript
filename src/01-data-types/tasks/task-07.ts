/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
type registration = {
    studentID: string,
    fullName: string,
    gradeLevel: string,
    courseID: number,
    courseTittle: string,
    instructorName: string,
    totalLearningHours: number,
    registrationDate: number,
    isPaymentComplete: boolean
};

const registration1: registration = {
    studentID: "020809",
    fullName: "Shafa Almirah",
    gradeLevel: "11 th grade",
    courseID: 123,
    courseTittle: "EnghlishLearning",
    instructorName: "Miss Datik",
    totalLearningHours: 3,
    registrationDate: 3 - 5 - 2026,
    isPaymentComplete: true,
};

const registration2: registration = {
    studentID: "030809",
    fullName: "Park Jimin",
    gradeLevel: "11 th grade",
    courseID: 1234,
    courseTittle: "Mathematics",
    instructorName: "Mr Yayan",
    totalLearningHours: 3,
    registrationDate: 6 - 2 - 2026,
    isPaymentComplete: true,
};

const registration3: registration = {
    studentID: "040809",
    fullName: "carmen",
    gradeLevel: "11 th grade",
    courseID: 12345,
    courseTittle: "Mandarin",
    instructorName: "Mr Yoyok ",
    totalLearningHours: 3,
    registrationDate: 4 - 3 - 2026,
    isPaymentComplete: false,
};

console.log("==Student Register==");
console.log({ registration1 }, { registration2 }, { registration3 });

