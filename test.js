const origNum = 8;
let origObj = {
    color: 'blue'
};

const changeItUp = (num, obj) => {
    num = 7;
    // obj.color = 'red';
    obj = {};
};

changeItUp(origNum, origObj);
origObj = {};

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);
