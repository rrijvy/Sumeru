(function () {
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var y = document.getElementsByClassName("scroll");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.backgroundColor = "#6666663d";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1; }
        x[myIndex - 1].style.display = "block";
        y[myIndex - 1].style.backgroundColor = "#599a29";
        setTimeout(carousel, 4000);
    }
})();