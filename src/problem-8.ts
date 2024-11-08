{
    //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


    // Person Type Declear
    type Person = {
        name: string;
        age: number;
        email: string;
    }
    // Person Result
    const person: Person = {
        name: "asad",
        age: 24,
        email: "asad@gmail.com"
    }

    // Arrow Funciton
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }

    // Function calling
    const personResult = validateKeys(person, ["age", "name"])

    // person Result
    console.log(personResult);


}