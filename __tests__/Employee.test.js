const Employee = require("../lib/Employee")





describe('Employee', ( ) => {

    describe('initializtion', ( ) => {
        it('should get initialized correctly', () => {
             //Arrange 
             //Act
            let newEmployee = new Employee("sid", 1, "blah@gmail.com")

            // Assert
            expect(newEmployee.name).toEqual("sid")
            expect(newEmployee.id).toEqual(1)
            expect(newEmployee.email).toEqual("blah@gmail.com")



            
        });

    });

    describe("getName", ( ) => {
        it('should retuen the name given', () => {
            //Arrange 
             //Act
             let newEmployee = new Employee("sid", 1, "blah@gmail.com")

             //Assert
             expect(newEmployee.getName()).toEqual("sid")

             

            
            
        });

    });

    describe('getRole', ( ) => {
        it('should return their role in the company ', () => {

            let role = "Employee"
            let newEmployee = new Employee("austin", 1, "posty68541@gmail.com")

            expect(newEmployee.getRole()).toEqual(role);
            
        });

    });

});