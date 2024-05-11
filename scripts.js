function openTab(url) {
    var win = window.open('', '_blank');
    if (win) {
        // Browser has allowed it to be opened
        win.document.write('<style>body { margin: 0; padding: 0; }</style><iframe src="' + url + '" style="width:100%; height:100%; border:none;"></iframe>');
    } else {
        // Browser has blocked it
        alert('Please allow popups for this website');
    }
}