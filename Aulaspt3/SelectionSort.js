//Restringe o número de trocas realizadas ao longo da ordenação

function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array; // {1}
    let indexMin;
    for (let i = 0; i < length - 1; i++) { // {2}
        indexMin = i; // {3}
        for (let j = i + 1; j < length; j++) { // {4}
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) { // {5}
                indexMin = j; // {6}
            }
        }
        if (i !== indexMin) { // {7}
            swap(array, i, indexMin);
        }
    }
    return array;
}
