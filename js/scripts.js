const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColor = document.getElementById('toggle-color');
const rootStyles = document.documentElement.style;

const textsoChange = document.querySelectorAll('[data-seection]');

const flagsElement = document.getElementById('flags');
const changeLenguage = async lenguage =>{
    const requesJson = await fetch(`./lenguajes/${lenguage}.json`);
    const texts = await requesJson.json();

    for( const textoChange of textsoChange){
        const seection = textoChange.dataset.seection;
        const value = textoChange.dataset.value;

        textoChange.innerHTML = texts[seection][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLenguage(e.target.parentElement.dataset.lenguage);  
});


toggleTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = "assets/icons/sun.svg"
        toggleText.textContent = 'Modo de luz'
    }else{
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = 'Modo Oscuro';
    }
});

toggleColor.addEventListener('click', (e) => {
        rootStyles.setProperty("--primary-color", e.target.dataset.color);
});