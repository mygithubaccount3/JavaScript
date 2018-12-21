; ((array) => {
    let sum = 0;

    if(array) {
        array.forEach((val) => {
            sum += val;
        });

        alert((sum % 2 === 0) ? "even" : "odd");
    }
    else {
        alert("even");
    }
}) ([2, 5, 34, 6]);
