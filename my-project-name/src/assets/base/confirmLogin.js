import {MessageBox} from 'mint-ui';
/**
 * [alertLogin description] 单点登录弹出提示框
 * @type {Object}
 */
const alertLogin = {
	app:()=>{
		let time =  window.moment().format('HH:mm');
        MessageBox.alert('您的账号于'+time+'在另一台设备登录，如非本人操作，则密码已泄露，建议及时修改密码', '温馨提示', {confirmButtonText : '重新登录'}).then(action => {
          window.location.href = '/#!/login' + '?backUrl=' + encodeURIComponent(window.location.hash.substring(2));
        });
	}
}
module.exports = alertLogin;