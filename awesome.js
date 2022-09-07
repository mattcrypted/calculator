let result = document.getElementById("inputext")
const calculate = (number) =>{
    result.value+=number
}

function clear(){
    result.value=""
}
function del(){
    result.value=result.value.slice(0,-1)
}

const Result = () =>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("wrong input!")
    }
}