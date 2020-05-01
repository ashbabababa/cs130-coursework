const defaultTheme = () => {
   document.quertSelector('#theme').className = "container default";
};

const oceanTheme = () => {
   document.quertSelector('#theme').className = "container ocean";
};

const desertTheme = () => {
   document.quertSelector('#theme').className = "container desert";
};


document.querySelector('#default').onclick = defaultTheme;
document.querySelector('#ocean').onclick = oceanTheme;
document.querySelector('#desert').onclick = desertTheme;
