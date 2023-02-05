var code = String(Math.floor(Math.random()*(9999-1000+1)+1000));
$("#code").html(code);

var converter = new showdown.Converter(),
    text = $('#jj').text(),
    html = converter.makeHtml(text);

$('#jj').html(html)

function download() {
    console.log("download")
    window.location.href = downloadUrl;
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