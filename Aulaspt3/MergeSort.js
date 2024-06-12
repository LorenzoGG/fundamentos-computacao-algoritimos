//Explore recursividade 
function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) { // {1}
        const { length } = array;
        const middle = Math.floor(length / 2); // {2}
        const left = mergeSort(array.slice(0, middle), compareFn); // {3}
        const right = mergeSort(array.slice(middle, length), compareFn); // {4}
        array = merge(left, right, compareFn); // {5}
    }
    return array;
}
