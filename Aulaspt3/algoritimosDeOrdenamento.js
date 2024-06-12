//bubble sort

function bubbleSort(array, compareFn = defaultCompare) {
    const { lenght } = array; //1
    for (let i = 0; i < lenght -1; i++) { //{2}
        for (let j = 0; j < lenght -1; j++) { //{3}
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN)
                swap(array, j, j + 1); // {5}
        }
    }
    return array;
}
