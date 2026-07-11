var loginAuthAgainType = 'none';  //二次登录验证得方式  loginSuccess 登录成功  firstLogin首次登录  updateResetPassword重置密码
var globDecodeTargetUrl = 'none';  //登录成功后需要跳转的地址
var dataReturnUrl = 'none';  //登录成功后需要跳转的地址
var globLoginAuthAgain = 'clear';  //是否是二次验证  有且不为clear值后端就不清redis信息
var globCorpCode = 'none';  //公司编码
if(location.host == "kuaiji.21tb.com" || location.host == "zpx.21tb.com") {
    document.write("<script src='js/jquery.js'><\/script>" +
        "<script src='js/cerm/jquery.vfdialog.js'><\/script>" +
        "<script src='js/laydate/laydate.js'><\/script>" +
        "<script src='js/laydate/laydate.dev.js'><\/script>");
}
document.write("<script src='/login/js/md5.min.js'></script>");
document.write("<script src='/login/js/base64.js'></script>");
document.write("<script src='/login/js/encrypt.js'></script>");

if(getQueryVariable('WxLogin',window.location.href)){
    var veeOk = decodeURIComponent(getQueryVariable('WxLogin',window.location.href));
    veeOk = JSON.parse(veeOk);
    setCookieWX('eln_session_id', veeOk.eln_session_id, 60);
    if(veeOk.corp_code){
        setCookieWX('corp_code', veeOk.corp_code, 60);
    }
    if(veeOk.user_id){
        setCookieWX('user_id', veeOk.user_id, 60);
    }
    window.location.href = veeOk.fromUrl;
}

function loginDialog(){
    var _html = '该帐号之前未正常退出或在另一地点登录，此次登录将使原登录失效<br />'
        + '如果不是您本人操作，请及时修改密码。<br />'
        + '如有疑问请联系管理员，谢谢！'
        + '<div class="ctl-buttons">'
        + '  <input type="button" class="btn-primary" onclick="ajaxContinueLogin(this)" value="继续登录">'
        + '  <input type="button" class="btn" onclick="hideDialog()" value="取消登录">'
        + '</div>';
    showDialog('系统提示', _html, 'prompt');
}
function ajaxContinueLogin(obj){
    $(obj).attr("disabled", true);
    $("#continueLogin").val(true);
    hideDialog();
    check();
}
//旧的继续登录（该方法继续保留）
function submit(obj){
    $(obj).attr("disabled", true);
    $("#form-login").attr('onsubmit','').submit();
}

//检查是否可注册
function checkUserRegister(){
    $.post("/login/login.checkUserRegister.do",function(data){
        if (data && data.register) {
            var _returnUrl = $('#returnUrl').val() || $("input[name='returnUrl']").val() || '';
            location.href = "/login/login.userRegister.do?returnUrl=" + encodeURIComponent(_returnUrl);
        } else {
            alert("不允许注册");
        }
    });
}

function pleaseInputCorrectInfo() {
    if ($("#error").length > 0) {
        $("#error").html("请输入正确的登录信息!");
    }
    else {
        alert("请输入正确的登录信息!");
    }
}

function updatePwdAndLoginName(){
    //debugger;
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);
    var _newLoginName = $('#newLoginName').val() || $("input[name='newLoginName']").val() || '';
    _newLoginName = $.trim(_newLoginName);
    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    if(checkNewLoginName() && checkNewPass() && checkConfirmPass()){
        $.post("/login/login.updatePasswordAndLoginName.do",
            {"corpCode":_corpCode, "loginName":_loginName, "password":_password, "newPassword":$("#newpwd").val(),"newLoginName":_newLoginName},
            function(data){
                var newPwd = $("#newpwd").val();
                var newLoginName = $("#newLoginName").val();
                $("input[name='password']").val(newPwd);
                $("input[name='swInput']").val(newPwd);
                $("input[name='loginName']").val(newLoginName);
                hideDialog();
                alert('用户名密码修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
                /*	$("#form-login").attr('onsubmit','').submit();*/
            });
    }
}

function updateUserInfoAndPwd(){
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _newUserName = $('#newUserName').val() || $("input[name='newUserName']").val() || '';
    _newUserName = $.trim(_newUserName);

    var _newIdCard = $('#newIdCard').val() || $("input[name='newIdCard']").val() || '';
    _newIdCard = $.trim(_newIdCard);

    var _positionId = $("#positionId").val() || $("input[name='positionId']").val() || '';
    var _positionName = $("#positionName").val() || $("input[name='positionName']").val() || '';

    var _mobile = $("#newMobile").val() || $("input[name='newMobile']").val() || '';

    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    if(checkNewUserName() && checkNewIdCard() && checkNewMobile() && checkNewPassForDpcs() && checkConfirmPass()&& checkPosition()){
        $.post("/login/login.updateUserInfoAndPwd.do",
            {"corpCode":_corpCode, "userName":_newUserName, "loginName":_loginName, "idCard":_newIdCard,"password":_password, "newPassword":$("#newpwd").val(),"positionId":_positionId,"positionName":_positionName,"mobile":_mobile},
            function(data){
                var newPwd = $("#newpwd").val();
                $("input[name='password']").val(newPwd);
                $("input[name='swInput']").val(newPwd);
                hideDialog();
                alert('用户名密码修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
            });
    }
}

function updateUserInfo(){
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _newUserName = $('#newUserName').val() || $("input[name='newUserName']").val() || '';
    _newUserName = $.trim(_newUserName);

    var _newIdCard = $('#newIdCard').val() || $("input[name='newIdCard']").val() || '';
    _newIdCard = $.trim(_newIdCard);

    var _positionId = $("#positionId").val() || $("input[name='positionId']").val() || '';
    var _positionName = $("#positionName").val() || $("input[name='positionName']").val() || '';

    var _mobile = $("#newMobile").val() || $("input[name='newMobile']").val() || '';

    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    if(checkNewUserName() && checkNewIdCard() && checkNewMobile() && checkPosition()){
        $.post("/login/login.updateUserInfo.do",
            {"corpCode":_corpCode, "userName":_newUserName, "loginName":_loginName, "idCard":_newIdCard,"positionId":_positionId,"positionName":_positionName,"mobile":_mobile,"password":_password},
            function(data){
                hideDialog();
                alert('用户名信息修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
            });
    }
}

//(function($){
//    $.fn.serializeJson=function(){
//        var serializeObj={};
//        $(this.serializeArray()).each(function(){
//            serializeObj[this.name]=this.value;
//        });
//        return serializeObj;
//    };
//})(jQuery);

function updateUserInfoForKuaiji() {
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);
    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);
    var _password = getPwdByIndexPage();
    _password = $.trim(_password);
    var param = {}, emptyFlag = false, optionalField = $("#optionalField").val();
    $($("#updateUserInfoForKuaijiForm").serializeArray()).each(function () {
        var detailId = this.name.replace("user.userDetail.", "");
        if (emptyFlag) {
            return;
        } else if (!(optionalField.indexOf("," + detailId + ",") > -1)
            && (this.value == "" || this.value == null || this.value == undefined)) {
            alert("请完善所有信息后才能进行登录！");
            emptyFlag = true;
            $("#" + detailId).focus();
            return;
        } else if(this.value && detailId === "idCard" && !isIdCard(this.value)) {
            alert("请输入正确的身份证号码！");
            $("#" + detailId).focus();
            emptyFlag = true;
            return;
        } else if(this.value && detailId === "mobile" && !isMobile(this.value)) {
            alert("请输入正确的电话号码！");
            $("#" + detailId).focus();
            emptyFlag = true;
            return;
        } else if(this.value && detailId === "email" && !isEmail(this.value)) {
            alert("请输入正确的电子邮箱！");
            $("#" + detailId).focus();
            emptyFlag = true;
            return;
        }
        param[this.name] = this.value;
    });
    if(emptyFlag){
        return;
    }
    param.corpCode = _corpCode;
    param.loginName = _loginName;
    param.password = _password;
    $.post("/login/login.updateUserInfoForKuaiji.do", param, function (data) {
        if (data.success) {
            $.vfdialog("close", "updateUserInfoForKuijiVfDialog");
            alert('信息修改成功,请点击"确定"按钮进入平台!');
            $("#continueLogin").val(true);
            check();
        } else if ("reorganizeDepartment" === data.message) {
            alert('获取人员类别或者重新组织部门结构出现异常，请重试!');
            $.vfdialog("close", "updateUserInfoForKuijiVfDialog");
        } else {
            alert('信息保存失败，请重试!');
            $.vfdialog("close", "updateUserInfoForKuijiVfDialog");
        }
    });
}


function isIdCard(card) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(card);
}

function isMobile(mobile) {
    var reg = /^1[0-9]{10}$/;
    return reg.test(mobile);
}

function isEmail(email) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return reg.test(email);
}

function checkMobileForKuaiji(){
    var newMobile = $("#mobile").val();

    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    var checkMobile = true;
    if(!newMobile == ''){
        var param = {"corpCode":_corpCode,"mobile":newMobile,"loginName":_loginName,"password":_password};
        $.ajax({
            type : "post",
            url : "/login/login.checkMobile.do",
            data : param,
            async : false,
            success : function(data){
                if(data.success===false){
                    $("#warnMobile").addClass("stu_editPass_worn_confirmPass");
                    $("#warnMobile").html(data.message);
                    $('#mobileSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
                    checkMobile = false;
                }else{
                    $("#warnMobile").html("");
                    $('#mobileSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
                    checkUserName = true;
                }
            }
        });
    }else{
        $("#warnMobile").html("");
        $('#mobileSpan').removeClass('hwrong');
        $('#mobileSpan').removeClass('hinters').removeClass('hright');
    }

    return checkMobile;
}
function checkEmailForKuaiji(){
    var email = $("#email").val();
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    var checkEmail = true;
    if(!email == ''){
        var param = {"corpCode":_corpCode,"email":email,"loginName":_loginName,"password":_password};
        $.ajax({
            type : "post",
            url : "/login/login.checkEmail.do",
            data : param,
            async : false,
            success : function(data){
                if(data.success===false){
                    $("#warnEmail").addClass("stu_editPass_worn_confirmPass");
                    $("#warnEmail").html(data.message);
                    $('#emailSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
                    checkEmail = false;
                }else{
                    $("#warnEmail").html("");
                    $('#emailSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
                    checkEmail = true;
                }
            }
        });
    }else{
        $("#warnEmail").html("");
        $('#emailSpan').removeClass('hwrong');
        $('#emailSpan').removeClass('hinters').removeClass('hright');
    }

    return checkEmail;
}

function updateLoginName(){
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);
    var _newLoginName = $('#newLoginName').val() || $("input[name='newLoginName']").val() || '';
    _newLoginName = $.trim(_newLoginName);
    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    if(checkNewLoginName()){
        $.post("/login/login.updateLoginName.do",
            {"corpCode":_corpCode, "loginName":_loginName, "password":_password, "newLoginName":_newLoginName},
            function(data){
                var newLoginName = $("#newLoginName").val();
                $("input[name='loginName']").val(newLoginName);
                hideDialog();
                alert('用户名修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
                /*	$("#form-login").attr('onsubmit','').submit();*/
            });
    }
}

function confirmForDou(){
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);
    var _password = getPwdByIndexPage();
    _password = $.trim(_password);
    $.post("/login/login.confirmForDou.do",
        {"corpCode":_corpCode, "loginName":_loginName, "password":_password},
        function(data){
            hideDialog();
            $("#continueLogin").val(true);
            check();
            /*	$("#form-login").attr('onsubmit','').submit();*/
        });
}

//验证密码
function checkNewPass(){
    //debugger;
    var newpwd = $("#newpwd").val();
    $("#worn_newPass").removeClass();
    $("#worn_newPass").html("");
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    var _loginName = $('#loginName').val() ||  $("input[name='loginName']").val() || '';
    _corpCode = $.trim(_corpCode);
    _loginName = $.trim(_loginName);
    if(newpwd == ''|| newpwd ==null){
        $("#worn_newPass").addClass("stu_editPass_worn_confirmPass");
        $("#worn_newPass").html("密码不能为空!");
        $('#newPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    if(newpwd ==_loginName){
        $("#worn_newPass").addClass("stu_editPass_worn_confirmPass");
        $("#worn_newPass").html("密码不能和用户名相同!");
        $('#newPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }

    var isSuccess = false;
//    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
//    var _loginName = $('#loginName').val() ||  $("input[name='loginName']").val() || '';
//    _corpCode = $.trim(_corpCode);
//    _loginName = $.trim(_loginName);
    var nead2Encryption = nead2EncryptionCorp(_corpCode);
    if(nead2Encryption){_loginName = encrypt(_loginName); newpwd = encrypt(newpwd);}
    $.ajax({
        url:"login.validatePassword.do",
        data: {"corpCode":_corpCode, "loginName": _loginName,"password":newpwd},
        async:false,
        type: "POST",
        success: function(msg){
            if(msg != null && msg != ""){

                isSuccess = false;
                $("#worn_newPass").addClass("stu_editPass_worn_confirmPass");
                $("#worn_newPass").html(msg);
                $('#newPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
            }else if(msg == ""){

                isSuccess = true;
            }
        }
    });
    if(isSuccess == false){

        return false;
    }

    $('#newPassSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
    return true;
}

function checkNewPassForDpcs(){
    var newpwd = $("#newpwd").val();
    $("#worn_newPass").removeClass();
    $("#worn_newPass").html("");
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    var _loginName = $('#loginName').val() ||  $("input[name='loginName']").val() || '';
    _corpCode = $.trim(_corpCode);
    _loginName = $.trim(_loginName);
    if(newpwd == ''|| newpwd ==null){
        $("#worn_newPass").addClass("stu_editPass_worn_confirmPass");
        $("#worn_newPass").html("密码不能为空!");
        $('#newPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    if(newpwd ==_loginName){
        $("#worn_newPass").addClass("stu_editPass_worn_confirmPass");
        $("#worn_newPass").html("密码不能和用户名相同!");
        $('#newPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }

    var isSuccess = false;
    $.ajax({
        url:"login.validatePasswordForDpcs.do",
        data: {"corpCode":_corpCode, "loginName": _loginName,"password":newpwd},
        async:false,
        type: "POST",
        success: function(data){
            if(data.success===false){
                isSuccess = false;
                $("#worn_newPass").addClass("stu_editPass_worn_confirmPass");
                $("#worn_newPass").html(data.message);
                $('#newPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
            }else{
                isSuccess = true;
            }
        }
    });

    if(isSuccess == false){
        return false;
    }

    $('#newPassSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
    return true;
}

//验证密码
function checkNewLoginName(){
    //debugger;
    var newLoginName = $("#newLoginName").val();
    if(newLoginName == ''){
        $("#wornNewLoginName").addClass("stu_editPass_worn_confirmPass");
        $("#wornNewLoginName").html("用户名不能为空!");
        return false;
    }else{
        var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
        _corpCode = $.trim(_corpCode);
        var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
        _loginName = $.trim(_loginName);
        var _newLoginName = $('#newLoginName').val() || $("input[name='newLoginName']").val() || '';
        _newLoginName = $.trim(_newLoginName);
        var _password = getPwdByIndexPage();
        _password = $.trim(_password);
        var param = {"corpCode":_corpCode, "loginName":_loginName, "password":_password, "newLoginName":_newLoginName};
        var checkLoginName = false;
        $.ajax({
            type : "post",
            url : "/login/login.checkLoginName.do",
            data : param,
            async : false,
            success : function(data){
                if(data.success===false){
                    $("#wornNewLoginName").addClass("stu_editPass_worn_confirmPass");
                    $("#wornNewLoginName").html(data.message);
                    $('#newLoginNameSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
                    checkLoginName = false;
                }else{
                    $("#wornNewLoginName").removeClass("stu_editPass_worn_confirmPass");
                    $("#wornNewLoginName").removeClass("stu_editPass_worn_newPass");
                    $("#wornNewLoginName").html("");
                    $('#newLoginNameSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
                    checkLoginName = true;
                }
            }
        });
        return checkLoginName;
    }
}

//验证姓名
function checkNewUserName(){
    var newUserName = $("#newUserName").val();
    if(newUserName == ''){
        $("#warnNewUserName").addClass("stu_editPass_worn_confirmPass");
        $("#warnNewUserName").html("姓名不能为空!");
        $('#newUserNameSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
    }else{
        var param = {"userName":newUserName};
        var checkUserName = false;
        $.ajax({
            type : "post",
            url : "/login/login.checkUserName.do",
            data : param,
            async : false,
            success : function(data){
                if(data.success===false){
                    $("#warnNewUserName").addClass("stu_editPass_worn_confirmPass");
                    $("#warnNewUserName").html(data.message);
                    $('#newUserNameSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
                    checkUserName = false;
                }else{
                    $("#warnNewUserName").html("");
                    $('#newUserNameSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
                    checkUserName = true;
                }
            }
        });
        return checkUserName;
    }
}
function checkExt1ForKuaiji(){
    var ext1 = $("#ext1").val();
    if($.trim(ext1) == ''){
        $("#warnExt1").addClass("stu_editPass_worn_confirmPass");
        $("#warnExt1").html("注师姓名不能为空!");
        $('#ext1Span').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }else{
        $("#warnExt1").html("");
        $('#ext1Span').removeClass('hinters').removeClass('hwrong').addClass('hright');
        return true;
    }
}

function checkExt2ForKuaiji(){
    var ext1 = $("#ext2").val();
    if($.trim(ext1) == ''){
        $("#warnExt2").addClass("stu_editPass_worn_confirmPass");
        $("#warnExt2").html("注师编号不能为空!");
        $('#ext1Span').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }else{
        $("#warnExt2").html("");
        $('#ext2Span').removeClass('hinters').removeClass('hwrong').addClass('hright');
        return true;
    }
}

function checkDutyNameForKuaiji(){
    var ext1 = $("#dutyName").val();
    if($.trim(ext1) == ''){
        $("#warnDutyName").addClass("stu_editPass_worn_confirmPass");
        $("#warnDutyName").html("职务不能为空!");
        $('#dutyNameSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }else{
        $("#warnDutyName").html("");
        $('#dutyNameSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
        return true;
    }
}

//验证身份证
function checkNewIdCard(){
    var newIdCard = $("#newIdCard").val();
    if(newIdCard == ''){
        $("#warnNewIdCard").addClass("stu_editPass_worn_confirmPass");
        $("#warnNewIdCard").html("身份证不能为空!");
    }else{
        var param = {"idCard":newIdCard};
        var checkIdCard = false;
        $.ajax({
            type : "post",
            url : "/login/login.checkIdCard.do",
            data : param,
            async : false,
            success : function(data){
                if(data.success===false){
                    $("#warnNewIdCard").addClass("stu_editPass_worn_confirmPass");
                    $("#warnNewIdCard").html(data.message);
                    $('#newIdCardSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
                    checkIdCard = false;
                }else{
                    $("#warnNewIdCard").html("");
                    $('#newIdCardSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
                    checkIdCard = true;
                }
            }
        });
        return checkIdCard;
    }
}

//验证手机号码
function checkNewMobile(){
    var newMobile = $("#newMobile").val();

    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = getPwdByIndexPage();

    _password = $.trim(_password);

    var checkMobile = true;
    if(!newMobile == ''){
        var param = {"corpCode":_corpCode,"mobile":newMobile,"loginName":_loginName,"password":_password};
        $.ajax({
            type : "post",
            url : "/login/login.checkMobile.do",
            data : param,
            async : false,
            success : function(data){
                if(data.success===false){
                    $("#warnNewMobile").addClass("stu_editPass_worn_confirmPass");
                    $("#warnNewMobile").html(data.message);
                    $('#newMobileSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
                    checkMobile = false;
                }else{
                    $("#warnNewMobile").html("");
                    $('#newMobileSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
                    checkUserName = true;
                }
            }
        });
    }else{
        $("#warnNewMobile").html("");
        $('#newMobileSpan').removeClass('hwrong');
        $('#newMobileSpan').removeClass('hinters').removeClass('hright');
    }

    return checkMobile;
}

document.onkeydown = function (e) {
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        $(".dpcs_form").submit();
    }
};

function checkPosition(){
    var positionId = $("#positionId").val();
    var checkPosition = true;
    if(positionId == ''){
        $("#warnNewPosition").addClass("stu_editPass_worn_confirmPass");
        $("#warnNewPosition").html("岗位不能为空!");
        checkPosition = false;
    }

    return checkPosition;
}

//验证密码
function checkConfirmPass(){
    //debugger;
    var newpwd = $("#newpwd").val();
    var confirmpwd = $("#confirmpwd").val();
    $("#worn_confirmPass").removeClass();
    $("#worn_confirmPass").html("");

    if(confirmpwd == ''){
        $("#worn_confirmPass").addClass("stu_editPass_worn_confirmPass");
        $("#worn_confirmPass").html("确认密码不能为空!");
        $('#confirmPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }

    if(newpwd != confirmpwd){
        $("#worn_confirmPass").addClass("stu_editPass_worn_confirmPass");
        $("#worn_confirmPass").html('两次密码输入不一致!');
        $('#confirmPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }

    $('#confirmPassSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
    return true;

}


//检测验证码是否输入
function checkValidateCode(){
    //判断页面是否存在 验证码输入框，如果存在则检测是否输入了验证码
    if( $("#validateCode").length>0){
        var validateCode = $("#validateCode").val();
        if(validateCode=="" || validateCode.length<4){
            $("#worn_confirmPass").addClass("stu_editPass_worn_confirmPass");
            $("#worn_confirmPass").html('请输入4位有效的验证码');
            $('#confirmPassSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
            return false;
        }
    }
}

function pwdInputKeyupEvent(obj){
    //debugger;
    var inputStr = $(obj).val();
    var letterLen = inputStr.length, //字符长度
        letter_1 = /[a-z]/.test(inputStr), //小写字母
        letter_2 = /[A-Z]/.test(inputStr), //大写字母
        letter_3 = /[0-9]/.test(inputStr) //数字
    /*
     口令规则：具体请依据后台设置
     情形一：
     口令长度小于8位：弱
     口令长度大于等于8位，且包含大小写和数字中的任意两种：中
     口令长度大于等于10位，且包含大小写和数字：强
     **/
    if (inputStr === "") {
        $('.pwd_strength').find('.pw_bar').animate({ "width": "0" }, 300);
    } else {
        if (letterLen >= 10 && (letter_1 && letter_2 && letter_3)) {
            $('.pwd_strength').find('.pw_bar').animate({ "width": "200px" }, 300);
        }else if (letterLen >= 8  && ((letter_1 || letter_2) && letter_3 || (letter_1 && letter_2))) {
            $('.pwd_strength').find('.pw_bar').animate({ "width": "134px" }, 300);
        }else{
            $('.pwd_strength').find('.pw_bar').animate({ "width": "67px" }, 300);
        }
    }
}
function updatePwd(){
    //debugger;
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = getPwdByIndexPage();

    _password = $.trim(_password);
    if(checkNewPass() && checkConfirmPass()){
        var _newpwd = $("#newpwd").val();
        var nead2Encryption = nead2EncryptionCorp(_corpCode);
        if(nead2Encryption){_password = encrypt(_password); _newpwd = encrypt(_newpwd);}
        $.post("/login/login.updatePassword.do",
            {"corpCode":_corpCode, "loginName":_loginName, "password":_password, "newPassword":_newpwd},
            function(data){
                var newPwd = $("#newpwd").val();
                $("input[name='password']").val(newPwd);
                $("input[name='swInput']").val(newPwd);
                hideDialog();
                alert('密码修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
                /*	$("#form-login").attr('onsubmit','').submit();*/
            });
    }
}

function updatePwdForDpcs(){
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = getPwdByIndexPage();
    _password = $.trim(_password);

    if(checkNewPassForDpcs() && checkConfirmPass()){
        $.post("/login/login.updatePassword.do",
            {"corpCode":_corpCode, "loginName":_loginName, "password":_password, "newPassword":$("#newpwd").val()},
            function(data){
                var newPwd = $("#newpwd").val();
                $("input[name='password']").val(newPwd);
                $("input[name='swInput']").val(newPwd);
                hideDialog();
                alert('密码修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
            });
    }
}

function updatePwdForCcmi(){
    //debugger;
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = getPwdByIndexPage();

    _password = $.trim(_password);

    if(checkNewPass() && checkConfirmPass() && $("#userLicense").is(":checked")){
        $.post("/login/login.updatePassword.do",
            {"corpCode":_corpCode, "loginName":_loginName, "password":_password, "newPassword":$("#newpwd").val()},
            function(data){
                var newPwd = $("#newpwd").val();
                $("input[name='password']").val(newPwd);
                $("input[name='swInput']").val(newPwd);
                hideDialog();
                alert('密码修改成功,请点击"确定"按钮进入平台!');
                $("#continueLogin").val(true);
                check();
                /*	$("#form-login").attr('onsubmit','').submit();*/
            });
    }
}

function updatePasswordPage(){
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);
    $.post("/login/login.updatePasswordPage.do",{"corpCode":_corpCode},function(data){
        showDialog('修改密码', data, 'updatepwdcss');
    });
}



function completeMessage(data) {
    // 加载日期组件样式
    var base = document.createElement('link'),
        clean = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    base.rel = clean.rel = "stylesheet";
    base.type = clean.type = "text/css";
    head.appendChild(base);
    head.appendChild(clean);
    base.href = 'css/base.css';
    clean.href = 'css/clean.css';
    // 加载日期组件
    var plugins = ['/webos/js/datepicker/js/datepicker_CN.js'];
    require(plugins, function(){
        showDialog('完善个人信息', data, 'completeMessage');

        var $birthDay =  $('#birthDay');
        var $workTime =   $('#workTime');

        $birthDay.DatePicker({
            mode: 'single',
            position: 'right',
            onAfterShow:  function(picker){
                $(picker).css({zIndex: 200});
            },
            onBeforeShow: function(el){
                if($birthDay.val()){
                    var date = $birthDay.val().replace(/-/g, '/');
                    $birthDay.DatePickerSetDate(date, true);
                }
            },
            onChange: function(date, el) {
                var day =  date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                var month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
                $(el).val(date.getFullYear() + '-' + month + '-' + day);
                $(el).DatePickerHide();
                checkNotNull('birthDay', '生日');
            }
        });

        $workTime.DatePicker({
            mode: 'single',
            position: 'right',
            onAfterShow:  function(picker){
                $(picker).css({zIndex: 200});
            },
            onBeforeShow: function(el){
                if($workTime.val()){
                    var date = $workTime.val().replace(/-/g, '/');
                    $workTime.DatePickerSetDate(date, true);
                }
            },
            onChange: function(date, el) {
                var day =  date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                var month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
                $(el).val(date.getFullYear() + '-' + month + '-' + day);
                $(el).DatePickerHide();
                checkNotNull('workTime', '入行时间');
            }
        });

        _provinceData();
    });
}

function checkNeedSecurityCode(){
    $.ajax({
        type: "POST",
        url: "/login/login.checkNeedSecurityCode.do",
        async: false,
        dataType: "json",
        success: function (data) {
            if(data && data.message=="needSecurityCode"){
                appendSecurityCode();
                $('.identifyingCode').slideDown(300);
            }
        }
    });
}

function appendSecurityCode() {
    var $outFrame = $(".outFrame");
    $outFrame.css("background-image","url(image/larger_imgV3.jpg)");
    $outFrame.css("background-position","0px 48px");
    $outFrame.css("height","610px");
    $(".copyright_box").css("padding-top","610px");

    $('input[type="submit"]').parent().parent().before('<tr id="security_code_panel"><td>验证码&nbsp;</td><td><input type="text" id="securityCode" name="securityCode" class="inputer yzminputer" value=""/><img src="login.securityCode.do" class="yzmImg" id="validateCodeImg"/><a href="javascript:void(0);" id="refreshCode" style="margin-left:5px;">看不清?</a></td></tr>');
    $("#refreshCode").click(function(){{
        $("#validateCodeImg").attr("src","login.securityCode.do?date="+new Date().getTime());
    }});
}

var submit_ = true;
function check() {
    if (!submit_) {
        return;
    }
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    _corpCode = $.trim(_corpCode);

    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _loginName = $.trim(_loginName);

    var _password = $('#password').val() || $("input[name='password']").val() || '';

    var _hyperEspCode = $('#swInput').val() || $("input[name='swInput']").val() || '';

    var hasSecurityCodeInput = $("#securityCode").is("input") || $("input[name='securityCode']").is("input");

    var _securityCode = $('#securityCode').val() || $("input[name='securityCode']").val() || $('#identifyingCode').val() || '';
    _securityCode = $.trim(_securityCode);

    var _returnUrl = $('#returnUrl').val() || $("input[name='returnUrl']").val() || '';
    var _courseId = $('#courseId').val() || $("input[name='courseId']").val() || '';
    //因为个性化登录包中都为password而这里需要进行一个加密，直接将password值付给_hyperEspCode，进行加密
    _hyperEspCode = _hyperEspCode==''?_password:_hyperEspCode;

    if(_corpCode == '') {
        if ($("#corpCode").length > 0) {
            $("#corpCode").focus();
        }
        else {
            $("input[name='corpCode']").focus();
        }
        if ($("#error").length > 0) {
            $("#error").html("请输入正确的登录信息!");
        }
        else {
            alert("请输入正确的登录信息!");
        }

        return false;
    }else if(_loginName == ''){
        if ($("#loginName").length > 0) {
            $("#loginName").focus();
        }
        else {
            $("input[name='loginName']").focus();
        }
        if ($("#error").length > 0) {
            $("#error").html("请输入正确的登录信息!");
        }
        else {
            alert("请输入正确的登录信息!");
        }
        return  false;
    }else if(_password == '' &&($("#password").length > 0 || $("input[name='password']") > 0)) {
        if ($("#password").length > 0) {
            $("#password").focus();
            pleaseInputCorrectInfo();
            return false;
        } else if($("input[name='password']") > 0) {
            $("input[name='password']").focus();
            pleaseInputCorrectInfo();
            return false;
        }

    }else if(hasSecurityCodeInput && _securityCode==''){// 如果存在验证码输入框 则判断是否输入验证码
        if ($("#securityCode").length > 0) {
            $("#securityCode").focus();
        }
        else {
            $("input[name='securityCode']").focus();
        }
        if ($("#error").length > 0) {
            $("#error").html("请输入验证码!");
        }
        else {
            alert("请输入验证码!");
        }
        return false;
    }else if(_hyperEspCode == '' && ($("#swInput").length > 0 || $("input[name='swInput']").length > 0)) {
        if ($("#swInput").length > 0) {
            $("#swInput").focus();
            pleaseInputCorrectInfo();
            return false;
        } else if($("input[name='swInput']").length > 0){
            $("input[name='swInput']").focus();
            pleaseInputCorrectInfo();
            return false;
        }

    }else{
        $("#error").html("");
        submit_ = false;
        md5Password = false;
        if(_hyperEspCode && _hyperEspCode != '' && window.BASE64){
            $.ajax({
                type:"POST",
                url:"/login/login.passwordMd5.do",
                async:false,
                data:{"corpCode":_corpCode},
                dataType:"json",
                success:function (data) {
                    if (data){
                        md5Password=true;
                        _hyperEspCode = md5(_hyperEspCode);
                    }else {
                        _hyperEspCode = window.BASE64.encoder(_hyperEspCode);
                    }
                }
            });
        }

        var nead2Encryption = nead2EncryptionCorp(_corpCode);
        if(nead2Encryption){_hyperEspCode = encrypt(_hyperEspCode+'#'+new Date().getTime());}
        _password = '';
        $.ajax({
            type: "POST",
            url: "/login/login.ajaxLogin.do",
            async:false,
            data:   {"corpCode": _corpCode, "loginName":_loginName, "password":_password,"returnUrl":_returnUrl,"courseId":_courseId,"securityCode":_securityCode, "continueLogin":$("#continueLogin").val(), "hyperEspCode":_hyperEspCode,"md5Password":md5Password,"loginAuthAgain":globLoginAuthAgain},
            dataType:"json",
            success: function(data){
                submit_ = true;
                globCorpCode = _corpCode;
                if (data && data.state == "E") {
                    update_submit = true;
                    // 微信扫码认证登录
                    if(data.message == 'MUST_WX'){
                        $.post("/biz-oim/wxAuth/getUrl.do",{
                            url: '',
                            userId: data.userId,
                            corpCode: _corpCode
                        },function(res){
                            console.log(res);
                            window.location.href = res.bizResult;
                        });
                        return;
                    }
                    // app扫码验证登录
                    if(data.message == 'MUST_YSF'){
                        window.location.href = window.location.protocol + '//' + data.host + '/login/newLogin/middleJump.html?veeApp=true&returnUrl=' + _returnUrl + '&userId=' + data.userId + '&host=' + window.location.origin;
                        return;
                    }
                    if ('gmcc' ==_corpCode && data.needSecurityCode =='t') {
                        $('.identifyingCode').slideDown(300);
                    }
                    var message = data.message;
                    if (message == "isExists") {
                        loginDialog();
                        $('.btn-primary').focus();
                        return;
                    } else if (message == 'ConOnlineOfCloudStudy') {
                        var _html = '您的帐号已在云端学习登录。<br />'
                            + '如果这不是您本人的操作，那么请<font color="#0055CC">&nbsp;继续登录&nbsp;</font>并及时修改密码。<br />'
                            + '如有疑问请联系管理员，谢谢！'
                            + '<div class="ctl-buttons">'
                            + '  <input type="button" class="btn-primary" onclick="ajaxContinueLogin(this)" value="继续登录">'
                            + '  <input type="button" class="btn" onclick="hideDialog()" value="取消登录">'
                            + '</div>';
                        showDialog('系统提示', _html, 'prompt');
                        $('.btn-primary').focus();
                        return;
                    }else if (message == 'WECHAT') {
                        var _html = '您的帐号已在微信端登录。<br />'
                            + '如果这不是您本人的操作，那么请<font color="#0055CC">&nbsp;继续登录&nbsp;</font>并及时修改密码。<br />'
                            + '如有疑问请联系管理员，谢谢！'
                            + '<div class="ctl-buttons">'
                            + '  <input type="button" class="btn-primary" onclick="ajaxContinueLogin(this)" value="继续登录">'
                            + '  <input type="button" class="btn" onclick="hideDialog()" value="取消登录">'
                            + '</div>';
                        showDialog('系统提示', _html, 'prompt');
                        $('.btn-primary').focus();
                        return;
                    }else if (message == "changePwd") {
                        if(_corpCode == 'dpcs'){
                            $.post("/login/login.updatePasswordForDpcsPage.do",{"corpCode":_corpCode},function(data){
                                showDialog('修改密码', data, 'updatepwdcss');
                            });
                        }else{
                            $.post("/login/login.updatePasswordPage.do",{"corpCode":_corpCode},function(data){
                                showDialog('修改密码', data, 'updatepwdcss');
                            });
                        }


                        return;
                    }else if (message == "passwordTooSimple"){
                        $.post("/login/login.updatePasswordPageV5ToUnionpay.do?corpCode="+_corpCode+"&_="+(new Date().getTime()),function(data){
                            $(document.loginForm).removeClass('zoom-in').addClass('zoom-out');
                            $('#dialogBox').empty().html(data).removeClass('zoom-out').addClass('zoom-in').show();
                            if( whetherIE === true){
                                ieAnimate.zoomOut();
                                ieAnimate.zoomIn();
                            }
                        });
                    }else if (message == "weakPasswordForcedModify"){  //弱密码强制修改密码
                        $.post("/login/login.updateResetPasswordPage.do?corpCode="+_corpCode,function(data){
                            showDialog(getI18nValue('login.change.password','修改密码'), data, 'updatepwdcss');
                            filterTplI18n(null);
                            $("#updatePwdBtn").val(getI18nValue("login.save","保存"));
                        });
                    } else if (message == "firstLogin") {
                        var corpCode= _corpCode;
                        if(corpCode == "gmacsaicms" ){
                            $.post("/login/login.confidentialityAgreement.do",function(data){
                                showDialog('保密协议', data, 'agreementcss');
                                //保密协议倒计时
                                clearTimeout(window.login_scr_tmeout);
                                window.login_scr_tmeout = setTimeout(agreementSetTime, 1000);
                                var count = 30;
                                function agreementSetTime() {
                                    count--;
                                    if (count == 0) {
                                        clearTimeout(window.login_scr_tmeout);
                                        //隐藏**秒
                                        $('.timeout').css('display', 'none');
                                        //变成可点击样式
                                        $('.enablebtn').removeClass('disabled').removeAttr('disabled');
                                    } else {
                                        window.login_scr_tmeout = setTimeout(agreementSetTime, 1000);
                                        $('.timeout i').text(count);
                                    }
                                }

                            });
                        }
                        //  瑞声达第一次登陆完善信息
                        else if (corpCode.toLowerCase() == "htf" || corpCode.toLowerCase() == "dev.com"|| corpCode.toLowerCase() == "2012629"|| corpCode.toLowerCase() == "liuyue"
                            || corpCode.toLowerCase() == "kmyuan77" || corpCode.toLowerCase() == "markyuan77"){

                            var formData = {"corpCode":_corpCode, "loginName":_loginName, "password":getPwdByIndexPage()};
                            $.post("/login/login.completeMessagePage.do", formData, function(data){
                                completeMessage(data);
                            });
                        }else if(corpCode == "dpcs"){
                            $.post("/login/login.updatePasswordForDpcsPage.do",function(data){
                                showDialog('修改密码', data, 'updatepwdcss');
                            });
                        }else{
                            //添加二次校验逻辑
                            if (data.loginAuthAgain == 'true' && _loginName != 'admin'){
                                if (null == data.loginAuthAgainPhone || data.loginAuthAgainPhone == '' || data.loginAuthAgainPhone == undefined){
                                    alert('手机号未录入，无法登录，请联系管理员。');
                                } else{
                                    $.post("/login/login.loginAuthAgainMobile.do?loginAuthAgainPhone="+data.loginAuthAgainPhone+"&corpCode="+_corpCode,function(data){
                                        showDialog('双重身份认证', data, 'sendMobilecss');
                                        filterTplI18n(null);
                                    });
                                    loginAuthAgainType = 'firstLogin';
                                }
                            }else{
                                $.post("/login/login.updatePasswordPage.do",{"corpCode":_corpCode},function(data){
                                    showDialog('修改密码', data, 'updatepwdcss');
                                });
                            }
                        }
                        return;
                    }else if(message == "firstLoginUpdateLoginName"){
                        $.post("/login/login.updatePasswordAndLoginNamePage.do",function(data){
                            showDialog('修改用户名密码', data, 'updatepwdloginnamecss');
                        });
                    } else if(message == "updateLoginName"){
                        $.post("/login/login.updateLoginNamePage.do",function(data){
                            showDialog('修改用户名', data, 'updateloginnamecss');
                        });
                    } else if (message == "confirmForDou") {
                        $.post("/login/login.toConfirmForDou.do", function (data) {
                            showDialog('确认信息', data, 'confirmdouinfocss');
//                            $.vfdialog({
//                                title: '确认信息',
//                                cont: data,
//                                cls: 'updateloginnamecss',
//                                sureText: '确定',
//                                cancelText: '取消',
//                                onSure:function(){},
//                                onCancel:function(){}
//                            })
                        });
                    } else if (message == "confirmForTsf") {
                        $.post("/login/login.toConfirmForTsf.do", function (data) {
                            showDialog('确认信息', data, 'confirmdouinfocss');
//                            $.vfdialog({
//                                title: '确认信息',
//                                cont: data,
//                                cls: 'updateloginnamecss',
//                                sureText: '确定',
//                                cancelText: '取消',
//                                onSure:function(){},
//                                onCancel:function(){}
//                            })
                        });
                    } else if (message == "updateUserInfoAndPwd") {
                        $.post("/login/login.updateUserInfoAndPwdPage.do",{"corpCode": _corpCode, "loginName":_loginName, "password":getPwdByIndexPage()},function(data){
                            showDialog('修改信息', data, 'updateUserInfoAndPwdcss');
                            var positionId = $("#positionId").val();
                            _initPosition(positionId);
                        });

                    } else if(message == "loginAuthAgainSuccess"  && _loginName != 'admin'){
                        if (null == data.loginAuthAgainPhone || data.loginAuthAgainPhone == '' || data.loginAuthAgainPhone == undefined){
                            alert('手机号未录入，无法登录，请联系管理员。');
                        } else{
                            $.post("/login/login.loginAuthAgainMobile.do?loginAuthAgainPhone="+data.loginAuthAgainPhone+"&corpCode="+_corpCode,function(data){
                                showDialog('双重身份认证', data, 'sendMobilecss');
                                filterTplI18n(null);
                            });
                            loginAuthAgainType = 'loginAuthAgainSuccess';
                        }
                    }else if(message == "updateUserInfo"){
                        $.post("/login/login.updateUserInfoPage.do",{"corpCode": _corpCode, "loginName":_loginName, "password":getPwdByIndexPage()},function(data){
                            showDialog('修改信息', data, 'updateUserInfocss');
                            var positionId = $("#positionId").val();
                            _initPosition(positionId);
                        });
                    }else if(message == "updateUserInfoForKuaiji"){
                        $.vfdialog({
                            name:"updateUserInfoForKuijiVfDialog",
                            title:"填写信息",
                            url:"/login/login.toUpdateUserInfoForKuaiji.do",
                            urlParam:{"corpCode": _corpCode, "loginName":_loginName, "password":getPwdByIndexPage()},
                            width:'550',
                            zindex:20,
                            header:false,
                            footer: false,
                            urlAfter: function () {
                                var $date = $("input[data-type='date']");
                                var length = $date.length;
                                if (length > 0) {
                                    for (var i = 0; i < length; i++) {
                                        var id = $($date[i]).attr("id");
                                        laydate({
                                            format: 'YYYY-MM-DD',
                                            elem: '#' + id
                                        });
                                    }
                                }
                                $date = $("input[data-type='dateTime']");
                                length = $date.length;
                                if (length > 0) {
                                    for (var i = 0; i < length; i++) {
                                        var id = $($date[i]).attr("id");
                                        laydate({
                                            istime: true,
                                            format: 'YYYY-MM-DD hh:mm:ss',
                                            elem: '#' + id
                                        });
                                    }
                                }

                                $('#updateUserInfoForKuijiVfDialog').css('top','50px').find('.vfdialog-close').remove();
                            }
                        });

                    }else if(message == "updateResetPassword"){
                        if (data.loginAuthAgain == 'true'  && _loginName != 'admin'){
                            if (null == data.loginAuthAgainPhone || data.loginAuthAgainPhone == '' || data.loginAuthAgainPhone == undefined){
                                alert('手机号未录入，无法登录，请联系管理员。');
                            } else{
                                $.post("/login/login.loginAuthAgainMobile.do?loginAuthAgainPhone="+data.loginAuthAgainPhone+"&corpCode="+_corpCode,function(data){
                                    showDialog('双重身份认证', data, 'sendMobilecss');
                                    filterTplI18n(null);
                                });
                                loginAuthAgainType = 'updateResetPassword';
                            }
                        }else{
                            $.post("/login/login.updateResetPasswordPage.do?corpCode="+_corpCode,function(data){
                                showDialog('修改密码', data, 'updatepwdcss');
                            });
                        }
                    } else if(message == "dfpeugeot-cs-completeUserInfo"){
                        loadScript("js/cerm/jquery.vfdialog.js");
                        $.vfdialog('iframe',{
                            cls:'login-complete-info-iframe',
                            name:"dfpeugeot-cs-complete-info",
                            title:"请完善个人信息",
                            iframeUrl:"/login/html/dfpeugeotcs/dfpeugeotcs.completeInfoForJDPPage.do?corpCode={corpCode}&loginName={loginName}".replace('{corpCode}',_corpCode).replace('{loginName}',encodeURI(_loginName)),
                            width:'700',
                            height:'500',
                            footer: false
                        });

                    } else if(message == "jdp-idCardInputAndWorkPic-completeUserInfo"){
                        loadScript("js/cerm/jquery.vfdialog.js");
                        $.vfdialog('iframe',{
                            cls:'login-complete-info-iframe',
                            name:"jdp-idCardInputAndWorkPic-completeUserInfo",
                            title:"请完善个人信息",
                            iframeUrl:"/login/html/dfpeugeotcs/dfpeugeotcs.completeIdCardInputAndWorkPicInfoForJDPPage.do?corpCode={corpCode}&loginName={loginName}".replace('{corpCode}',_corpCode).replace('{loginName}',encodeURI(_loginName)),
                            width:'700',
                            height:'500',
                            footer: false
                        });

                    } else if(message == "fastLogin") {
                        window.location.href = '/login/html/fast/fast.fastLogin.do?corpCode={corpCode}&loginName={loginName}'.replace('{corpCode}',_corpCode).replace('{loginName}',encodeURI(_loginName));
                        return;
                    } else {
                        if(data.needSecurityCode && data.needSecurityCode==="t" && !hasSecurityCodeInput){
                            //$("#security_code_panel").css("display","");
                            appendSecurityCode();
                        }

                        $("#validateCodeImg").attr("src","login.securityCode.do?date="+new Date().getTime());
                        $("#validateCode").val('');
                        if ($('#dialog').length > 0) {
                            hideDialog();
                        }
                        if ($("#error").length > 0) {
                            if ("hxpxw.net" == _corpCode && message.indexOf("f:") == 0) {
                                var newMessage = message.replace("f:", "");
                                alert(newMessage);
                            } else {
                                $("#error").html(message);
                            }
                        }
                        else {
                            alert(message);
                        }
                        return;
                    }
                }
                if (data && data.state == "S"){

                    if ('gmcc' ==_corpCode && data.needSecurityCode =='t') {
                        $('.identifyingCode').slideDown(300);
                    }
                    var decodeTargetUrl = decodeURIComponent(data.returnUrl);
                    if("meten"==_corpCode&&
                        (decodeTargetUrl.indexOf('/os/html/task/todayTask.index.do') > -1 ||
                            decodeTargetUrl.indexOf('/os/html/deskTop.init.do') > -1  ||
                            decodeTargetUrl.indexOf('/os/html/index.init.do')>-1)){
                        window.location.href = '/res/html/portals/meten.index.do';
                        return;
                    }
                    if ("cscec5" === _corpCode && (decodeTargetUrl.indexOf('/os/html/task/todayTask.index.do') > -1 ||
                        decodeTargetUrl.indexOf('/os/html/deskTop.init.do') > -1 ||
                        decodeTargetUrl.indexOf('/os/html/index.init.do') > -1)) {
                        window.location.href = '/cus/build/user/index?v=' + new Date().getTime();
                        return;
                    }
                    if ("xlzd" === _corpCode && (decodeTargetUrl.indexOf('/os/html/task/todayTask.index.do') > -1 ||
                        decodeTargetUrl.indexOf('/os/html/deskTop.init.do') > -1 ||
                        decodeTargetUrl.indexOf('/os/html/index.init.do') > -1)) {
                        window.location.href = '/cus/build/user/homeIndex?v=' + new Date().getTime();
                        return;
                    }
                    if("ccdc"==_corpCode||"chinabondneibu"==_corpCode||"daimler"==_corpCode){
                        window.location.href = '/os/html/deskTop.init.do';
                        return;
                    }
                    if("sumec"==_corpCode&&
                        (decodeTargetUrl.indexOf('/os/html/task/todayTask.index.do') > -1 ||
                            decodeTargetUrl.indexOf('/os/html/deskTop.init.do') > -1  ||
                            decodeTargetUrl.indexOf('/os/html/index.init.do')>-1)){
                        window.location.href = '/res/html/portals/meten.indexSmd.do';
                        return;
                    }
                    if(data.enterOsVersion === "5.0"){
                        var isOldIE = navigator.appName == "Microsoft Internet Explorer"
                            && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 9;
                        if (isOldIE &&
                            (decodeTargetUrl.indexOf('/os/html/task/todayTask.index.do') > -1 ||
                                decodeTargetUrl.indexOf('/os/html/deskTop.init.do') > -1  ||
                                decodeTargetUrl.indexOf('/os/html/index.init.do')>-1)) {
                            alert("为了您更好的体验新版桌面，请使用ie9+，chrome，firefox，safari等高级浏览器.\n点击【确认】进入旧版桌面");
                            window.location.href = '/os/html/index.init.do?goV4Desk=true';
                            return;
                        }

                        //如果returnUrl是老板桌面就跳转到"今日任务页面"
                        if(!isOldIE && decodeTargetUrl.indexOf('/os/html/index.init.do')>0){
                            if("cajc"==_corpCode||"lt1"==_corpCode||"litao1"==_corpCode){
                                window.location.href = '/os/html/deskTop.init.do';
                                return;
                            }else {
                                window.location.href = '/os/html/task/todayTask.index.do';
                                return;
                            }
                        }

                        window.location.href = data.returnUrl;
                        return;
                    }else {
                        window.location.href = data.returnUrl;
                        return;
                    }
                }
                if(data && data.state == 'VCE'){
                    if ('gmcc' ==_corpCode && data.needSecurityCode =='t') {
                        $('.identifyingCode').slideDown(300);
                    }
                    if('gmcc'== _corpCode) {
                        alert(data.message);
                    }else {
                        if(data.needSecurityCode && data.needSecurityCode==="t" && !hasSecurityCodeInput){
                            //$("#security_code_panel").css("display","");
                            appendSecurityCode();
                        }

                        $("#error").html(data.message);
                        $("#validateCodeImg").attr("src","login.securityCode.do?date="+new Date().getTime());
                        $("#validateCode").val('');
                        $("#validateCode").focus();
                    }
                }
                if ('gmcc' ==_corpCode && data.needSecurityCode =='t') {
                    $("#validateCodeImg").attr("src","login.securityCode.do?date="+new Date().getTime());
                }
            },
            error:function() {
                submit_ = true;
                update_submit = true;
                if ($(".btn-primary").length > 0) {
                    $(".btn-primary").attr("disabled", false);
                }
                if ($('#dialog').length > 0) {
                    hideDialog();
                }
                if ($("#error").length > 0) {
                    $("#error").html("网络连接失败！");
                }
                else {
                    alert("网络连接失败！");
                }
            }
        });
        return false;
    }
}
// 手机号码验证
function checkPhone() {
    $("#mobileNum_span").html("");
    $('#mobileNumSpan').removeClass('hinters').removeClass('hright').removeClass('hwrong');
    // var REG = /^1[3|4|5|8][0-9]\d{4,8}$/;
    var REG = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
    var mobileNum = $("#phone").val();
    if ($.trim(mobileNum) == "" ){
        $("#mobileNum_span").html("移动电话不能为空");
        $('#mobileNumSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    if (!REG.test(mobileNum)) {
        $("#mobileNum_span").html("移动电话格式不正确");
        $('#mobileNumSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    return true;
}

function checkEmail() {
    $("#email_span").html("");
    $('#emailSpan').removeClass('hinters').removeClass('hright').removeClass('hwrong');
    var REG = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    var email = $("#email").val();
    if ($.trim(email) == "" ){
        $("#email_span").html("邮箱不能为空");
        $('#emailSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    if (!REG.exec(email)) {
        $("#email_span").html("邮箱格式不正确");
        $('#emailSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    return true;
}

function checkNotNull(id, message) {
    $("#" + id + "_span").html("&nbsp;");
    $("#" + id + "Span").removeClass('hinters').removeClass('hright').removeClass('hwrong');
    var agency = $("#" + id).val();
    if ($.trim(agency) == "" ){
        $("#" + id + "_span").html(message + "不能为空");
        $("#" + id + "Span").removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    var r = new RegExp("^[1-2]\\d{3}-(0?[1-9]||1[0-2])-(0?[1-9]||[1-2][0-9]||3[0-1])$");
    if(id=='workTime'||id=='birthDay'){
        if(!r.test(agency)){
            $("#" + id + "_span").html(message + "填写数据格式有误");
            $("#" + id + "Span").removeClass('hinters').removeClass('hright').addClass('hwrong');
            return false;
        }
    }
    return true;
}

function checkNewPass2() {
    var f = checkNotNull("newpwd", "新密码");
    if (!f) {
        return false;
    }
    var newpwd = $("#newpwd").val();
    var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
    var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
    _corpCode = $.trim(_corpCode);
    _loginName = $.trim(_loginName);
    var isSuccess = false;
    var nead2Encryption = nead2EncryptionCorp(_corpCode);
    if(nead2Encryption){_loginName = encrypt(_loginName); newpwd = encrypt(newpwd);}
    $.ajax({
        url:"login.validatePassword.do",
        data: {"corpCode":_corpCode, "loginName": _loginName,"password":newpwd},
        async:false,
        type: "POST",
        success: function(msg){
            if(msg != null &&  msg != ""){
                isSuccess = false;
                $("#newpwd_span").html(msg.replace("!",""));
                $("#newpwdSpan").removeClass('hinters').removeClass('hright').addClass('hwrong');
                return;
            }else if(msg == ""){
                isSuccess = true;
            }
        }
    });
    return isSuccess;
}
function checkConfirmPass2() {
    var f = checkNotNull("confirmpwd", "确认密码");
    if (!f) {
        return false;
    }

    var newpwd = $("#newpwd").val();
    var confirmpwd = $("#confirmpwd").val();
    if(newpwd != confirmpwd){
        $("#confirmpwd_span").html('两次密码输入不一致');
        $('#confirmpwdSpan').removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    return true;
}

function checkProvice(){
    $("#provice_span").html("&nbsp;");
    $("#proviceSpan").removeClass('hinters').removeClass('hright').removeClass('hwrong');
    var provice = $("#provice" ).val();
    if ($.trim(provice) == "" ){
        $("#provice_span").html("请选择省份");
        $("#proviceSpan").removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    return true;
}

var update_submit = true;
function updateMessage() {
    if (!update_submit) {
        return;
    }
    var f_1 = checkEmail();
    var f_2 =  checkPhone();
    var f_3 = checkNotNull('agency', '单位信息');
    var f_4 = checkProvice();
    var f_5 =  checkNotNull('address', '联系地址');
    var f_6 =  checkNotNull('workTime', '入行时间');
    var f_7 =  checkNotNull('birthDay', '出生日期');
    var f_8 = checkNewPass2();
    var f_9 = checkConfirmPass2();
    var f_10 = checkOtherInfo();
    var f_11 = checkNotNull('guestCode', '客户代码');
    if (f_1 && f_2 && f_3 && f_4 && f_5 && f_6 && f_7 && f_8 && f_9 && f_10 && f_11) {
        var _corpCode = $('#corpCode').val() || $("input[name='corpCode']").val() || '';
        _corpCode = $.trim(_corpCode);

        var _loginName = $('#loginName').val() || $("input[name='loginName']").val() || '';
        _loginName = $.trim(_loginName);

        var _password = getPwdByIndexPage();

        var _newPassword =   $("#newpwd").val()  || $("input[name='newpwd']").val() || '';

        var data = $("#updateMsgFrm").serialize();


        data += "&corpCode=" + _corpCode;
        data += "&password=" + _password;
        data += "&loginName=" + _loginName;
        data += "&newPassword="+ _newPassword;
        update_submit = false;
        $.ajax({
            url: '/login/login.updateUserMessage.do',
            type:'post',
            data:data,
            success: function(req) {

                if (req.state == "S"){
                    $("#continueLogin").val(true);
                    if ($("#password").length > 0) {
                        $("#password").val($("#newpwd").val());
                        $("#swInput").val($("#newpwd").val());
                    }
                    else {
                        $("input[name='password']").val($("#newpwd").val());
                        $("input[name='swInput']").val($("#newpwd").val());
                    }
                    check();
                }
                else {
                    update_submit = true;
                    alert(req.message);
                }
            },
            error:function(){
                update_submit = true;
                alert("网络异常");
            }
        });
    }
}
function checkOtherInfo(){
    var newpwd = $("#newpwd").val();
    newpwd = $.trim(newpwd);
    var email = $("#email").val();
    email = $.trim(email);
    var mobileNum = $("#phone").val();
    mobileNum = $.trim(mobileNum);

    if(newpwd == email){
        $("#newpwd_span").html("密码不能和邮箱相同");
        $("#newpwdSpan").removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    if(newpwd == mobileNum){
        $("#newpwd_span").html("密码不能和手机号相同");
        $("#newpwdSpan").removeClass('hinters').removeClass('hright').addClass('hwrong');
        return false;
    }
    return true;
}

var getParam = function (key) {
    var reg = new RegExp('(^|\\?|&)' + key + '=([^&]*)(\\s|&|$)', 'i');
    if (reg.test(location.href)) {
        return unescape(RegExp.$2.replace(/\+/g, ' '));
    }

    return '';
};


$(function(){

    //loadScriptForI18n();

    // 引用requireJS
    var requireScript = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    head.appendChild(requireScript);
    requireScript.src = '/webos/v2/js/RequireJS/require.js';

    try{
        parent.sendRedirect(true);
    }catch(e){
        //nothing
    }
    if ($("#corpCode").length > 0) {
        $("#corpCode").after("<input type=\"hidden\" id=\"continueLogin\" value=\"false\">");
    } else {
        $("input[name='corpCode']").after("<input type=\"hidden\" id=\"continueLogin\" value=\"false\">");
    }

    if($("#returnUrl").length <= 0){
        $("input[name='corpCode']").before("<input type=\"hidden\" id=\"returnUrl\" name=\"returnUrl\" value=\""+getParam("returnUrl")+"\" />");
    }

    for(var k in $.browser){
        if($.browser[k]===true){
            browser=k;
            $('body').addClass(browser);
        }
    }
    if(browser=='msie'){
        browser+=Math.floor($.browser.version);
        $('body').addClass(browser);
    }else if(navigator.userAgent.indexOf('Mac')>-1){
        $('body').addClass('mac');
    }

    /*if($('#form-login').length>0){
     $('#form-login').attr('action','/login/login.login.do');
     }*/
    if ($("input[id='corpCode'][type='text']").length>0) {
        $("#corpCode").focus();
        $("#corpCode").val('');
    }
    else if($("input[name='corpCode'][type='text']").length>0){
        $("input[name='corpCode']").focus();
        $("input[name='corpCode']").val('');
    }else{
        $("input[name='loginName']").focus();
    }

    if ($("#loginName").length > 0) {
        $("#loginName").val('');
    }
    else {
        $("input[name='loginName']").val('');
    }

    if ($("#password").length > 0) {
        $("#password").val('');
    } else {
        $("input[name='password']").val('');
    }

    if ($("#swInput").length > 0) {
        $("#swInput").val('');
    } else {
        $("input[name='swInput']").val('');
    }

    checkNeedSecurityCode();

    $("#refreshCode").click(function(){{
        $("#validateCodeImg").attr("src","login.securityCode.do?date="+new Date().getTime());
    }});

    /*var requestParameters = getRequestParameters();
    var corpCode = requestParameters['corpCode'];
    var loginName = requestParameters['loginName'];
    var errorMessage = requestParameters['errorMessage'];
    $("#loginName").val(loginName);
    $("#corpCode").val(corpCode);
    $("#error").html(errorMessage);*/

});

var _initPosition = function(positionId){
//岗位树
    jQuery('#userPosition').combotree({
        url:'/login/user.showPositionTree.do',
        init:'dv',
        dvid:positionId,
        dvText:'请选择',
        onSelect:function(d){
            if(!d.id){
                throw "You can't choose category for position";
            }

            if ($(d.target).hasClass("treenode-nodeType-POSITION_CATEGORY") ){
                throw "You can't choose category for position";
            }

            $("#warnNewPosition").html("");
            $('#newPositionSpan').removeClass('hinters').removeClass('hwrong').addClass('hright');
            jQuery("#positionId").val(d.id);
            jQuery("#positionName").val(d.text);
        }
    });
};

//省数据
var _provinceData = function() {
    $.ajax({
        url: 'js/tbc_province.json',
        dataType: 'json',
        type:'get',
        success: function(d) {
            $("#provice").append("<option value=''>请选择省份</option> ");
            var p_hide = $("#p_hide").val();
            for (var i = 0; i < d.length; i++) {
                if (p_hide == d[i].text)  {
                    $("#provice").append("<option selected value='"+d[i].text+"'>"+d[i].text+"</option> ");
                } else {
                    $("#provice").append("<option value='"+d[i].text+"'>"+d[i].text+"</option> ");
                }
            }
        }
    });
};

function getPwdByIndexPage(){
    var _password = '';
    if($("input[name='swInput']").length > 0 || $("#swInput").length > 0){
        _password = $("#swInput").val() || $("input[name='swInput']").val() || '';
    }else if($("input[name='password']").length > 0 || $("#password").length > 0){
        _password = $("#password").val() || $("input[name='password']").val() || '';
    }

    return _password;
}

function loadScript(url) {
    if($.vfdialog){
        return;
    }

    $.ajax({
        url:url,
        dataType:"script",
        async:false,
        success: function (d) {
            /*var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            document.body.appendChild(script);     */
        }
    });

}

function loadScriptForI18n() {
    var corpCode = $('#corpCode').val() || $("input[name='corpCode']").val();

    if(!corpCode){
        return;
    }

    if(window.i18nData !== undefined){
        return;
    }

    loadScriptWithoutCheck("/login/html/i18n/i18n.getJsI18nHtml.do");

    if(window.i18n !== undefined){
        return;
    }

    loadScriptWithoutCheck("js/i18n.js?v=1.0");

}

function loadScriptWithoutCheck(url) {
    $.ajax({
        url:url,
        dataType:"script",
        async:false,
        success: function (d) {

        }
    });

}

function getRequestParameters() {
    var url = location.search; //获取url中"?"符后的字串
    //alert("Url parameter :"+url);
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i ++) {
            var split = strs[i].split("=");
            theRequest[split[0]]=unescape(split[1]);
        }
    }
    return theRequest;
}


function pwdInputKeyupEventForOld(obj){
    pwdInputKeyupEvent(obj);
}

//获取url参数 新
function getQueryVariable(variable,url){
    // var query = window.location.search.substring(1);
    var query = url.substring(url.indexOf('?') + 1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
// 设置cookie值 微信扫码登陆专用
function setCookieWX(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";" + "path=/;domain=." + window.location.host;
}
function nead2EncryptionCorp(corpCode){

    var result = false;
    $.ajax({
        url: "/login/login.nead2Encryption.do?corpCode="+corpCode,
        async:false,
        type: "GET",
        dataType : "text",
        success: function(data){
            if (data == "true") {
                result=true;
            }else{
                result=false;
            }
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            result = false;
        }
    });
    return result;
}

/*-------------二次验证开始--------------*/
function loginAuthAgainSendCode(){
    _corpCode = globCorpCode;
    var num = $("#loginAuthAgainMobile").val();
    var veeData = {
        corpCode: _corpCode,
        phone: num
    };
    if(isMobile(num)){
        $.ajax({
            type: "POST",
            url: "/login/login.ajaxPhoneLoginValidateCode.do",
            async: false,
            data: veeData,
            dataType:"json",
            success: function(data){
                if (data.state != 'S') {
                    $("#error_msg").html(data.message);
                    $("#error_msg").show();
                    return false;
                } else {
                    var userId = data.message;
                    $("input[name='userId']").val(userId);
                    var obj = $("#sendCode");
                    loginAuthAgainSettime(obj);
                }
            },error:function(){
                $("#error_msg").html("发送失败");
                $("#error_msg").show();
            }
        });
    }else{
        $("#error_msg").html("手机号格式不正确，请联系管理员进行更改！");
        $("#error_msg").show();
    }
}
function loginAuthAgainSettime(obj) { //发送验证码倒计时
    var countdown=120;
    if (countdown == 0) {
        obj.attr('disabled',false);
        obj.html("发送验证码");
        countdown = 120;
        return;
    } else {
        obj.attr('disabled',true);
        obj.html("重新发送(" + countdown + ")");
        countdown--;
    }
    setTimeout(function() {loginAuthAgainSettime(obj) },1000)
}
//提交
function loginAuthAgainSubmitApproval(){
    //校验验证码
    var corpCode = globCorpCode;
    var code = $("#loginAuthAgainCodeId").val();
    if ("" === code || undefined === code) {
        $("#error_msg").html("请输入验证码！");
        $("#error_msg").show();
        return false;
    }
    //校验验证码
    var validate = false;
    $.ajax({
        url:"/login/login.validateCodeV2.do",
        data:{"mobile":$("#loginAuthAgainMobile").val(),"corpCode":corpCode,"code":code},
        async:false,
        success:function(data){
            if (!data.success) {
                $("#error_msg").html(data.message);
                $("#error_msg").show();
                return false;
            } else {
                validate = true;
                if (loginAuthAgainType == 'loginAuthAgainSuccess') {
                    globLoginAuthAgain = 'notClear';
                    loginAuthAgainCancel();
                    check();
                }else if (loginAuthAgainType == 'firstLogin') {
                    globLoginAuthAgain = 'notClear';
                    loginAuthAgainCancel();
                    $.post("/login/login.updatePasswordPage.do",{"corpCode":globCorpCode},function(data){
                        showDialog('修改密码', data, 'updatepwdcss');
                    });
                }else if (loginAuthAgainType == 'updateResetPassword'){
                    globLoginAuthAgain = 'notClear';
                    loginAuthAgainCancel();
                    $.post("/login/login.updateResetPasswordPage.do?corpCode="+globCorpCode,function(data){
                        showDialog('修改密码', data, 'updatepwdcss');
                    });
                }else{
                    $("#error_msg").html("不支持的二次验证方式");
                    $("#error_msg").show();
                }
            }

        }
    })
}
function loginAuthAgainCancel(){
    hideDialog();
}