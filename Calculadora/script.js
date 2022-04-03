function somar () {
    var s1 = document.getElementById('som1')         // s = soma
    var s2 = document.querySelector('input#som2')
    var R1 = document.querySelector('div#res1')
    var ns1 = Number(s1.value)
    var ns2 = Number(s2.value)
    var S1 = ns1+ns2
     
  R1.innerHTML = ` ${S1} ` }

  function subtrair () {
    var t1 = document.getElementById('sub1')         // t = subtração
    var t2 = document.querySelector('input#sub2')
    var R2 = document.querySelector('div#res2')
    var nt1 = Number(t1.value)
    var nt2 = Number(t2.value)
    var S2 = nt1-nt2
     
  R2.innerHTML = ` ${S2} ` }

  function multiplicar () {
    var m1 = document.getElementById('mul1')         //m = multiplicação
    var m2 = document.querySelector('input#mul2')
    var R3 = document.querySelector('div#res3')
    var nm1 = Number(m1.value)
    var nm2 = Number(m2.value)
    var S3 = nm1*nm2
     
  R3.innerHTML = ` ${S3} ` }

  function dividir () {
    var d1 = document.getElementById('div1')         // d = divisão
    var d2 = document.querySelector('input#div2')
    var R4 = document.querySelector('div#res4')
    var nd1 = Number(d1.value)
    var nd2 = Number(d2.value)
    var S4 = nd1/nd2
     
  R4.innerHTML = ` ${S4} ` }