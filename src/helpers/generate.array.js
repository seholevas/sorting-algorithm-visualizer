import {randomInteger} from "./random.integer"
export function generateArray(size = 100){
const array = [];
for (let i = 0; i < size; i++)
{
    array.push(randomInteger(5, 100))
}
    return array;
}


