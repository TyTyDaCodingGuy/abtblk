function openTab(url) {
    var win = window.open('', '_blank');
    if (win) {
        // Browser has allowed it to be opened
        win.document.write('<iframe src="' + url + '" style="width:100%; height:100%; border:none;", width="100%" height="100%></iframe>');
    } else {
        // Browser has blocked it
        alert('Please allow popups for this website');
    }
}