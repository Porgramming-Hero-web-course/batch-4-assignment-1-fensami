"use strict";
{
    const person = {
        name: "asad",
        age: 24,
        email: "asad@gmail.com"
    };
    function validateKeys(obj, keys) {
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    const personResult = validateKeys(person, ["age", "name"]);
    console.log(personResult);
}
