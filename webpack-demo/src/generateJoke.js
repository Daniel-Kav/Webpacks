
import axios from "axios";
 
function generateJoke() {
    const config ={
        headers: {
            accept: 'application/json',
        },
    }

    axios.get('https://icanhazdadjoke.com', config).then((res) => {
        document.getElementById('joke').innerHTML = res.data.joke;
    })
}

export default generateJoke;