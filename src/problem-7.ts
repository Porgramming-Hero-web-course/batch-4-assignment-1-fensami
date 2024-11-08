{
//  /Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        name: string;
        model: string;
        year: number;


        constructor(name:string,model:string,year:number){
            this.name = name;
            this.model = model;
            this.year = year;
        }
        
        getCarAge ():number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    
    // MyCar
    const myCar = new Car('Toyota', 'Corolla', 2018);
    
    // Output
    console.log(`My car age is: ${myCar.getCarAge()} years`);
    



}