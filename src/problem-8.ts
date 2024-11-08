{
    //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


    type Person = {
name: string;
age: number;
email: string;
    }
    const person : Person = {
        name: "asad",
        age: 24,
        email: "asad@gmail.com"
    }

    function validateKeys<T extends object>(obj: T, keys:(keyof T)[]): boolean{
        for(const key of keys){
            if(!(key in obj)){
                return false;
            }
        }
        return true;
    }

    const personResult = validateKeys(person,["age", "name"]) 

console.log(personResult);


}