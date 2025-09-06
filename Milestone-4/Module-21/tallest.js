const array=[1,3,2,5,4];

function findTallest(arr)
{
    let tallest=arr[0];
    for(const num of arr)
    {
        if(num>tallest)
        {
            tallest=num;
        }
    }
    return tallest;
}
console.log(findTallest(array));