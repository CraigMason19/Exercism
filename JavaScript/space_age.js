const SECONDS_IN_ONE_YEAR = 365.25 * (24 * 60 * 60);

const orbitalPeriod = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

function age(planet, ageInSeconds) {
    // unary plus operator
    return +Number(ageInSeconds / (orbitalPeriod[planet.toLowerCase()] * SECONDS_IN_ONE_YEAR)).toFixed(2);
}

console.log(age('earth', 1000000000));
console.log(age('mercury', 2134835688));