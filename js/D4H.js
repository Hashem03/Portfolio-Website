const toggle = document.getElementById('toggleDark');
const body = document.getElementById('body');
function myFunction(){
    if(localStorage.getItem('darkMode') == 'enabled'){
        document.body.classList.toggle("dark-theme")
    }
}