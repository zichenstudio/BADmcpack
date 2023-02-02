var code = String(1234);
$("#code").html(code);
var passwd = $("#passwd").val();
function download() {
    console.log("download")
    window.location.href = "./download/BAD.zip";
}
function chack() {
    console.log("chack");
    if (passwd === code) {
        $("#t").html("OK!");
        setTimeout("download()", 3000);
    }
    else {
        console.log("Wrong");
        $("#t").html("Wrong!!!");
    }
}