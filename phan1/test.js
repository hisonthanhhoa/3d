// bai 1
document.write("hello world!!!")
    // bai 2
document.write(" hi ! how are you?")
    // bai 3
function greenting() {
    alert("hi there!!");
}
// bai 4
confirm(" are you sure?");
alert("ok");
document.write("thank you!!!");
// bai 5
function check() {
    if (myform.tuoi.value >= 18) {
        document.write("Tuổi của bạn hợp lệ , " + myform.name.value);
    } else
        alert("bạn chưa đủ tuôi");
}
// bài 6
function tinhtoan() {
    myform1.ketqua.value = eval(myform1.bieuthuc.value);
}
// bài 7
function kiemtra() {
    var thebox = document.getElementById("kiemtra");
    if (thebox.checked == false)
        document.bgColor = 'white';
    else
        document.bgColor = 'white';


}
// bài 8
function nuttat() {

    if (myform.tat.checked == true) {

        myform.bat.checked = false;

        document.bgColor = 'black';
    }

}

function nutbat() {

    if (myform.bat.checked == true) {

        myform.tat.checked = false;

        document.bgColor = 'white';
    }

}