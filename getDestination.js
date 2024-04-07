function getStreet(coordinate) {
    // Coordinates of Point A and Point B
    const pointA = [-73.951239, 40.820304];
    const pointB = [-73.948412, 40.819025];

    // Calculate slope (m)
    const m = (pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);

    // Calculate y-intercept (b)
    const b = pointA[1] - m * pointA[0];

    // Calculate expected y-coordinate
    const yExpected = m * coordinate[0] + b;

    // Compare actual y-coordinate with expected y-coordinate
    if (coordinate[1] > yExpected) {
        return "145th";
    } else {
        return "125th";
    }
}


const route145 = [
    [-73.949775, 40.819798], // school
    [-73.949422, 40.820287],
    [-73.949000, 40.820881],
    [-73.948525, 40.821507],
    [-73.948076, 40.822128],
    [-73.947639, 40.822744],
    [-73.947175, 40.823378],
    [-73.946734, 40.823978],
    [-73.946238, 40.824604],
    [-73.944914, 40.824003], // 145th
    [-73.945450, 40.822777],
    [-73.946106, 40.821382],
    [-73.947161, 40.821772],
    [-73.948064, 40.822148],
    [-73.948525, 40.821507],
    [-73.949000, 40.820881],
    [-73.949422, 40.820287],
    [-73.949775, 40.819798] // school
];
for (const point of route145) {
    console.log(`The street for coordinate ${point} is ${getStreet(point)}.`);
}

console.log("-----------------------------------------------------------")

const route125 = [
    [-73.949774, 40.819598],
    [-73.950853, 40.818407],
    [-73.952290, 40.817242],
    [-73.952864, 40.815850],
    [-73.952983, 40.815080],
    [-73.953092, 40.814298],
    [-73.953163, 40.812708],
    [-73.953542, 40.812064],
    [-73.954016, 40.811379],
    [-73.952603, 40.810767],
    [-73.951180, 40.810186],
    [-73.949929, 40.809658],
    [-73.948335, 40.808982],
    [-73.946976, 40.808410],
    [-73.945460, 40.807812], // 125th
    [-73.944996, 40.808453],
    [-73.944523, 40.809070],
    [-73.947381, 40.810281],
    [-73.950223, 40.811462],
    [-73.951505, 40.812036],
    [-73.953163, 40.812708],
    [-73.953092, 40.814298],
    [-73.952983, 40.815080],
    [-73.952864, 40.815850],
    [-73.952290, 40.817242],
    [-73.950853, 40.818407],
    [-73.949774, 40.819598] // school
];
for (const point of route125) {
    console.log(`The street for coordinate ${point} is ${getStreet(point)}.`);
}