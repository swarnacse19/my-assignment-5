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
        alert('Congrates!! You have completed all the current task');
      }
}

function getActivation(id){
    const title = document.getElementById(id).innerText;

    const container = document.getElementById("activity");                
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
          const div = document.createElement("div");
          div.classList.add("bg-sky-100", "p-3", "mt-5", "rounded-lg");
          div.innerHTML = `
          <h1 class="text-[16px]">You have complete the task ${title} at ${hours}:${minutes}:${seconds} ${ampm}</h1> `
          container.appendChild(div);
}

function disable(id){
    const button = document.getElementById(id);
    button.disabled = true;
    button.style.backgroundColor = "lightgray";

}

