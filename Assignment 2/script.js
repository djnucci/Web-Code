function submit() {
    document.getElementById("summary").innerHTML = "";

    if (document.getElementById("username").value == "") {
        document.getElementById("summary").innerHTML += "Please enter a name. <br>";
    }

    var telNumber = document.getElementById("telephone").value.replace(/\D/g, "");

    if (telNumber == "" || telNumber.length != 10) {
        document.getElementById("summary").innerHTML += "Please enter a valid telephone number. <br>";
    }

    var rawDate1 = document.getElementById("collectDate").value.split("-");
    var rawDate2 = document.getElementById("deliverDate").value.split("-");

    var collectDate = new Date(rawDate1);
    var deliverDate = new Date(rawDate2);

    if (collectDate.toDateString() == "Invalid Date" || deliverDate.toDateString() == "Invalid Date"){
        document.getElementById("summary").innerHTML += "Please enter valid dates.";
    }

    if (deliverDate < collectDate){
        document.getElementById("summary").innerHTML += "Please enter a delivery date that is after the collection date.  <br>";
    }

    var runningTotal = 0;

    for (var i = 1; i < document.getElementById("shirtLaundry").children[0].children.length; i++){
        runningTotal += document.getElementById("shirtLaundry").children[0].children[i].children[0].children[0].value * document.getElementById("shirtLaundry").children[0].children[i].children[2].innerHTML;
    }
    for (var i = 1; i < document.getElementById("clothing").children[0].children.length; i++){
        runningTotal += document.getElementById("clothing").children[0].children[i].children[0].children[0].value * document.getElementById("clothing").children[0].children[i].children[2].innerHTML;
    }
    for (var i = 0; i < document.getElementById("sheets").children[0].children.length; i++){
        runningTotal += document.getElementById("sheets").children[0].children[i].children[0].children[0].value * document.getElementById("sheets").children[0].children[i].children[2].innerHTML;
    }
    for (var i = 0; i < document.getElementById("other").children[0].children.length; i++){
        runningTotal += document.getElementById("other").children[0].children[i].children[0].children[0].value * document.getElementById("other").children[0].children[i].children[2].innerHTML;
    }
    for (var i = 0; i < document.getElementById("service").children[0].children.length; i++){
        runningTotal += (document.getElementById("service").children[0].children[i].children[0].children[0].value * document.getElementById("service").children[0].children[i].children[2].innerHTML.replace(/\D/g, ""))/100;
    }

    runningTotal = runningTotal.toFixed(2)

    if (document.getElementById("summary").innerHTML == ""){
        document.getElementById("summary").innerHTML = "Your total comes to: $" + runningTotal + ", without tax and: $" + (runningTotal * 1.13).toFixed(2) + " with tax.";
    }
}
