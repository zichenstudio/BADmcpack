var key = String(Math.floor(Math.random()*(999999-100000+1)+100000));
$("#code").html(key);

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
    if (passwd === key) {
        $("#t").html("OK!");
        setTimeout("download()", 3000);
    }
    else {
        console.log("Wrong");
        $("#t").html("Wrong!!!");
    }
}