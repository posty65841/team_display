const Engineer = require("../lib/Engineer")

describe('Enginner', () => {
    describe('initialization', () =>{



    });


    describe('getRole', () => {

        it('should return Engineer when asked what role is ', () => {
            
                //Arrange
                //Act
                let newEngineer =   new Engineer("austin", 2, "posty65841@gmail.com", "github.com/austin")



                //Assert
                expect(newEngineer.getRole()).toEqual("Engineer")

        });
       
    });
});