var urlObj = new window.URL(window.location.href);
var trcs = "https://il11liiillli11.github.io/TunnelRush22/";
if (commit) {
    var win;
    document.getElementById('TRCS').onclick = trcs() 
    function trcs(){
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = commit;
            win.document.body.appendChild(iframe);
            
            var interval = setInterval(function() {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
        }
    };
}


var urlObj = new window.URL(window.location.href);
var onevonelol = "https://il11liiillli11.github.io/1v1.lol/1v1.lol/";

if (onevonelol) {
    var win;

    document.getElementById('1v1').onclick = onevonelol()

        function onevonelol(){
        if (win) {
            win.focus();
        } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = onevonelol;
            win.document.body.appendChild(iframe);
            

            var interval = setInterval(function() {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;

                }
            }, 500);


        }
    };
}
