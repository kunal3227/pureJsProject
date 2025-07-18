const boxes = document.querySelectorAll('.colors')
const body = document.querySelector('body')

function changeBG(colorName){
    body.style.backgroundColor=colorName
}
boxes.forEach((box)=>{
    console.log(box.innerHTML);
    box.addEventListener('click',function(e){
        console.log(e.target.innerHTML);
        changeBG(e.target.innerHTML)
    })
})