function rotateRight(arr, rotations) {
    if (rotations === 0) return arr;
    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    return arr;
}

const arr = [2, 3, 4, 5, 62, 8, 9]
const result = rotateRight(arr, 32);
console.log(result);
const result1 = rotate(arr, 32);
console.log(result1);



function rotate(arr, rotation) {
    if (rotation === 0) {
        return arr;
    }
    if(rotation>arr.length ){
        rotation = rotation%arr.length;
    }
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < rotation; i++) {
        arr1.push(arr[i]);
    }
    for (let j = rotation; j < arr.length; j++) {
        arr2.push(arr[j])
    }
    return   [...arr1,...arr2];
}
