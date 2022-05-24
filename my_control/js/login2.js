
p1 = document.getElementById("username").value;
p2 = document.getElementById("password").value;
p3 = document.getElementById("btn");

p3.onclick = function () {
    if (p1 == "admin" && p2 == "admin") {
        alert("登陆成功");
    } else {
        alert("登陆失败");
    }
}