"use strict";
{
    const calculateShapeArea = (shape) => {
        if ("circle" === shape.shape) {
            const areaOfCircle = Math.PI * shape.radius * shape.radius;
            return areaOfCircle;
        }
        else if ("rectangle" === shape.shape) {
            const areaOfRectangle = shape.height * shape.width;
            return areaOfRectangle;
        }
    };
    const circle = {
        shape: "circle",
        radius: 5
    };
    console.log(calculateShapeArea(circle));
    const rectangle = {
        shape: "rectangle",
        width: 4,
        height: 6
    };
    console.log((calculateShapeArea(rectangle)));
}
