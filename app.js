function backgroundColor(){
    document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';
}
backgroundColor();