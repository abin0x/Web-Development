const number=[1,2,3,4,5,3,2,1];
function noDuplicate(numbers)
{
    const uniqueNumbers = [];
    for(let i=0;i<numbers.length;i++)
    {
        if(!uniqueNumbers.includes(numbers[i]))
        {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers;
}
const result=noDuplicate(number);
console.log(`Array without duplicates: ${result}`);