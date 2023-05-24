function perfer(){
    let num=1; // primer digiturno EPS
    let res=true; //confirmacion de siguiente turno
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USURIO:"+""+""+nomuser+"\n"+"su turnoes:"+""+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementar turno
        }else{
            alert("ERROR EN TURNO...");
            break;

        }
        }


    }
    function perfer(){
        let num=1; // primer digiturno EPS
        let res=true; //confirmacion de siguiente turno
        while (num<=99 && res==true){
            nomuser=prompt("INGRESE NOMBRE USUARIO");
            if (nomuser!==null){
                var n=num.toString().padStart(2,'0');
                res=confirm("ESTIMADO USURIO:"+""+""+nomuser+"\n"+"su turnoes:"+""+"E"+n+"\n"+"ESPERE SU LLAMADO...");
                num++;//incrementar turno
            }else{
                alert("ERROR EN TURNO...");
                break;
