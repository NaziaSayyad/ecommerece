
document.querySelector('button').addEventListener('click', signFunction)
function signFunction(event) {
    event.preventDefault();


    
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#pass').value;
    //console.log('hello')
    


    
    let loginFromLs = JSON.parse(localStorage.getItem('userDetails'));
    //console.log(loginFromLs)

    for(let i=0; i<loginFromLs.length; i++) {
       if(email == loginFromLs[i].fEmail && password == loginFromLs[i].fPassword) {
        alert('Login Successful');
        window.location = 'mens.html'
        break;
       }else {
             alert('Invalid username and password');
             
         }
        
    }



    // if(email == dataEmail && password == dataPass) {
    //     alert('Login Successful');
    // }else {
    //     alert('Invalid username and password');
    // }
    
}