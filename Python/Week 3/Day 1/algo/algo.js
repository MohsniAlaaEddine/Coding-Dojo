/* 
Given an array of objects / dictionaries to represent new inventory,
and an array of objects / dictionaries to represent current inventory,
update the quantities of the current inventory

if the item doesn't exist in current inventory, add it to the inventory
return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return
function quantity(){
    var result=[]
    for (var i in newInv1){
        for (var j in currInv1){
            if (i["name"]==j["name"]){
                result.append(i["name"],i["quantity"])
            }
        }
    }
    return result
}
console.log(result);
quantity();