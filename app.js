var input = document.getElementById("input");

function getValue(value) {
  input.value += value;
}

function getTotal() {
  input.value = eval(input.value);
}

function clearAll() {
  input.value = "";
}

function remove(){
    input.value = input.value.slice(0,-1)
}