function updateTextInput(val) {
          document.getElementById('textInput').value=val;
        }


function calcul() {
  var html = document.getElementById("input1").value;
    if (html <= 0){
    alert ("Enter a positive number");
  }
  else{
  document.getElementById("depose").innerHTML = "if you deposit "+ html;
  document.getElementById("depose").innerHTML = "if you deposit "+ html;

  var html1 = document.getElementById("textInput").value;
  document.getElementById("rate").innerHTML = "at an interesret rate of " + html1 + " %";

  var html2 = document.getElementById("year1").value;
  document.getElementById("year").innerHTML = "in the year "+ (parseInt(html2) + 2022);


    document.getElementById("amount").innerHTML = " You will receive an amount of "+ (parseInt(html) * parseInt(html1)/100 * parseInt(html2));}


  

}

// let html2 = document.getElementById("myP").innerHTML;
// document.getElementById("demo").innerHTML = html;
