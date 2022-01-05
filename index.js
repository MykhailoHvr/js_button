const button = document.getElementById('example_button');

button.onclick = function(event){
if (this.classList.contains('red')) {
    this.classList.remove('red');
    this.classList.add('blue');
}else{
    this.classList.remove('blue');
    this.classList.add('red');
}
};