function inchToFeet(inches) {
    const feet = Math.floor(inches / 12); // পূর্ণ ফুট
    const inch = inches % 12;             // বাকি ইঞ্চি
    return [feet, inch]; // array আকারে রিটার্ন করলাম
}

const myInches = 65;
const height = inchToFeet(myInches);

console.log(`My height is ${height[0]} feet and ${height[1]} inches`);
