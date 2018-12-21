; ((s1, s2) => {
    const str = s1 + s2;
    alert(str.split('').filter(function(item, index, array) {
        return array.indexOf(item) === index; })
        .sort()
        .join(''));
}) ("xyaabbbccccdefww", "xxxxyyyyabklmopq");
