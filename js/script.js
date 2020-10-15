
/*VARIABLES*/

    /*filtros*/
    var departamento='TODOS';
    var municipio='TODOS';
    var ano='2020';
    
    /*informe*/
    var urlbase = 'http://pisi.mineduc.gob.gt:8080/BOE/OpenDocument/opendoc/view.jsp'
    var urlreporte='';    
    var titulo = '';

    /*diccionarios*/
    var deptosArray = ['ALTA VERAPAZ','BAJA VERAPAZ','CHIMALTENANGO','CHIQUIMULA','EL PROGRESO','ESCUINTLA','GUATEMALA','HUEHUETENANGO','IZABAL','JALAPA','JUTIAPA','PETEN','QUETZALTENANGO','QUICHE','RETALHULEU','SACATEPEQUEZ','SAN MARCOS','SANTA ROSA','SOLOLA','SUCHITEPEQUEZ','TOTONICAPAN','ZACAPA'];
    var munisArray={};
    var informesArray={};
    var informesNacionalesArray={};
    var especiales={};


    /*hardcodes*/
    var anoDropdown="<div class=\"dropdown\">"+
                                                            "<button class=\"btn btn-secondary dropdown-toggle btn-sm\" type=\"button\" id=\"anoMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                                                                "Año"+
                                                            "</button>"+
                                                            "<div class=\"dropdown-menu\" aria-labelledby=\"anoMenuButton\" id=\"anoChoices\">"+
                                                              "<a class='dropdown-item' onclick=\"setAno('2020')\" href='#'>2020</a>"+
                                                              "<a class='dropdown-item' onclick=\"setAno('2019')\" href='#'>2019</a>"+
                                                              "<a class='dropdown-item' onclick=\"setAno('2018')\" href='#'>2018</a>"+
                                                              "<a class='dropdown-item' onclick=\"setAno('2017')\" href='#'>2017</a>"+
                                                              "<a class='dropdown-item' onclick=\"setAno('2016')\" href='#'>2016</a>"+
                                                            "</div>"+
                                                            "</div>";


/*FUNCIONES*/
    function llenarMunisArray(){
        munisArray['ALTA VERAPAZ']=['CHAHAL','CHISEC','COBAN','FRAY BARTOLOME DE LAS CASAS','LANQUIN','LA TINTA','PANZOS','RAXRUHA','SAN CRISTOBAL VERAPAZ','SAN JUAN CHAMELCO','SAN MIGUEL TUCURU','SAN PEDRO CARCHA','SANTA CRUZ VERAPAZ','SANTA MARIA CAHABON','SENAHU','TACTIC','TAMAHU'];
        munisArray['BAJA VERAPAZ']=['CUBULCO','GRANADOS','PURULHA','RABINAL','SALAMA','SAN JERONIMO','SAN MIGUEL CHICAJ','SANTA CRUZ EL CHOL'];
        munisArray['CHIMALTENANGO']=['ACATENANGO','CHIMALTENANGO','EL TEJAR','PARRAMOS','PATZICIA','PATZUN','SAN ANDRES ITZAPA','SAN JOSE POAQUIL','SAN JUAN COMALAPA','SAN MARTIN JILOTEPEQUE','SAN MIGUEL POCHUTA','SAN PEDRO YEPOCAPA','SANTA APOLONIA','SANTA CRUZ BALANYA','TECPAN GUATEMALA','ZARAGOZA'];
        munisArray['CHIQUIMULA']=['CAMOTAN','CHIQUIMULA','CONCEPCION LAS MINAS','ESQUIPULAS','IPALA','JOCOTAN','OLOPA','QUEZALTEPEQUE','SAN JACINTO','SAN JOSE LA ARADA','SAN JUAN ERMITA'];
        munisArray['EL PROGRESO']=['EL JICARO','GUASTATOYA','MORAZAN','SAN AGUSTIN ACASAGUASTLAN','SAN ANTONIO LA PAZ','SANARATE','SAN CRISTOBAL ACASAGUASTLAN','SANSARE'];
        munisArray['ESCUINTLA']=['ESCUINTLA','GUANAGAZAPA','IZTAPA','LA DEMOCRACIA','LA GOMERA','MASAGUA','NUEVA CONCEPCION','PALIN','SAN JOSE','SANTA LUCIA COTZUMALGUAPA','SAN VICENTE PACAYA','SIPACATE','SIQUINALA','TIQUISATE'];
        munisArray['GUATEMALA']=['AMATITLAN','CHINAUTLA','CHUARRANCHO','FRAIJANES','GUATEMALA','MIXCO','PALENCIA','SAN JOSE DEL GOLFO','SAN JOSE PINULA','SAN JUAN SACATEPEQUEZ','SAN MIGUEL PETAPA','SAN PEDRO AYAMPUC','SAN PEDRO SACATEPEQUEZ','SAN RAYMUNDO','SANTA CATARINA PINULA','VILLA CANALES','VILLA NUEVA'];
        munisArray['HUEHUETENANGO']=['AGUACATAN','CHIANTLA','COLOTENANGO','CONCEPCION HUISTA','CUILCO','HUEHUETENANGO','JACALTENANGO','LA DEMOCRACIA','LA LIBERTAD','MALACATANCITO','NENTON','PETATAN','SAN ANTONIO HUISTA','SAN GASPAR IXCHIL','SAN ILDEFONSO IXTAHUACAN','SAN JUAN ATITAN','SAN JUAN IXCOY','SAN MATEO IXTATAN','SAN MIGUEL ACATAN','SAN PEDRO NECTA','SAN PEDRO SOLOMA','SAN RAFAEL LA INDEPENDENCIA','SAN RAFAEL PETZAL','SAN SEBASTIAN COATAN','SAN SEBASTIAN HUEHUETENANGO','SANTA ANA HUISTA','SANTA BARBARA','SANTA CRUZ BARILLAS','SANTA EULALIA','SANTIAGO CHIMALTENANGO','TECTITAN','TODOS SANTOS CUCHUMATAN','UNION CANTINIL'];
        munisArray['IZABAL']=['EL ESTOR','LIVINGSTON','LOS AMATES','MORALES','PUERTO BARRIOS'];
        munisArray['JALAPA']=['JALAPA','MATAQUESCUINTLA','MONJAS','SAN CARLOS ALZATATE','SAN LUIS JILOTEPEQUE','SAN MANUEL CHAPARRON','SAN PEDRO PINULA'];
        munisArray['JUTIAPA']=['AGUA BLANCA','ASUNCION MITA','ATESCATEMPA','COMAPA','CONGUACO','EL ADELANTO','EL PROGRESO','JALPATAGUA','JEREZ','JUTIAPA','MOYUTA','PASACO','QUESADA','SAN JOSE ACATEMPA','SANTA CATARINA MITA','YUPILTEPEQUE','ZAPOTITLAN'];
        munisArray['PETEN']=['DOLORES','EL CHAL','FLORES','LA LIBERTAD','LAS CRUCES','MELCHOR DE MENCOS','POPTUN','SAN ANDRES','SAN BENITO','SAN FRANCISCO','SAN JOSE','SAN LUIS','SANTA ANA','SAYAXCHE'];
        munisArray['QUETZALTENANGO']=['ALMOLONGA','CABRICAN','CAJOLA','CANTEL','COATEPEQUE','COLOMBA COSTA CUCA','CONCEPCION CHIQUIRICHAPA','EL PALMAR','FLORES COSTA CUCA','GENOVA COSTA CUCA','HUITAN','LA ESPERANZA','OLINTEPEQUE','PALESTINA DE LOS ALTOS','QUETZALTENANGO','SALCAJA','SAN CARLOS SIJA','SAN FRANCISCO LA UNION','SAN JUAN OSTUNCALCO','SAN MARTIN SACATEPEQUEZ','SAN MATEO','SAN MIGUEL SIGUILA','SIBILIA','ZUNIL'];
        munisArray['QUICHE']=['CANILLA','CHAJUL','CHICAMAN','CHICHE','CHINIQUE','CUNEN','IXCAN','JOYABAJ','NEBAJ','PACHALUN','PATZITE','PLAYA GRANDE','SACAPULAS','SAN ANDRES SAJCABAJA','SAN ANTONIO ILOTENANGO','SAN BARTOLOME JOCOTENANGO','SAN JUAN COTZAL','SAN MIGUEL USPANTAN','SAN PEDRO JOCOPILAS','SANTA CRUZ DEL QUICHE','SANTO TOMAS CHICHICASTENANGO','ZACUALPA'];
        munisArray['RETALHULEU']=['CHAMPERICO','EL ASINTAL','NUEVO SAN CARLOS','RETALHULEU','SAN ANDRES VILLA SECA','SAN FELIPE','SAN MARTIN ZAPOTITLAN','SAN SEBASTIAN','SANTA CRUZ MULUA'];
        munisArray['SACATEPEQUEZ']=['ALOTENANGO','ANTIGUA GUATEMALA','CIUDAD VIEJA','JOCOTENANGO','MAGDALENA MILPAS ALTAS','PASTORES','SAN ANTONIO AGUAS CALIENTES','SAN BARTOLOME MILPAS ALTAS','SAN LUCAS SACATEPEQUEZ','SAN MIGUEL DUENAS','SANTA CATARINA BARAHONA','SANTA LUCIA MILPAS ALTAS','SANTA MARIA DE JESUS','SANTIAGO SACATEPEQUEZ','SANTO DOMINGO XENACOJ','SUMPANGO'];
        munisArray['SAN MARCOS']=['AYUTLA','CATARINA','COMITANCILLO','CONCEPCION TUTUAPA','EL QUETZAL','EL TUMBADOR','ESQUIPULAS PALO GORDO','IXCHIGUAN','LA BLANCA','LA REFORMA','MALACATAN','NUEVO PROGRESO','OCOS','PAJAPITA','RIO BLANCO','SAN ANTONIO SACATEPEQUEZ','SAN CRISTOBAL CUCHO','SAN JOSE EL RODEO','SAN JOSE OJETENAM','SAN LORENZO','SAN MARCOS','SAN MIGUEL IXTAHUACAN','SAN PABLO','SAN PEDRO SACATEPEQUEZ','SAN RAFAEL PIE DE LA CUESTA','SIBINAL','SIPACAPA','TACANA','TAJUMULCO','TEJUTLA'];
        munisArray['SANTA ROSA']=['BARBERENA','CASILLAS','CHIQUIMULILLA','CUILAPA','GUAZACAPAN','NUEVA SANTA ROSA','ORATORIO','PUEBLO NUEVO VIÑAS','SAN JUAN TECUACO','SAN RAFAEL LAS FLORES','SANTA CRUZ NARANJO','SANTA MARIA IXHUATAN','SANTA ROSA DE LIMA','TAXISCO'];
        munisArray['SOLOLA']=['CONCEPCION','NAHUALA','PANAJACHEL','SAN ANDRES SEMETABAJ','SAN ANTONIO PALOPO','SAN JOSE CHACAYA','SAN JUAN LA LAGUNA','SAN LUCAS TOLIMAN','SAN MARCOS LA LAGUNA','SAN PABLO LA LAGUNA','SAN PEDRO LA LAGUNA','SANTA CATARINA IXTAHUACAN','SANTA CATARINA PALOPO','SANTA CLARA LA LAGUNA','SANTA CRUZ LA LAGUNA','SANTA LUCIA UTATLAN','SANTA MARIA VISITACION','SANTIAGO ATITLAN','SOLOLA'];
        munisArray['SUCHITEPEQUEZ']=['CHICACAO','CUYOTENANGO','MAZATENANGO','PATULUL','PUEBLO NUEVO','RIO BRAVO','SAMAYAC','SAN ANTONIO SUCHITEPEQUEZ','SAN BERNARDINO','SAN FRANCISCO ZAPOTITLAN','SAN GABRIEL','SAN JOSE EL IDOLO','SAN JOSE LA MAQUINA','SAN JUAN BAUTISTA','SAN LORENZO','SAN MIGUEL PANAM','SAN PABLO JOCOPILAS','SANTA BARBARA','SANTO DOMINGO SUCHITEPEQUEZ','SANTO TOMAS LA UNION','ZUNILITO'];
        munisArray['TOTONICAPAN']=['MOMOSTENANGO','SAN ANDRES XECUL','SAN BARTOLO AGUAS CALIENTES','SAN CRISTOBAL TOTONICAPAN','SAN FRANCISCO EL ALTO','SANTA LUCIA LA REFORMA','SANTA MARIA CHIQUIMULA','TOTONICAPAN'];
        munisArray['ZACAPA']=['CABAÑAS','ESTANZUELA','GUALAN','HUITE','LA UNION','RIO HONDO','SAN DIEGO','SAN JORGE','TECULUTAN','USUMATLAN','ZACAPA',];
    }

    function llenarInformeTitulo(){

        //INTRODUCCION
            //DEPTO MUNI
                informesArray['Informe anual de exito escolar']='AfqtIf.fnLdCjwePzhB9JeY';
            //NACIONALES
                informesNacionalesArray['Informe anual de exito escolar']='AfqtIf.fnLdCjwePzhB9JeY';

        //TIEMPO DE CLASES
            //DEPTO MUNI
                informesArray['2. Tiempo efectivo de clase en el Ciclo Básico']='AZyORGcQtJVOjYPROKonJ0A';
            //NACIONALES
                informesNacionalesArray['2. Tiempo efectivo de clase en el Ciclo Básico']='AZyORGcQtJVOjYPROKonJ0A';
            
        

        //INDIVIDUALES
            //DEPTO MUNI
                informesArray['3.1 Matrícula y cobertura bruta']='AehzXDgzNphEiclawl.Yb94';
                informesArray['3.2 Matrícula y cobertura neta']='ARNrUXzYCDZPud_YtjNv33c';
                informesArray['3.3 Tasa de transición general de primaria a básico']='AQGZ5Bg802dPoLyvD2HMylM';
                informesArray['3.4 Tasa de transición específica de primaria a básico']='AWa_j6XwUR9OqrWY8rIRHPk';
                informesArray['3.5 Tasa de promoción y eficiencia interna']='Ab_NIWxdE2BLug3n8_zcqsE';
                informesArray['3.6 Logros de aprendizaje']='Aa2iWahNHZJHkgitV.AO8XY';
                informesArray['3.7 Inversión']='AZG7q7.0XyJFseNiMPL.S1U';
                informesArray['3.8 Comparación Internacional']='AYIR5baHGztEhOTb1WFio6M';
                
            //NACIONALES
                informesNacionalesArray['3.1 Matrícula y cobertura bruta']='AVx4W2QjsSNMhrs1ZXKjZ5g';
                informesNacionalesArray['3.2 Matrícula y cobertura neta']='AQwRqKLM7S5PvJaWeXRJHMI';
                informesNacionalesArray['3.3 Tasa de transición general de primaria a básico']='AbkQaebTSsJPumMwIySCE2c';
                informesNacionalesArray['3.4 Tasa de transición específica de primaria a básico']='AWa_j6XwUR9OqrWY8rIRHPk';
                informesNacionalesArray['3.5 Tasa de promoción y eficiencia interna']='AWUnjQie1dZGt3vhhcGlsPE';
                informesNacionalesArray['3.6 Logros de aprendizaje']='Aa2iWahNHZJHkgitV.AO8XY';
                informesNacionalesArray['3.7 Inversión']='AZG7q7.0XyJFseNiMPL.S1U';
                informesNacionalesArray['3.8 Comparación Internacional']='AYIR5baHGztEhOTb1WFio6M';
                
                
        //BRECHAS
            //DEPTO MUNI
                informesArray['4.1 Matrícula y cobertura bruta']='Adc5qlAD4GdOmLTW1oowwvs';
                informesArray['4.2 Matrícula y cobertura neta']='AS0FMaapfl1IiqPnvQkD1eQ';
                informesArray['4.3 Tasa de transición general de primaria a básico']='Ab6quPLKSVFGlX6cz1ClJT4';
                informesArray['4.4.1 Tasa de promoción y eficiencia interna']='AXV7EDYRFPlDhXBDae1m9ZY';
                informesArray['4.4.2 Tasa de promoción y eficiencia interna por sector']='AeqB0rLhyBVLuhCW8fSnedQ';
                informesArray['4.5 Logros de aprendizaje']='Aa2iWahNHZJHkgitV.AO8XY';
                informesArray['IPG']='AfirBCa2OUFGpVm8fNSPU1c';
                informesArray['4.6 Inversión por brechas']='ARhww4X5aBRCn8X7UfO8LuA';

            //NACIONALES
                informesNacionalesArray['4.1 Matrícula y cobertura bruta']='AcUhA4FkKSRCjE_oHh369II';
                informesNacionalesArray['4.2 Matrícula y cobertura neta']='ARjeLMG9.1pMmoo3rKLNnts';
                informesNacionalesArray['4.3 Tasa de transición general de primaria a básico']='AWAfpoNKQmlEo9hJxfxGCF4';
                informesNacionalesArray['4.4.1 Tasa de promoción y eficiencia interna']='AXV7EDYRFPlDhXBDae1m9ZY';
                informesNacionalesArray['4.4.2 Tasa de promoción y eficiencia interna por sector']='AeqB0rLhyBVLuhCW8fSnedQ';
                informesNacionalesArray['4.5 Logros de aprendizaje']='Aa2iWahNHZJHkgitV.AO8XY';
                informesNacionalesArray['4.6 Inversión por brechas']='ARhww4X5aBRCn8X7UfO8LuA';

        //ODAS
            //DEPTO MUNI
                informesArray['1.1.1 Titulos del docente']='AU4xtGPAa99BgnTdns5oXS0';
                informesArray['1.1.2 Docentes que dominan lo que enseñan']='AZ2ddXVw9hJCvLmlObveHSA';
                informesArray['1.2 Directores líderes de centros educativos']='AaQLB7kt3vZGhWC0UQMD4Iw';
                informesArray['1.3 Currículo de calidad']='AXjAq58NS49Gsk2.wg3Ce.U';
                informesArray['1.4 Al menos 850 horas efectivas de clase']='AWPOmlG6PwlKg8oI8OJ0g4Q';
                informesArray['1.5 Libros y recursos educativos para estudiantes y docentes']='AXJmnNW6Ix1Iq0RI6J8r5wo';
                informesArray['1.6 Centros educativos en buen estado y con mobiliario adecuado']='ARWXTJCgFDNDnWxyigtIinY';
                informesArray['1.7 Acceso a un centro educativo para Todas y Todos']='AW58MRsVtG9FkBgq3NrUUwA';

            //NACIONALES
                informesNacionalesArray['1.1.1 Titulos del docente']='AU4xtGPAa99BgnTdns5oXS0';
                informesNacionalesArray['1.1.2 Docentes que dominan lo que enseñan']='ASI5GFB2yPFHuXXL8R_lEdw';
                informesNacionalesArray['1.2 Directores líderes de centros educativos']='AaQLB7kt3vZGhWC0UQMD4Iw';
                informesNacionalesArray['1.3 Currículo de calidad']='AXjAq58NS49Gsk2.wg3Ce.U';
                informesNacionalesArray['1.4 Al menos 850 horas efectivas de clase']='AWPOmlG6PwlKg8oI8OJ0g4Q';
                informesNacionalesArray['1.5 Libros y recursos educativos para estudiantes y docentes']='AXJmnNW6Ix1Iq0RI6J8r5wo';
                informesNacionalesArray['1.6 Centros educativos en buen estado y con mobiliario adecuado']='ARWXTJCgFDNDnWxyigtIinY';
                informesNacionalesArray['1.7 Acceso a un centro educativo para Todas y Todos']='AW58MRsVtG9FkBgq3NrUUwA';




        //FINANCIERO
            //DEPTO MUNI    

            informesArray['5.1 Costo financiero ODA1']='AfTj1PLjuFhLsbto7DIGeO0';
            informesArray['5.2 Costo financiero ODA2']='AcTDv_IJ7FFAoEm9R9yTUgg';
            informesArray['5.3 Costo financiero ODA3']='AWAdGpidbNZDqku9eJ5MvD8';
            informesArray['5.4 Costo financiero ODA4']='AZ0VoBM2HYVIiQlQRC05GPk';
            informesArray['5.5 Costo financiero ODA5']='AUebPxx9HNlAmBAAEXvHVug';
            informesArray['5.6 Costo financiero ODA6']='AYRMjujB.jNItnuVaHdWooY';
            informesArray['5.7 Costo financiero ODA7']='AS1AevczQjRHkYBBB1NBEFc';

            //NACIONALES

            informesNacionalesArray['5.1 Costo financiero ODA1']='ARXE4.a2G0FOmgAPmUCDFuw';
            informesNacionalesArray['5.2 Costo financiero ODA2']='AcTDv_IJ7FFAoEm9R9yTUgg';
            informesNacionalesArray['5.3 Costo financiero ODA3']='AWAdGpidbNZDqku9eJ5MvD8';
            informesNacionalesArray['5.4 Costo financiero ODA4']='AZ0VoBM2HYVIiQlQRC05GPk';
            informesNacionalesArray['5.5 Costo financiero ODA5']='AUebPxx9HNlAmBAAEXvHVug';
            informesNacionalesArray['5.6 Costo financiero ODA6']='AYRMjujB.jNItnuVaHdWooY';
            informesNacionalesArray['5.7 Costo financiero ODA7']='AS1AevczQjRHkYBBB1NBEFc';


        //INDICADORES ESPECIALES estos utilizan el informe nacional cuando es solo un departamento
            especiales['3.1 Matrícula y cobertura bruta']='especial';
            especiales['3.2 Matrícula y cobertura neta']='especial';
            especiales['4.1 Matrícula y cobertura bruta']='especial';
            especiales['4.2 Matrícula y cobertura neta']='especial';

    }

    function setDepto(depto){
        document.getElementById('departamentoMenuButton').innerHTML=depto;
        departamento=depto;

        var municipios = document.getElementById('municipioChoices');
        var elementos = "";
        elementos+="<a class='dropdown-item' onclick=\"setMun('TODOS')\" href='#'>TODOS</a>";
        if(depto!="TODOS"){
            munisArray[depto].forEach( function(depto, indice, array) {
                elementos+="<a class='dropdown-item' onclick=\"setMun('"+depto+"')\" href='#'>"+depto+"</a>";
            });
        }

        municipios.innerHTML = elementos;

        document.getElementById('municipioMenuButton').innerHTML="Municipio";
    }

    function setMun(mun){
    	document.getElementById('municipioMenuButton').innerHTML=mun;
    	municipio=mun;
    }

    function setAno(a){
        document.getElementById('anoMenuButton').innerHTML=a;
        ano=a;
    }

    function setInforme(){
        var id = "";
        if( (departamento=="TODOS" && municipio=="TODOS") || (municipio=="TODOS" && especiales[titulo]=="especial") ){
            id = informesNacionalesArray[titulo];
        }else{
            id = informesArray[titulo];
        }
        console.log(id);            
        urlreporte = urlbase + "?id="+id+"&p=";
    }

    function inversionModalidad(informe){
        document.getElementById("anoContainer").innerHTML=anoDropdown;
        changeInforme(informe);
    }

    function clickInforme(informe){
        document.getElementById("anoContainer").innerHTML="";
        changeInforme(informe);
    }

    function changeInforme(informe){
        titulo = informe;
    	document.getElementById('tituloInforme').innerHTML=informe;//.substring(4, informe.length);
    	departamento="TODOS";
    	municipio="TODOS";
        document.getElementById('departamentoMenuButton').innerHTML='Departamento';
        document.getElementById('municipioMenuButton').innerHTML='Municipio';
    	var id = informesNacionalesArray[titulo];
    	urlreporte = urlbase + "?id="+id+"&p=";
    	mostrar();
    }

    function mostrar(){
    	setInforme();
    	var urlFiltros="";
    	if(departamento=="TODOS" && municipio=="TODOS"){
    		urlFiltros= urlreporte;
    	}else if (departamento!="TODOS" && municipio=="TODOS"){
    		var municipioTodos ="";
    		munisArray[departamento].forEach( function(muni, indice, array) {
    			municipioTodos+=";"+muni;
    		});
    		municipioTodos = municipioTodos.slice(1); 
    		urlFiltros= urlreporte+"$lsMDepartamento="+departamento+"$lsMMunicipio="+municipioTodos;
    	}else {
    		urlFiltros= urlreporte+"$lsMDepartamento="+departamento+"$lsMMunicipio="+municipio;
    	}

        //urlFiltros= urlreporte+"$lsMAno="+ano;

    	var url = encodeURI(urlFiltros);
        iframe = document.getElementById('informe');
    	iframe.src=url;
    	console.log(url);
    }
    
/*MAIN*/
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });


        var elementos ="";
        var deptoChoices = document.getElementById('departamentoChoices');
        elementos+="<a class='dropdown-item' onclick=\"setDepto('TODOS')\" href='#'>TODOS</a>";

        deptosArray.forEach( function(depto, indice, array) {
          elementos+="<a class='dropdown-item' onclick=\"setDepto('"+depto+"')\" href='#'>"+depto+"</a>";
      });

        deptoChoices.innerHTML = elementos;
        llenarMunisArray();
        llenarInformeTitulo();



        document.getElementById('tituloInforme').innerHTML=titulo;
        
        departamento="TODOS";
        municipio="TODOS";

        changeInforme('Informe anual de exito escolar');
        mostrar();
    });



