var input = document.getElementById("inp1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn1").click();
  }
});


function pressed() { 
  var text = parseInt(document.getElementById("inp1").value);
    output.innerHTML = "Par Level = " + (Math.round(text * 30) / 90).toFixed(0)

}


var input = document.getElementById("inp2");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn2").click();
  }
});


function pressed1() { 
  var text1 = parseInt(document.getElementById("inp2").value);
    output1.innerHTML = "Par Level = " + (Math.round(text1 * 15) / 90).toFixed(0)

}
