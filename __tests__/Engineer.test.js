const Engineer = require("../lib/Engineer")

describe('Enginner', () => {
    describe('initialization', () =>{
        let newEngineer = new Engineer("Sid", 1, "Sid@gmail.com", "github.com/Sid");
            //Assert
            console.log(newEngineer)
            expect(newEngineer.name).toEqual("Sid");
            expect(newEngineer.id).toEqual(1);
            expect(newEngineer.email).toEqual("Sid@gmail.com");
            expect(newEngineer.github).toEqual("github.com/Sid");


    });

    describe("getGithub", ()=>{

        it('should return github user name ', () => {
            let newEngineer = new Engineer("austin", 1 ,"post65841@gmail.com", "github.com/austin" )
            

            expect(newEngineer.getGitHub()).toEqual("github.com/austin")

        });

    })


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