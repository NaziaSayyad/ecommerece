
document.querySelector('button').addEventListener('click', myFunction)
let userData = JSON.parse(localStorage.getItem('userDetails')) || [];
function myFunction(event) {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#pass').value;
    //console.log('hello')
    let userObj = {
        fName: name,
        fEmail: email,
        fPassword: password
        
    }
    userData.push(userObj);
    localStorage.setItem('userDetails', JSON.stringify(userData));
    
}