let arquivo = document.getElementById('btnFile');
let file = document.getElementById('iptFile');

arquivo.addEventListener('click', () => {
    file.click();
});

var upload = document.getElementById("iptFile");
var span = document.getElementById("span");
upload.addEventListener("change", function(e) {
    var size = upload.files[0].size;
    if(size < 10485760) { 
        span.style.display = "none";
    } else {
        span.style.display = "block";
        upload.value = "";          
    }
    e.preventDefault();
});