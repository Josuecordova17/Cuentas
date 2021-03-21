function agregar() {
    mano =parseFloat(ge("mano"))
   agregado=parseFloat(document.getElementById("agregar").value);
   mano=mano+agregado
   ag.push(agregado+"   "+da())
   console.log(ag)
   arse("agregado",ag)
   se("mano",mano)
texto(mano,deudaTotal)
agregar.value=""
}
function texto(mano,deudaTotal) {
    try {
        document.getElementById("m").innerHTML=`Tienes ${mano} y te deben ${deudaTotal}`   
    } catch (e) {
        
    }
}
function deuda() {
mano=parseFloat(ge("mano"))
deudaTotal = parseFloat(ge('deben'))
   d=parseFloat(document.getElementById('d').value)
   mano=mano-d
   deudaTotal=d+deudaTotal
   localStorage.setItem("deben",deudaTotal)
   localStorage.setItem('mano',mano)
   texto(mano,deudaTotal)
   pres.push(d+"   "+da())
   arse("prestamo",pres)
}
function se(clave,va) {
   console.log(clave,va)
   localStorage.setItem(`${clave}`,va)
}
function ge(clave) {
   let nos=localStorage.getItem(`${clave}`)
   if (nos===null) {
       if (clave=="mano" || clave==="deben") {
           nos=0
       } else {
           nos=[]
       }
   }
   return nos
}
function arse(clave,va) {
   localStorage.setItem(`${clave}`,JSON.stringify(va))
}
function arge(clave) {
   let a=localStorage.getItem(`${clave}`)
   if (a===null) {
       return []
   }
   let devuelto=JSON.parse(a);
   console.log(devuelto)
   return devuelto
}
function gasto() {
    mano=parseFloat(ge('mano'))
    gastado=parseFloat(document.getElementById("gasto").value)
    mano=mano-gastado
    se("mano",mano)
    gastos.push(gastado+"   "+da())
    arse("gastos",gastos)
    texto(mano,deudaTotal)
}
function pagado() {
    deudaTotal=parseFloat(ge("deben"))
    mano=parseFloat(ge('mano'))
    pago=parseFloat(document.getElementById('pago').value)
    mano=mano+pago
    se("mano",mano)
    deudaTotal=deudaTotal-pago
    se("deben",deudaTotal)
    pagos.push(pago+"   "+da())
    arse('pagos',pagos)
    texto(mano,deudaTotal)
}
function des() {
    im="<h3>Prestamos</h3>"
    pres.forEach(element => {
         im=im+`${element}<br>`
        document.getElementById('des').innerHTML=im
    });
    im=im+'<br>'+"<h3>Gastos</h3>"
    gastos.forEach(element => {
        im=im+`${element}<br>`
        document.getElementById('des').innerHTML=im
    });
    im=im+'<br>'+"<h3>Mas Dinero</h3>"
    ag.forEach(element => {
        im=im+`${element}<br>`
        document.getElementById('des').innerHTML=im
    });
    im=im+'<br>'+"<h3>Pagos</h3>"
    pagos.forEach(element => {
        im=im+`${element}<br>`
        document.getElementById('des').innerHTML=im
    });
}
function da() {
    var fecha = new Date();
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mes=fecha.getMonth(),
    dia=fecha.getDate(),
    anio=fecha.getFullYear(),
    re=`${dia} de ${meses[mes]} de ${anio} a las ${fecha.toLocaleTimeString() }`
    return re
}
var pres=arge("prestamo"),
gastos=arge("gastos"),//
ag=arge("agregado"),
pagos=arge("pagos"),
mano=parseFloat(ge('mano')),//
deudaTotal=parseFloat(ge("deben"))//
texto(mano,deudaTotal)