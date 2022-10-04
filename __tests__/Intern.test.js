const Intern  = require("../lib/Intern")

describe('Intern', () => {
    describe('initialization', () =>{
        let newIntern = new Intern("Sid", 1, "Sid@gmail.com", "SMU");
            //Assert
            console.log(newIntern)
            expect(newIntern.name).toEqual("Sid");
            expect(newIntern.id).toEqual(1);
            expect(newIntern.email).toEqual("Sid@gmail.com");
            expect(newIntern.school).toEqual("SMU");


    });

    describe("getSchool", ()=>{

        it('should return the school ', () => {
            let newIntern = new Intern("austin", 1 ,"post65841@gmail.com", "SMU" )
            

            expect(newIntern.getSchool()).toEqual("SMU")

        });

    })


    describe('getRole', () => {

        it('should return school when asked what role is ', () => {
            
                //Arrange
                //Act
                let newIntern =   new Intern("austin", 2, "posty65841@gmail.com", "SMU")



                //Assert
                expect(newIntern.getRole()).toEqual("Intern")

        });
       
    });
});