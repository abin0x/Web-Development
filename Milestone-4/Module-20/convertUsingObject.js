function inchToFeet(inches) {
    const feet = Math.floor(inches / 12);
    const inch = inches % 12;
    return { feet, inch }; // object রিটার্ন
}

const myInches = 65;
const height = inchToFeet(myInches);

console.log(`My height is ${height.feet} feet and ${height.inch} inches`);
