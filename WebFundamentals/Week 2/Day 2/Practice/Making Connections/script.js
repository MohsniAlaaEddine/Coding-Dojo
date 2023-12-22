
 function removeIc(a){
    if(a==1){
        document.querySelector('#line1').remove()
        document.getElementById('num1').innerHTML--
    }
    else if(a==2){
        document.querySelector('#line2').remove()
        document.getElementById('num1').innerHTML--
    }
    
 }
 function countIc(a){
    if(a==1){
        document.querySelector('#line1').remove()
        document.getElementById('num1').innerHTML--
        document.getElementById('num2').innerHTML++

    }
    else if(a==2){
        document.querySelector('#line2').remove()
        document.getElementById('num1').innerHTML--
        document.getElementById('num2').innerHTML++
    }
 }
 function change(){
    var N=document.querySelector('#userName')
    N.innerText='Doe Jane'
 }




















































