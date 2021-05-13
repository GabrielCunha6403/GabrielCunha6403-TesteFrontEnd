let arquivo = document.getElementById('btnFile');
let file = document.getElementById('iptFile');

arquivo.addEventListener('click', () => {
    file.click();
});

function upload(){
    let size = document.getElementById('iptFile');

    alert(size);
}