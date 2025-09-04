const number=[1, 2, 7, 9, 11, 3, 4, 5];
function oddNumberAverage(numbers)
{
    let sum=0;
    let count=0;
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]%2!==0)
        {
            sum+=numbers[i];
            count++;
        }
    }
    const average=sum/count;
    return average;
}
const result=oddNumberAverage(number);
console.log(`The average of odd numbers is: ${result}`);