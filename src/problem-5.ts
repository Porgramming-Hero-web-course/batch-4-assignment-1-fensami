{
    //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


    // Arrow Function
    const getProperty = <T, K extends keyof T>(obj:T, key: K)=> {
        return obj[key];
    }

    // Person value
    const person = {name: "Alice", age: 30}

    // Result
    console.log(getProperty(person,"name"));
    



}