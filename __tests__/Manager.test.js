const Manager  = require("../lib/Manager")

describe('Manager', () => {
    describe('initialization', () =>{
        let newManager = new Manager("Sid", 1, "Sid@gmail.com", 7);
            //Assert
            console.log(newManager)
            expect(newManager.name).toEqual("Sid");
            expect(newManager.id).toEqual(1);
            expect(newManager.email).toEqual("Sid@gmail.com");
            expect(newManager.officeNumber).toEqual(7);


    });

    describe("getOfficeNumber", ()=>{

        it('should return the office number ', () => {
            let newManager = new Manager("austin", 1 ,"post65841@gmail.com", "7" )
            

            expect(newManager.getOfficeNumber()).toEqual("7")

        });

    })


    describe('getRole', () => {

        it('should return office number when asked what role is ', () => {
            
                //Arrange
                //Act
                let newManager =   new Manager("austin", 2, "posty65841@gmail.com", "7")



                //Assert
                expect(newManager.getRole()).toEqual("Manager")

        });
       
    });
});