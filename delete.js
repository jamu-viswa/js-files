let obj = {
    name:'Jamuna',
    age:21,
    marks1:
    {
        ai:85,
        ca:78,
    }
}
delete obj.ai;
console.log(obj.marks?.ai);
console.log(obj);