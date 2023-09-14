let string = "";
let buttons = document.querySelectorAll(".buttons");
Array.from (buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        // alert(e.target)
        if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value ='';
        }
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value =string;
        }else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value =string;
        }
    })
})
