$(document).ready(function () {

    $("#Photo").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#circleimg').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    
    $(".outputblock").css("display","none")


    $(".finalblock").css("display","none")

    $("#submit").click(function () {
        if (document.getElementById("myname").value.length >= 5) {
            if (document.getElementById("myage").value >= 13) {
                if (document.getElementById("mygender").value.length >= 2) {
                    if (document.getElementById("myemail").value.length >= 10) {
                        if (document.getElementById("myphone").value.length >= 5) {
                            document.getElementById("Name").value = document.getElementById("myname").value;
                            document.getElementById("Age").value = document.getElementById("myage").value;
                            document.getElementById("Gender").value = document.getElementById("mygender").value;
                            document.getElementById("Email").value = document.getElementById("myemail").value;
                            document.getElementById("Phone").value = document.getElementById("myphone").value;

                            $(".finalblock").css("display","flex")
                        
                        }
                        else{
                            $(".outputblock").css("display","flex");
                            document.getElementById("output").value = "Your Phone";

                            $("#cross").click(function(){
                                $(".outputblock").css("display","none")
                            })
                        }

                    }
                    else{
                        $(".outputblock").css("display","flex");
                        document.getElementById("output").value = "Your Email";

                        $("#cross").click(function(){
                            $(".outputblock").css("display","none")
                        })
                    }
                }
                else {
                    $(".outputblock").css("display","flex");
                    document.getElementById("output").value = "Your Gender";

                    $("#cross").click(function(){
                        $(".outputblock").css("display","none")
                    })
                }
            }
            else {
                $(".outputblock").css("display","flex");
                document.getElementById("output").value = "Your Age";

                $("#cross").click(function(){
                    $(".outputblock").css("display","none")
                })
            }
        }
        else{
            $(".outputblock").css("display","flex");
            document.getElementById("output").value = "Your Name";

            $("#cross").click(function(){
                $(".outputblock").css("display","none")
            })
        }
    })


    $("#confcross").click(function(){
        $(".finalblock").css("display","none")
    })
    



})