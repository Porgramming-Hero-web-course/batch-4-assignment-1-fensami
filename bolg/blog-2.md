# Async / Await

** async/await is a syntax that was introduced in ES2017 to make working with Promises easier. It provides a way to write asynchronous code that looks and feels like synchronous code. In Typescript, you can define an asynchronous funciton using the async keyword . This tells the compiler that the funciton is asynchronous and will return a Promise.


<!-- Async Await Example -->

const functionName =  async (): Promise<ReturnType> => {
    try{
        const result = await promise;

        return result;
    }catch(error){
        throw error;
    }
};


# Promises
promises are a powerfull tool for working with asychronous operations in Typescript . For example, you might use a Promise to fetch data from an external API, or to execute a time-consuming tast in the background while your main threa continues to run . To use a Promise , you create a new instance of the Promise class and pass it a function that performs the asynchronous operation . This function should call the resolve method with the eventual result when the operation succeeds,or the reject method with an error when the operation fails. 
Once the Promise is created, you can attach callbacks to it using the then method.
these callbacks will be called when the Promise is fulfulle , with the resolved value passed as a parameter .
If the Promise is rejected , you can attach an error handle using the catch method, which will be called with the reason for the rejection.

<!-- Promies Example -->

const myPromise = new Promise((resolve, reject) => {
    * Do some asyncehoronous operation
    * if the operation is successfull, call resolve with the result
    * If the operation fails, call reject with an error object
})

myPromise.then((result)=> {
    * Handle The Successfull Result
}).catch((error)=> {
    * handle Error
})



