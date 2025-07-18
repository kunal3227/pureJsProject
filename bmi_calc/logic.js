const result = document.querySelector(".result")
const notice = result.nextElementSibling
const inputValue = notice.nextElementSibling
const pageBtn = inputValue.nextElementSibling.nextElementSibling

let page = 1
let weight
let height
pageBtn.addEventListener("click",function(e){
    if(page == 1){
    weight = inputValue.value ?? "1"
    // console.log(typeof weight);
    notice.innerHTML = "Enter your Height in (Cm):"
    pageBtn.textContent = "Show Result"
    inputValue.value = null
    page = 2
    }else if(page == 2){
        height = inputValue.value ?? '1'
        let resultValue = (weight*10000)/(height**2) 
        result.textContent = `Your BMI is ${resultValue.toFixed(2)}`
        pageBtn.textContent= "New" 
        page = 0      
    }
    else if(page == 0){
        result.textContent = "Result: 0"
        notice.textContent = "Enter your Weight in Kg:"
        inputValue.value = null
        pageBtn.textContent = "NEXT"
        weight = 1
        height = 1
    }else{
        result.textContent = "Error 704"
    }    
})