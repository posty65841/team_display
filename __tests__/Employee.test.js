const Employee = require("../lib/Employee")





describe('Employee', ( ) => {

    describe('initializtion', ( ) => {
        it('should get initialized correctly', () => {
             //Arrange 
             //Act
            let newEmplooyee = new Employee("sid", 1, "blah@gmail.com")

            // Assert
            expect(newEmplooyee.name).toEqual("sid")
            expect(newEmplooyee.id).toEqual(1)
            expect(newEmplooyee.email).toEqual("blah@gmail.com")



            
        });

    });

    describe("getName", ( ) => {
        it('should retuen the name given', () => {
            //Arrange 
             //Act
             let newEmplooyee = new Employee("sid", 1, "blah@gmail.com")

             //Assert
             expect(newEmplooyee.getName()).toEqual("sid")

             

            
            
        });

    });

    describe('getRole', ( ) => {
        it('should get initialized correctly', () => {

            
            
        });

    });

});