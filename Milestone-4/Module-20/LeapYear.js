function isLeapYear(year)
{
    if(year%4===0 && year%100!==0 || year%400===0)
    {
        return true;
    }
    return false;
}
const year = 2024;
const isMyYearLeap = isLeapYear(year);
if(isMyYearLeap)
{
    console.log(`${year} is a leap year.`);
}
else
{
    console.log(`${year} is not a leap year.`);
}
