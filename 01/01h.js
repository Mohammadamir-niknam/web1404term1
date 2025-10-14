let inputs = process.argv.slice(3);
let command = process.argv[2];

console.log("command is : ",command);
console.log("Your Number is : ", inputs);
console.log("---------------------")

if(command == "sum")
{
    console.log(Number(inputs[0]) + Number(inputs[1]))
}
else if(command == "minus")
{
    console.log(Number(inputs[0]) - Number(inputs[1]))
}
else if(command == "print")
{
    let obj = {
        name : inputs[0],
        family : inputs[1],
        age : inputs[2]
    }
    console.log("Your Object is : " , obj);
}
else
{
    console.log("Please Check Again ")
}