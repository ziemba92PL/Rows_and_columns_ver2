let columns = parseInt(prompt("Ilość kolumn"));
let row = parseInt(prompt("Iloś wierszy"));


function GetColumns(x, y) {
  let i = 0;
  let object = "";
    while (i < x) {
       
        i = i + 1;
        object = object + " *";


    
    }
    console.log(object);

    while (i < y) {
        i = i + 1;
        object = object + " *";
    }
    console.log(object);
}

GetColumns(columns, row);