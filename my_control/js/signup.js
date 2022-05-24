function nameIsCorrect() {
    var event = document.getElementById('user');
    var username = event.value;
    if(username == ''){
        event.classList.remove('normalInput','hintInput');
        event.classList.add('warningInput');
        return 0;
    }
    else if(!recName.test(username)) {
        event.classList.remove('normalInput','hintInput');
        event.classList.add('warningInput');
        return 1;
    }
    /*else if(nameIsExistence(username)){
        event.classList.remove('normalInput','hintInput');
        event.classList.add('warningInput');
        return 2;
    }*/
    else
        return 3;
}
function passwordIsCorrect(password) {
    if(recPassword.test(password))
        return 1;
    else{
        if(password.length < 8)
            return 3;
        else
            return 2;
    }
}
//userName
document.getElementById('user').addEventListener('focus',function () {
    this.classList.remove('warnInput','normalInput');
    this.classList.add('hintInput');
    document.getElementById('messageUser').style.display = 'block';
    document.getElementById('correct').style.display = 'none';
    document.getElementById('userHint').style.display = 'inline-block';
    document.getElementById('userWarn').style.display = 'none';
});

document.getElementById('user').addEventListener('blur',function () {
    document.getElementById('userHint').style.display = 'none';
    document.getElementById('userWarn').style.display = 'none';
    document.getElementById('messageUser').style.display = 'none';
    document.getElementById('correct').style.display = 'none';
    var index = nameIsCorrect(this.value);
    if(index == 0){
        document.getElementById('messageUser').style.display = 'block';
        document.getElementById('userWarn').style.display = 'block';
        document.getElementById('warnText').innerHTML = '用户名不能为空';
    }else if(index == 1){
        document.getElementById('messageUser').style.display = 'block';
        document.getElementById('userWarn').style.display = 'block';
        document.getElementById('warnText').innerHTML = '用户名格式错误';
    }else if(index == 2){
        document.getElementById('messageUser').style.display = 'block';
        document.getElementById('userWarn').style.display = 'block';
        document.getElementById('warnText').innerHTML = '用户名已经被占用';
    }else if(index == 3){
        document.getElementById('correct').style.display = 'inline-block';
        this.classList.remove('hintInput','warnInput');
        this.classList.add('normalInput');
    }
});

//password
//passwordWarn1：密码至少为8位
//passwordWarn2：密码格式错误
//passwordWarn3：密码不能为空
document.getElementById('password').addEventListener('focus',function () {
    this.classList.remove('warnInput','normalInput');
    this.classList.add('hintInput');
    document.getElementById('messagePassword').style.display = 'block';
    document.getElementById('passwordWarn1').style.display = 'none';
    document.getElementById('passwordWarn2').style.display = 'none';
    document.getElementById('passwordWarn3').style.display = 'none';
    document.getElementById('passwordHint').style.display = 'block';
    document.getElementById('passwordCorrect').style.display = 'none';
});


document.getElementById('password').addEventListener('blur',function () {
    document.getElementById('passwordHint').style.display = 'none';
    this.classList.remove('hintInput');
    if(this.value === ''){
        this.classList.add('warningInput');
        document.getElementById('passwordCorrect').style.display = 'none';
        document.getElementById('passwordWarn1').style.display = 'none';
        document.getElementById('passwordWarn2').style.display = 'none';
        document.getElementById('passwordWarn3').style.display = 'block';
    } else{
        var index = passwordIsCorrect(this.value);
        if(index === 1){
            document.getElementById('passwordCorrect').style.display = 'inline-block';
            document.getElementById('passwordWarn1').style.display = 'none';
            document.getElementById('passwordWarn2').style.display = 'none';
            document.getElementById('passwordWarn3').style.display = 'none';
            document.getElementById('messagePassword').style.display = 'none';
            this.classList.add('normalInput');
        } else if(index === 2){
            document.getElementById('messagePassword').style.display = 'block';
            document.getElementById('passwordCorrect').style.display = 'none';
            document.getElementById('passwordWarn1').style.display = 'none';
            document.getElementById('passwordWarn2').style.display = 'block';
            document.getElementById('passwordWarn3').style.display = 'none';
            this.classList.add('warningInput');
        }else if(index === 3){
            document.getElementById('messagePassword').style.display = 'block';
            document.getElementById('passwordCorrect').style.display = 'none';
            document.getElementById('passwordWarn1').style.display = 'block';
            document.getElementById('passwordWarn2').style.display = 'block';
            document.getElementById('passwordWarn3').style.display = 'none';
            this.classList.add('warningInput');
        }
    }
});
//number
function numberIsExistence(number) {
    if(number == '15723222479')
        return true;
    else
        return false;
}
document.getElementById('number').addEventListener('focus',function () {
    this.classList.remove('normalInput','warnInput');
    this.classList.add('hintInput');
    document.getElementById('messageNumber').style.display = 'none';
    document.getElementById('securityCode').style.display = 'block';
});
document.getElementById('number').addEventListener('blur',function () {
    this.classList.remove('hintInput');
    if(this.value === ''){
        this.classList.add('warningInput');
        this.classList.remove('normalInput');
        document.getElementById('numberCorrect').style.display = 'none';
        document.getElementById('securityCode').style.display = 'none';
        document.getElementById('messageNumber').style.display = 'block';
        document.getElementById('numberWarn1').style.display = 'none';
        document.getElementById('numberWarn2').style.display = 'none';
        document.getElementById('numberWarn3').style.display = 'block';
    } else{
        if(recNumber.test(this.value)) {
            if(numberIsExistence(this.value)) {
                this.classList.add('warningInput');
                this.classList.remove('normalInput');
                document.getElementById('numberCorrect').style.display = 'none';
                document.getElementById('securityCode').style.display = 'none';
                document.getElementById('messageNumber').style.display = 'block';
                document.getElementById('numberWarn1').style.display = 'block';
                document.getElementById('numberWarn2').style.display = 'none';
                document.getElementById('numberWarn3').style.display = 'none';
            }
            else {
                this.classList.add('normalInput');
                this.classList.remove('warningInput');
                document.getElementById('messageNumber').style.display = 'none';
                document.getElementById('numberCorrect').style.display = 'inline-block';
                document.getElementById('securityCode').style.display = 'block';
                document.getElementById('Register').removeAttribute('disabled');
            }
        }
        else {
            this.classList.add('warningInput');
            this.classList.remove('normalInput');
            document.getElementById('numberCorrect').style.display = 'none';
            document.getElementById('securityCode').style.display = 'none';
            document.getElementById('messageNumber').style.display = 'block';
            document.getElementById('numberWarn3').style.display = 'none';
            document.getElementById('numberWarn2').style.display = 'block';
            document.getElementById('numberWarn1').style.display = 'none';
        }
    }
});