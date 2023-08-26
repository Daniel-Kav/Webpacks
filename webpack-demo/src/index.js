function component(){
    const element = document.createElement('div');

    //lodash currently is includedvia a script, is required for this line to work
    element.innerHTML = _join(['Hello' , 'webpack']);

    return element;
}

documunt.body.appendChild(component());