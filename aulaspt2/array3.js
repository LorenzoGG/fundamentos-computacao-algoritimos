const fibonnaci = []; // {1}

fibonnaci[1] = 1; // {2}
fibonnaci[2] = 1; // {3}

for (let i = 3; i < 20; i++)
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2]; // {4}

for (let i = 1; i < fibonnaci.length; i++) // {5}
    console.log(fibonnaci[1]); // {6}