function Submit(){
    const parg = document.createElement('p');
    parg.innerText = document.getElementById("input").value;
    document.body.appendChild(parg);
}