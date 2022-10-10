// inheritance object javascript

const obj = {
  name: "jack",
  age: 12,
  id: 32,
};
// inheritance obj

const newObject = {
  __proto__: obj,
  name: "aimi",
  age: 12,
};

// console.log(newObject.name);
// console.log("name" in newObject);
// const newobject2 = {...obj}
// console.log(newobject2);
// console.log(Object.keys(newObject));
// console.log(newObject.id)

// const newobj2 = {...newObject}
// console.log(newobj2);

// for(var key in newObject){
//     console.log(key)
// }



//output all value inheritanced
// const arr = [1, 3, 3]
// for(var i = 0; i < arr.length; i++)
// {
//     console.log(i)
// }

// obj.map((e) => (e.age))


const arr = [1, 3, 4];

for(var keys of arr)
{
  console.log("for of",keys)
}

for(const keys in arr)
{
  console.log("for in", keys)
}