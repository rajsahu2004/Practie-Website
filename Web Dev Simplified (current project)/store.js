var removeCartItemButtons = document.getElementsByClassName('btnDanger')
console.log(removeCartItemButtons)
for(var i=0; i< removeCartItemButtons.length;i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click')
}