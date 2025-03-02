function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
function setInnerTextByIDandValue(id,value) {
    document.getElementById(id).innerText = value;
}

function count(){
    const task = getInnerTextByID("task");
      const check = getInnerTextByID("check");

      const sum = task - 1 ;
      setInnerTextByIDandValue("task", sum);

      const checking = check + 1;
      setInnerTextByIDandValue("check", checking);

      if(sum === 0){
        alert('congratulation');
      }
}

function disable(id){
    const button = document.getElementById(id);
    button.disabled = true;
    button.style.backgroundColor = "lightgray";

}