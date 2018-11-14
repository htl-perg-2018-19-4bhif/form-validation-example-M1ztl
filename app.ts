$(document).ready(function () {

    let firstName: boolean = false;
    let lastName: boolean = false;
    let emailFalse: boolean = true;
    let emailRight: boolean = false;
    let newsLetterSet: boolean = false;

    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    SubmitBtn();

    $("#firstName").on("input", function () {
        if (!$("#firstName").val()) {
            $("#firstNameMandatory").show();
            firstName = false;
        } else {
            $("#firstNameMandatory").hide();
            firstName = true;
        }
        SubmitBtn();
    });

    $("#lastName").on("input", function () {
        if (!$("#lastName").val()) {
            $("#lastNameMandatory").show();
            lastName = false;
        } else {
            $("#lastNameMandatory").hide();
            lastName = true;
        }
        SubmitBtn();
    });

    $("#email").on("input", function () {
        if (!$("#email").val()) {
            emailRight = false;
        } else {
            emailRight = true;
        }
        setEmail();
    });

    $("#newsletter").on("input", function () {
        if (!$("#newsletter").is(":checked")) {
            newsLetterSet = true;
        } else {
            newsLetterSet = false;
        }
        setEmail();
    });

    function SubmitBtn() {
        if (firstName && lastName && emailRight) {
            $(":submit").prop("disabled", false);
        } else {
            $(":submit").prop("disabled", true);
        }
    }

    function setEmail(){
        if(emailFalse && newsLetterSet){
            emailRight = false;
            $('#emailMandatory').show();
        }else{
            emailRight = true;
            $('#emailMandatory').hide();
        }
        SubmitBtn();
    }
})