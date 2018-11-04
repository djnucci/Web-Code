function submit(){
    var children = document.getElementById("shirtLaundry").children[0].children[1].children[1].innerHTML;
        //first layer returns the elements, the second returns the rows, the third chooses the colomn, and the innerHTML grabs the text
        document.getElementById("summary").innerHTML = children;

}