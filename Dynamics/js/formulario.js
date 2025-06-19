let mainForm= document.getElementById("mainForm");
let input_edad= document.getElementById("edad");
let input_codigo_postal= document.getElementById("cod_Postal");

mainForm.addEventListener("submit", function(event){
    let para=0;
    if (isNaN(input_edad.value) == true){ //Comprobar que la edad sea númerica
        console.log("La edad no es numérica");
        para=1;
    }
    else{
        console.log("La edad es numérica: " + input_edad.value);
    }
    if (input_edad.value >=1 && input_edad.value <=130){ //Comprobar que la edad se encuentre en el rango dado
        console.log("Edad válida");
    }
    else{
        console.log("La edad " + input_edad + " es inválida");
        para=1;
    }
    if (isNaN(input_codigo_postal.value) == true){ //Comprobar que el código postal sea númerico
        console.log("El código postal no es numérico");
        para=1;
    }
    else{
        console.log("El código postal es numérico: " + input_edad.value);
    }
    if (input_codigo_postal.value.length == 5){ //Comprobar que el código postal tenga la longitud adecuada
        console.log("El código postal es correcto: " + input_codigo_postal.value);
    }
    else{
        console.log("Código Postal inválido. No cumple la longitud dada");
        para=1;  
    }
    //Comprobar que el género se encuentre en las opciones dadas
    let genero= ["masculino", "femenino", "otro"];
    let input_genero= document.querySelector("input[name='genero']:checked");
    console.log("El género seleccionada es: " + input_genero.value);
    if(genero.indexOf(input_genero.value) != -1){
        console.log("El género seleccionado se encuentra en las opciones");
    }
    else{
        console.log("El género " + input_genero.value + "no se encuentra en las opciones");
        para= 1;
    }
    //Comprobar que el país se encuentre en las opciones dadas
    let pais= ["mexico", "usa", "canada", "guatemala", "belice", "cuba", "honduras", "españa", "venezuela", "argentina", "otro"];
    let none="none";
    let input_pais= document.querySelector("option[name='pais']:checked");
    console.log("El país seleccionado es: " + input_pais.value);
    if(pais.indexOf(input_pais.value) != -1){
        console.log("El país se encuentra en las opciones dadas");
    }
    else{
        if (none.indexOf(input_pais.value) != -1){
            console.log("Selecciona una opción de país");
        }
        else{
            console.log("El pais " + input_pais.value + " no se encuentra en las opciones dadas");
        }
        para=1;
    }
    //Parar el programa si algún dato no se dio correctamente
    if(para == 0){
        console.log("Información enviada");
    }
    else{
        alert("uy kietos");
        event.preventDefault();
    }
});