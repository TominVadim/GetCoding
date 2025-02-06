function checkPassword() {
    const password = document.getElementById('password');
    const passwordText = password.value;
    if(passwordText == 'Ernest 300') {
        return true;
    }
    alert('Идите нахер мы вас не звали');
    return false; 
}