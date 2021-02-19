const Employee = require("../lib/Employee"); //change to proper employee
//change describe to whatever im on, manager, etc
describe("Employee class", () => {
  describe("getName method", () => {
    it("displays the employee name", () => {
      const EmployeeS = new Employee("Sally", 1, 'sally@gmail.com')
      EmployeeS.getName();
      expect(EmployeeS.name).toBe("Sally");
    });
  });
  describe("getId method", () => {
    it("displays the employee ID", () => {
      const EmployeeS = new Employee("Sally", 1, 'sally@gmail.com')
      EmployeeS.getId();
      expect(EmployeeS.id).toBe(1);
    });
  });
  describe("getEmail method", () => {
    it("displays the employee Email", () => {
      const EmployeeS = new Employee("Sally", 1, 'sally@gmail.com')
      EmployeeS.getEmail();
      expect(EmployeeS.email).toBe('sally@gmail.com');
    });
  });
  describe("getRole method", () => {
    it("returns the employee role", () => {
      const EmployeeS = new Employee("Sally", 1, 'sally@gmail.com')
      EmployeeS.getRole();
      expect(EmployeeS.getRole()).toBe('Employee');
    });
  });
});


//change anywhere dave is, his ID, email