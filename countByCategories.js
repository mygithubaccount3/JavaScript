((listOfArt, listOfCat) => {
    let result = {};
    if (listOfArt == "" || listOfCat == "") return ""; 
    for (let i = 0; i < listOfCat.length; ++i) {
	    result[listOfCat[i]] = 0;
    }
    for(let i = 0; i < listOfArt.length; ++i) {
      if (listOfCat.indexOf(listOfArt[i].charAt(0)) !== -1) {
      		result[listOfArt[i].charAt(0)] += Number(listOfArt[i].match(/\d+/));   
      }
    }
    return Object.keys(result).map(key => `(${key} : ${result[key]})`).join(" - ");
  }) (["EVERY NOTE PLAYED 102", "WASHINGTON BLACK: A NOVEL 123", "WOMEN TALKING: A NOVEL 125", "THE LIGHTKEEPER'S DAUGHTERS: A NOVEL 239", "US AGAINST YOU 060"], ["U", "E", "X", "W"]);
  
