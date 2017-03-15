import {MessageBox} from 'mint-ui';
/**
 * [confirmDown description] 下载APP弹出层提示框
 * @type {Object}
 */
const confirmDown = {
    app:(title)=>{
        title = title || '请通过股先生APP查看个股行情';
        MessageBox.confirm('<section class="mint-confirm-section">'+title+'</section>',{confirmButtonText : '下载APP'}).then(action => {
            window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.mrstock.mobile'
        });
    }
};
module.exports = confirmDown;	