/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

// Non-void function 1: Get total patients
function getTotalPatients(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  return patientsArray.length;
}

// Non-void function 2: Count admitted patients
function countAdmittedPatients(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  let count = 0;
  for (let i = 0; i < patientsArray.length; i++) {
    if (patientsArray[i].admitted) {
      count++;
    }
  }
  return count;
}

// Non-void function 3: Count discharged patients
function countDischargedPatients(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  let count = 0;
  for (let i = 0; i < patientsArray.length; i++) {
    if (!patientsArray[i].admitted) {
      count++;
    }
  }
  return count;
}

// Non-void function 4: Count patients in a specific department
function countPatientsByDepartment(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[], departmentName: string): number {
  let count = 0;
  for (let i = 0; i < patientsArray.length; i++) {
    if (patientsArray[i].department === departmentName) {
      count++;
    }
  }
  return count;
}

// Non-void function 5: Find highest hospital bill
function findHighestBill(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  let highest = patientsArray[0].bill;
  for (let i = 1; i < patientsArray.length; i++) {
    if (patientsArray[i].bill > highest) {
      highest = patientsArray[i].bill;
    }
  }
  return highest;
}

// Non-void function 6: Find lowest hospital bill
function findLowestBill(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  let lowest = patientsArray[0].bill;
  for (let i = 1; i < patientsArray.length; i++) {
    if (patientsArray[i].bill < lowest) {
      lowest = patientsArray[i].bill;
    }
  }
  return lowest;
}

// Non-void function 7: Calculate average hospital bill
function calculateAverageBill(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  let total = 0;
  for (let i = 0; i < patientsArray.length; i++) {
    total += patientsArray[i].bill;
  }
  return total / patientsArray.length;
}

// Non-void function 8: Calculate total hospital revenue
function calculateTotalRevenue(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): number {
  let total = 0;
  for (let i = 0; i < patientsArray.length; i++) {
    total += patientsArray[i].bill;
  }
  return total;
}

// Non-void function 9: Get names of admitted patients
function getAdmittedPatientNames(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): string[] {
  let names: string[] = [];
  for (let i = 0; i < patientsArray.length; i++) {
    if (patientsArray[i].admitted) {
      names.push(patientsArray[i].name);
    }
  }
  return names;
}

// Void function: Print hospital report
function printHospitalReport(patientsArray: { id: string; name: string; age: number; department: string; admitted: boolean; bill: number }[]): void {
  console.log("=== Hospital Daily Report ===");
  console.log(`Total Patients: ${getTotalPatients(patientsArray)}`);
  console.log(`Total Admitted Patients: ${countAdmittedPatients(patientsArray)}`);
  console.log(`Total Discharged Patients: ${countDischargedPatients(patientsArray)}`);
  console.log(`Pediatrics: ${countPatientsByDepartment(patientsArray, "Pediatrics")}`);
  console.log(`Cardiology: ${countPatientsByDepartment(patientsArray, "Cardiology")}`);
  console.log(`Orthopedics: ${countPatientsByDepartment(patientsArray, "Orthopedics")}`);
  console.log(`Highest Hospital Bill: Rp${findHighestBill(patientsArray).toLocaleString("id-ID")}`);
  console.log(`Lowest Hospital Bill: Rp${findLowestBill(patientsArray).toLocaleString("id-ID")}`);
  console.log(`Average Hospital Bill: Rp${calculateAverageBill(patientsArray).toLocaleString("id-ID", { maximumFractionDigits: 0 })}`);
  console.log(`Total Hospital Revenue: Rp${calculateTotalRevenue(patientsArray).toLocaleString("id-ID")}`);
  console.log(`Admitted Patients: ${getAdmittedPatientNames(patientsArray).join(", ")}`);
}

// Display the hospital report
printHospitalReport(patients);