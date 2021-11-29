const isUserName = 'son'
const isPassWord = '1'

function login() {
    var username = document.getElementById('username').value;
    console.log(username)
    var password = document.getElementById('password').value;
    if (username == isUserName) {
        if (password == isPassWord) alert('Đăng nhập thành công')
        else alert('Mật khẩu không chính xác')
    } else alert('Tên tài khoản hoặc mật khẩu không hợp lệ')
}

function reset() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}