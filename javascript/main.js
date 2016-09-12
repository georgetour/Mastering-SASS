//A function that on click will scroll smoothly where we want
$(document).ready(function() {
    $(".scroll").click(function(e){
        e.preventDefault();
        $('html,body').scrollTo(this.hash,this.hash);
    });



});
