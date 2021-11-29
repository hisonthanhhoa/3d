function infoGender() {
    var checkedNam = document.getElementById('nam');
    var checkedNu = document.getElementById('nu');
    if (checkedNam.checked == true) alert("Giới tính là " + checkedNam.value)
    else {
        if (checkedNu.checked == true) alert("Giới tính là: " + checkedNu.value)
        else alert('Vui lòng chọn giới tính')
    }
}
document.getElementById('like').onclick = function() {
    if (document.getElementById('like').checked) {
        alert('Bạn vừa thích zingmp3.vn')
    } else alert('Bạn vừa bỏ thích zingmp3.vn')
}