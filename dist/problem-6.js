"use strict";
{
    const myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    const updateProfile = (profile, updatedMyProfile) => {
        return Object.assign(Object.assign({}, profile), updatedMyProfile);
    };
    // My Profile
    console.log(myProfile);
    // updateProfile
    const updatePuser = updateProfile(myProfile, { age: 26 });
    console.log(updatePuser);
}
