
function openTab(url) {
    var win = window.open('about:blank');
    var doc = win.document;
    doc.open();
    doc.write('<iframe src="' + url + '" style="width:100%; height:100%; border:none;"></iframe>');
    doc.close();
}