((listOfArt, listOfCat) => {
    let result = {};
    if (listOfArt == "" || listOfCat == "") return ""; 
    for (let i = 0; i < listOfCat.length; ++i) {
	    result[listOfCat[i]] = 0;
    }
    for(let i = 0; i < listOfArt.length; ++i) {
      if (listOfCat.indexOf(listOfArt[i].charAt(0)) !== -1) {
      		result[listOfArt[i].charAt(0)] += Number(listOfArt[i].match(/\d+/g));   
      }
    }
    return Object.keys(result).map(key => `(${key} : ${result[key]})`).join(" - ");
  }) (["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"], ["B", "R", "D", "X"]);
  
