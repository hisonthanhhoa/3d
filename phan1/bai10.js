function showinfo() {
    var name = document.getElementById('hoten').value;
    var diachi = document.getElementById('diachi').value;
    var sdt = document.getElementById('sdt').value;
    document.getElementById('show').innerHTML += `
    <p>Họ tên ${name}</p>
    <p>Địa chỉ: ${diachi}</p>
    <p>Số điện thoại: ${sdt}</p>`
}