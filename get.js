$.ajax({
    type: 'GET',
    url: 'https://api.github.com/repos/ZiChenStudio/BADmcpack/releases/latest',
    dataType: 'json',
    async: false,
    success (data) {
        $('#api').text(data.assets_url);
        $('#version').text(data.tag_name);
        $('#jj').text(data.body);
        $.each(data.assets,function(i, str) {
            downloadUrl = String(str.browser_download_url);
        });
    },
});
$.getScript('./download.js');