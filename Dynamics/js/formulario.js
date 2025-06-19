let mainForm= document.getElementById("mainForm");
let input_edad= document.getElementById("edad");
let input_codigo_postal= document.getElementById("cod_Postal");

mainForm.addEventListener("submit", function(event){
    let para=0;
    if (isNaN(input_edad.value) == true){ //Comprobar que la edad sea númerica
        console.log("La edad no es numérica");
        input_edad.setAttribute("type","number");
        let error_edad=document.getElementById("par_edad");
        error_edad.innerHTML=("<label class='norm' id='edad' for='edad' >Edad <i style='color: red'>Pon una edad numérica</i></label>");
        input_edad.setAttribute("style", "background-color:rgb(239, 173, 173); border-color: rgb(153, 89, 89);");
        para=1;
    }
    else{
        console.log(`La edad es numérica: ${input_edad.value}`);
    }
    if (input_edad.value >=1 && input_edad.value <=130){ //Comprobar que la edad se encuentre en el rango dado
        console.log("Edad válida");
    }
    else{
        console.log("La edad " + input_edad + " es inválida");
        input_edad.setAttribute("min","1");
        input_edad.setAttribute("max","130");
        let error_edad=document.getElementById("par_edad");
        error_edad.innerHTML=("<label class='norm' id='edad' for='edad' >Edad <i style='color: red'>Pon una edad en el rango 1 a 130</i></label>");
        input_edad.setAttribute("style", "background-color:rgb(239, 173, 173); border-color: rgb(153, 89, 89);");
        para=1;
    }
    if (isNaN(input_codigo_postal.value) == true){ //Comprobar que el código postal sea númerico
        console.log("El código postal no es numérico");
        input_codigo_postal.setAttribute("type","number");
        let error_codigo_postal=document.getElementById("par_Cod_Post");
        error_codigo_postal.innerHTML=("<label class='norm' id='par_Cod_Post' for='cod_Postal'>Código Postal <i style='color: red'>Pon un Código Postal númerico</i></label>");
        input_codigo_postal.setAttribute("style", "background-color:rgb(239, 173, 173); border-color: rgb(153, 89, 89);");
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
        input_codigo_postal.setAttribute("min","1");
        let error_codigo_postal=document.getElementById("par_Cod_Post");
        if (isNaN(input_codigo_postal.value) == true){
            error_codigo_postal.innerHTML=("<label class='norm' id='par_Cod_Post' for='cod_Postal'>Código Postal <i style='color: red'>Pon un Código Postal númerico</i></label>");
        }
        else{
            error_codigo_postal.innerHTML=("<label class='norm' id='par_Cod_Post' for='cod_Postal'>Código Postal <i style='color: red'>Pon un Código Postal de 5 números</i></label>");
        }
        input_codigo_postal.setAttribute("style", "background-color:rgb(239, 173, 173); border-color: rgb(153, 89, 89);");
        para=1;  
    }
    //Comprobar que el género se encuentre en las opciones dadas
    let genero= ["masculino", "femenino", "otro"];
    let input_genero= document.querySelector("input[name='genero']:checked");
    console.log("El género seleccionado es: " + input_genero.value);
    if(genero.indexOf(input_genero.value) != -1){
        console.log("El género seleccionado se encuentra en las opciones");
    }
    else{
        console.log("El género " + input_genero.value + "no se encuentra en las opciones");
        if(input_genero.getAttribute("id") == "masculino"){
            let label_genero= document.getElementById("par_masculino");
            label_genero.textContent="Masculino";
            input_genero.setAttribute("value", "masculino");
        }
        if(input_genero.getAttribute("id") == "femenino"){
            let label_genero= document.getElementById("par_femenino");
            label_genero.textContent="Femenino";
            input_genero.setAttribute("value", "femenino");
        }
        if(input_genero.getAttribute("id") == "otroGen"){
            let label_genero= document.getElementById("par_otroGen");
            label_genero.textContent="Otro";
            input_genero.setAttribute("value", "otro");
        }
        let error_genero=document.getElementById("par_genero");
        error_genero.innerHTML=("<label class='norm' id='par_genero' for='genero'>Género: <i style='color: red'>Selecciona un género de las opciones</i></label>");
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
            let error_pais=document.getElementById("par_Pais");
            error_pais.innerHTML=("<label class='norm' id='par_Pais' for='pais'>País <i style='color: red'>Selecciona una opción de país</i></label>");
            let select_pais= document.getElementById("pais");
            select_pais.setAttribute("style", "background-color:rgb(239, 173, 173); border-color: rgb(153, 89, 89);");
        }
        else{
            console.log("El pais " + input_pais.value + " no se encuentra en las opciones dadas");
            input_codigo_postal.setAttribute("min","1");
            let error_pais=document.getElementById("par_Pais");
            error_pais.innerHTML=("<label class='norm' id='par_Pais' for='pais'>País <i style='color: red'>Selecciona una opción de país que se encuentre entre las opciones</i></label>");
            let select_pais= document.getElementById("pais");
            select_pais.setAttribute("style", "background-color:rgb(239, 173, 173); border-color: rgb(153, 89, 89);");
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