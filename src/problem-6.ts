{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.


    
    // interface
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    // MyProfile Value
    const myProfile : Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    }

    // Arrow function
    const updateProfile=(profile:Profile, updatedMyProfile: Partial<Profile>): Profile => {
        return {...profile, ...updatedMyProfile}
    }

    // My Profile Result
    // console.log(myProfile);
    
    // updateProfile
    const updatePuser = updateProfile(myProfile,{age:26})
    // UpdateProfile Result
    console.log(updatePuser);
    
    
}