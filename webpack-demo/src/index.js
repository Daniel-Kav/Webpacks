import generateJoke from "./generateJoke";
import './styles/styles.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;


console.log(generateJoke());