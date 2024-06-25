export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees
  };

  // Return the created object
  return employeesObject;
}
