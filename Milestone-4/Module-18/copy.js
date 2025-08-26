const product=[1,2,3,4,5,6];
const copy_Product=[];
for(const item of product){
    copy_Product.push(item);
}
product[0]=100;
copy_Product[2]=300;
console.log(product);
console.log(copy_Product);
