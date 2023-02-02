var code = String(Math.floor(Math.random()*(9999-1000+1)+1000));
$("#code").html(code);
function download() {
    console.log("download")
    window.location.href = "./download/BAD.zip";
}
function chack() {
    var passwd = $("#passwd").val();
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