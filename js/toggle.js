const toggle = document.getElementById('toggleDark');
const body = document.getElementById('body');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem('darkMode', 'enabled');
    } else{
        localStorage.setItem('darkMode', 'disabled');
    }
});

if(localStorage.getItem('darkMode') == 'enabled'){
    toggle.classList.toggle('bi-moon')
    document.body.classList.toggle("dark-theme")
}