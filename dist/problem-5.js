"use strict";
{
    //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const persone = { name: "Alice", age: 30 };
    console.log(getProperty(persone, "name"));
}
