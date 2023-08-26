
import _ from 'lodash';

function component(){
    const element = document.createElement('div');

    
    element.innerHTML = _join(['Hello' , 'webpack']);

    return element;
}

documunt.body.appendChild(component());