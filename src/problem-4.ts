{
    // /Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    // Circle Type
    type Circle = {
        shape: "circle";
        radius: number;
    }

    // Rectangle Type
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    // Union Type
    type Shape = Circle | Rectangle;

    // Arrow Funciton
    const calculateShapeArea = (shape: Shape) => {
        // Condition
        if ("circle" === shape.shape) {
            const areaOfCircle = Math.PI * shape.radius * shape.radius
            return areaOfCircle;
        } else if ("rectangle" === shape.shape) {
            const areaOfRectangle = shape.height * shape.width;
            return areaOfRectangle;
        }
    }

    // Circle Shape
    const circle: Shape = {
        shape: "circle",
        radius: 5
    }
    // Circle Shape Result
    console.log(calculateShapeArea(circle));

    // Rectangle shape
    const rectangle: Shape = {
        shape: "rectangle",
        width: 4,
        height: 6
    }
    // Rectangle shape Result
    console.log((calculateShapeArea(rectangle)));
}