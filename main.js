/**
 * [Vue description] 单页面应用spa 组件采用异步加载
 * @type {[type]}
 * @author chencong
 */
import Vue  from 'vue';
import Router from 'vue-router';
import moment from 'moment';

//默认引入app.vue
import App from 'components/App.vue';

//use  路由插件
Vue.use(Router);

//引入jquery
const $ = require('jquery');
import urlServer from './base/ajaxurl';

//以下配置为格式化时间戳的方式
if(moment) window.moment = moment;
moment.locale('zh-cn');
/**
 * [description] 格式化时间(时间戳格式)   今天之内 显示 今天  超过今天显示昨天  超过今天显示  MM-DD
 * @param  {String} value){                 let time [description]
 * @return {[type]}          [description]
 */
Vue.filter('sortTimeMD',function(value){
    let time = ''; 
    let valueTime = moment.unix(value).format('YYYY-MM-DD'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM-DD'); //当前年月日
    let oldTime = moment().subtract(1,'day').format('YYYY-MM-DD');//昨天的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '今天';
    }else if(moment(oldTime).isSame(valueTime)){
        time = '昨天';
    }else{
        time = moment.unix(value).format('MM-DD');
    }
    return time;
});
/**
 * [description] 格式化时间  （2016-12-26） 今天之内 显示 今天  超过今天显示昨天  超过今天显示  MM-DD
 * @param  {String} value){                 let time [description]
 * @return {[type]}          [description]
 */
Vue.filter('sortYDMtimeDM',function(value){
    let time = '';
    let valueTime = moment(value).format('YYYY-MM-DD'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM-DD'); //当前年月日
    let oldTime = moment().subtract(1,'day').format('YYYY-MM-DD');//昨天的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '今天';
    }else if(moment(oldTime).isSame(valueTime)){
        time = '昨天';
    }else{
        time = moment(value).format('MM-DD')
    }
    return time;
});
/**
 * [description] 格式化时间  （2016-12-26） 今天之内 显示 今天  超过今天显示昨天  超过今天显示  YYYY-MM-DD
 * @param  {String} value){                 let time [description]
 * @return {[type]}          [description]
 */
Vue.filter('sortYDMtimeYDM',function(value){
    let time = '';
    let valueTime = moment(value).format('YYYY-MM-DD'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM-DD'); //当前年月日
    let oldTime = moment().subtract(1,'day').format('YYYY-MM-DD');//昨天的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '今天';
    }else if(moment(oldTime).isSame(valueTime)){
        time = '昨天';
    }else{
        time = moment(value).format('YYYY-MM-DD')
    }
    return time;
});
/**
 * [description] 格式化时间  小时 分钟  HH:mm
 * @param  {[type]} value) {               return moment.unix(value).format('HH:mm');} [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeHM',function(value) {
    return moment.unix(value).format('HH:mm');
});
/**
 * [description] 格式化时间  年月日  YYYY-MM-DD
 * @param  {[type]} value) {               return moment.unix(value).format('YYYY-MM-DD');} [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeYMD',function(value) {
    return moment.unix(value).format('YYYY-MM-DD');
});

/**
 * [description]  年月日   YYYY年MM月DD日
 * @param  {[type]} value) {               return moment.unix(value).format('YYYY年MM月DD日');} [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeYmd',function(value) {
    return moment.unix(value).format('YYYY年MM月DD日');
});

/**
 * [description] 格式化时间  年月日  MM-DD HH:mm
 * @param  {[type]} index) {               return moment.unix(value).format('YYYY-MM-DD HH:mm');} [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeMDHM',function(value) {
    return moment.unix(value).format('MM-DD HH:mm');
});
/**
 * [description] 格式化时间  年月日  MM-DD
 * @param  {[type]} index) {               return moment.unix(value).format('YYYY-MM-DD HH:mm');} [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeOnlyMD',function(value) {
    return moment.unix(value).format('MM-DD');
});

/**
 * [description] 格式化时间  年月日  YYYY-MM-DD HH:mm
 * @param  {[type]} index) {               return moment.unix(value).format('YYYY-MM-DD HH:mm');} [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeYYYYMDHM',function(value) {
    return moment.unix(value).format('YYYY-MM-DD HH:mm');
});

/**
 * [description] 格式化时间  返回 今天hh:mm 昨天hh:mm MM-DD HH:mm  
 * @param  {String} value){                 let time [description]
 * @return {[type]}          [description]
 */
Vue.filter('sortTimeCURHM',function(value){
    let time = ''; 
    let valueTime = moment.unix(value).format('YYYY-MM-DD'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM-DD'); //当前年月日
    let oldTime = moment().subtract(1,'day').format('YYYY-MM-DD');//昨天的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '今天' + moment.unix(value).format('HH:mm');
    }else if(moment(oldTime).isSame(valueTime)){
        time = '昨天' + moment.unix(value).format('HH:mm');
    }else{
        time = moment.unix(value).format('MM-DD HH:mm');
    }
    return time;
});


/**
 * [description] 格式化时间  返回 今天 昨天 MM-DD 
 * @param  {String} value){                 let time [description]
 * @return {[type]}          [description]
 */
Vue.filter('sortTimeCURMD',function(value){
    let time = ''; 
    let valueTime = moment.unix(value).format('YYYY-MM-DD'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM-DD'); //当前年月日
    let oldTime = moment().subtract(1,'day').format('YYYY-MM-DD');//昨天的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '今天';
    }else if(moment(oldTime).isSame(valueTime)){
        time = '昨天';
    }else{
        time = moment.unix(value).format('MM-DD');
    }
    return time;
});

/**
 * [description] 格式化时间  返回 今天hh:mm 昨天hh:mm YYYY-MM-DD HH:mm  
 * @param  {String} value){                 let time [description]
 * @return {[type]}          [description]
 */
Vue.filter('sortTimeYCURHM',function(value){
    let time = ''; 
    let valueTime = moment.unix(value).format('YYYY-MM-DD'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM-DD'); //当前年月日
    let oldTime = moment().subtract(1,'day').format('YYYY-MM-DD');//昨天的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '今天' + moment.unix(value).format('HH:mm');
    }else if(moment(oldTime).isSame(valueTime)){
        time = '昨天' + moment.unix(value).format('HH:mm');
    }else{
        time = moment.unix(value).format('YYYY-MM-DD HH:mm');
    }
    return time;
});
/**
 * [description] 格式化时间(2017-02-06) 返回 本月  xx月  
 * @param  {String} value) {               let time [description]
 * @return {[type]}        [description]
 */
Vue.filter('sortTimeMM', function(value) {
    let time = ''; 
    let valueTime = moment(value).format('YYYY-MM'); //格式化时间戳年月日
    let curTime = moment().format('YYYY-MM'); //当前年月日
    //let oldTime = moment().subtract(1,'months').format('YYYY-MM-DD');//上个月的年月日
    if(moment(curTime).isSame(valueTime)){
        time = '本月';
    }else{
        time = moment(value).format('MM') + '月';
    }
    return time;
});

/**
 * [description]  格式化金额 显示方式     
 * @param  {[type]} value [description]  格式化的值
 * @param  {[type]} n     [description]  保留几位小数（默认是两位）
 * @param  {[type]} f){                  let curNum [description] 是否需要格式化 （默认是需要被格式化的）
 * @return {[type]}       [description]
 */
Vue.filter('formatNumber',function(value,n,f){
    let curNum = Number(value);
    let unit = '';
    let symbol = '';
    let renum = '';
    n = n || 2;
    f = f || '1';
    if(curNum != null || curNum != undefined){
        if(curNum >= 0){
            symbol = '';
        }else{
            symbol = '-';
            curNum = Math.abs(curNum);
        }
        if(curNum){
            if(f != '0'){
                if (curNum >= 100000000) {
                    curNum = curNum / 100000000;
                    unit = '亿';
                    renum = curNum.toFixed(n)
                } else if (curNum >= 10000) {
                    curNum = curNum / 10000;
                    unit = '万';
                    renum = curNum.toFixed(n)
                }else if(curNum < 10000){
                    renum = curNum;
                }
            }
        }else{
            // renum = '0.';
            // for(let i = 0; i < n; i++){
            //     renum += '0';
            // }
            renum = '0';
        }
    }
    return symbol + renum + unit;
});
/**
 * [description] 两位小数点
 * @param  {[type]} value){                 var value [description]
 * @return {[type]}          [description]
 */
Vue.filter('twodecimal',function(value){
    if(isNaN(value)){
        return value;
    }else{
        let values=Math.round(parseFloat(value)*100)/100;
        let xsd=values.toString().split(".");
        if(xsd.length==1){
            value=values.toString()+".00";
            return value;
        }
        if(xsd.length>1){
            if(xsd[1].length<2){
            value=values.toString()+"0";
            }
        return value;
        }
    }
});
Vue.filter('seller_type_filter',function(v){
    switch (v){
        case '76':
            return '大宗';
        case '77':
            return '期货';
        case '78':
            return '名家';
        case '79':
            return '投顾';
        case '80':
            return '私募';
        case '81':
            return '卖方';
        case '82':
            return '分析师';
        default:
            return '';
    }
});
/**
 * [description]截取字符字数
 * @param  {[type]} v      [description]
 * @param  {[type]} num){                     if(v.length > num){        return (v.substr(0,num) + '...');    }else{        return v;    }} [description]
 * @return {[type]}        [description]
 */
Vue.filter('substr',function(v,num){//v是传过来需要过滤的值，num是希望截取调的位数
    v = '' + v;
    if(v.length > num){
        return (v.substr(0,num) + '...');
    }else{
        return v;
    }
});

 Vue.filter('twoDecimal',function(v){//返回的数字保留两位小数（如果为1，则显示1.00）
     // console.log('返回的数字为：' + v);
     return Number(v).toFixed(2);
 });

Vue.filter('instructionsFilter',function (value) {//把介绍须知分割出来
    return value.replace(/\|/g,'<br>');
});

Vue.filter('dateFilter',function(v){//把返回的20161230日期，变成2016-12-30格式
    return v.substr(0,4)+ '-' + v.substr(4,2) + '-' + v.substr(-2);
});
Vue.filter('rate_filter',function(v){
    if(v != '--'){
        return v + '%';
    }else{
        return v;
    }
});

/**
 * [description] 格式化 banner 跳转链接
 * @param  {[type]} url) {               return something;} [description]
 * @return {[type]}      [description]
 */
Vue.filter('formatUrl',function(url) {
    let pattern = /(\w+)=(\w+)/ig;
    let parames = {};
    url.replace(pattern, function(a, b, c){
        parames[b] = c;
    });
    let ActId = parseInt(parames.ActId , 10);
    let id =  parseInt(parames.id , 10);
    let path = '';
    switch (ActId) {
        case 11: //热点（首页）
            path = {name:'hot'}
            break;
        case 16: //锦囊详情
            path = {name:'kitsdetail',query:{jn_id:id}};
            break;
        case 17://问股回复（stock_question(问股回复)）
            path = {}
            break;
        case 19://问股（首页）
            path = {}
            break;
        case 21: //股机首页
        case 30:
            path = {name:'guji'};
            break;
        case 25: //股先生首页
            path = {name: 'index'};
            break;
        case 26://           老师详情
            path = {name:'stockHome',query:{seller_id:id}};
            break;
        case 31: //           锦囊列表
            path = {name:'kits'}
            break;
        case 35: //直播提问（我的提问-已回复）
            path = {name:'myQuestion',query:{tabstatus:0}};
            break;
        case 36: //直播回复（问答管理-未回复）
            path = {name:'myQuestion',query:{tabstatus:1}};
            break;
        case 55: //直播回复（问答管理-未回复）
            path = {name:'myQuestion',query:{tabstatus:2}};
            break;
        case 37: //股池首页
            path = {name:'stockpool'};
            break;
        case 38: //直播间列表
            path = {name:'livelist'};
            break;
        case 40: //活动页面
        default:
            // statements_def
            break;
    }
});

//配置路由
const router = new Router({
    saveScrollPostioin: true
});
/**
 * 以下为异步导入vue页面组件
 * 常量必须用 const 声明  且变量名必须为大写
 */
const Index = resolve => require(['components/home/index'], resolve); //首页
const User = resolve => require(['components/user/index'], resolve);  //用户中心
const Login = resolve => require(['components/user/login'], resolve); //用户中心 -> 登录页面
const UserAgreement = resolve => require(['components/user/agreement'], resolve); //用户中心 -> 用户协议
const Kits = resolve => require(['components/kits/kits'], resolve); //锦囊 -> 锦囊列表
const Hot = resolve => require(['components/hot/hot'], resolve); //热点 -> 热点列表
const Stockpool = resolve => require(['components/stockpool/stockpool'],resolve); //股池
const ArticleOne = resolve => require(['components/hot/articleOne'],resolve); //热点正文热点直播模版
const ArticleTwo = resolve => require(['components/hot/articleTwo'],resolve); //热点正文普通模版
const ArticleThree = resolve => require(['components/hot/articleThree'],resolve); //热点正文专题模版
const ArticleFour = resolve => require(['components/hot/articleFour'],resolve); //热点正文多图模版
const StockList = resolve => require(['components/stockList/stockList'],resolve); //股客榜列表
const InvestmentAdviser = resolve => require(['components/stockList/subComponent/investmentAdviser'],resolve); //股客榜列表的投顾
const Other = resolve => require(['components/stockList/subComponent/other'],resolve); //股客榜列表的其他
const StockHome = resolve => require(['components/stockHome/stockHome'],resolve); //股客之家
const Pay = resolve => require(['components/pay/pay'],resolve); //支付
const PayAgreement = resolve => require(['components/pay/pay-agreement'],resolve); //购买协议
const PaySuccess = resolve => require(['components/pay/pay-success'],resolve);//支付成功
const RiskRating = resolve => require(['components/pay/riskRating'],resolve); //风险提示
const PreStockDetail = resolve => require(['components/stockpool/pre-stock-detail'],resolve);//预售股池详情
const NoPreStockDetail = resolve => require(['components/stockpool/no-pre-stock-detail'],resolve);//非预售股池详情
const Findpassword = resolve => require(['components/user/find-password'],resolve);//找回密码
const Kitsdetail = resolve => require(['components/kits/kits-detail'],resolve);//锦囊详情
const Applycertified = resolve => require(['components/PersonalCenter/applyCertified'],resolve);//申请认证
const Invitefriends = resolve => require(['components/PersonalCenter/invitefriends'],resolve);//邀请好友
const GuJi = resolve => require(['components/GuJi/GuJi'],resolve);//股机列表
const TodayPlan = resolve => require(['components/GuJi/todayPlan'],resolve);//今日股机
const HistoryPlan = resolve => require(['components/GuJi/historyPlan'],resolve);//历史股机
const Livelist = resolve => require(['components/live/live'],resolve);//直播列表
const Liveuser = resolve => require(['components/live/live-user'],resolve);//直播用户
const Livetext = resolve => require(['components/live/live-text'],resolve);//直播正文
const Livehistory = resolve => require(['components/live/live-history'],resolve);//直播历史观点
const Livequestion = resolve => require(['components/live/live-question'],resolve);//直播提问
const Livesuccess = resolve => require(['components/live/live-success'],resolve);//问题成功
const GujiDetail = resolve => require(['components/GuJi/GujiDetail'],resolve);//股机详情
const PersonalCenter = resolve => require(['components/PersonalCenter/personalCenter'],resolve);//个人中心首页
const MyOrder = resolve => require(['components/PersonalCenter/myOrder'],resolve);//我的订单
const MyQuestion = resolve => require(['components/PersonalCenter/myQuestion'],resolve);//我的提问
const MyBill = resolve => require(['components/PersonalCenter/myBill'],resolve);//我的账单
const FocusSubscribe = resolve => require(['components/PersonalCenter/focusSubscribe'],resolve);//关注订阅
const PersonalInformation = resolve => require(['components/PersonalCenter/personalInformation'],resolve);//个人信息
const Feedback  = resolve => require(['components/PersonalCenter/feedback'],resolve);//反馈建议
const About = resolve => require(['components/PersonalCenter/about'],resolve);//关于股先生
const SetUp = resolve => require(['components/PersonalCenter/setUp'],resolve);//设置
const Sign = resolve => require(['components/PersonalCenter/sign'],resolve);//签到
const Lost404 = resolve => require(['components/page404/lost404'],resolve);//签到
const ModifyPassword = resolve => require(['components/PersonalCenter/setUp_password'],resolve);//设置  修改密码
const SuccessExplain = resolve => require(['components/PersonalCenter/successExplain'],resolve);//成就说明
const Search = resolve => require(['components/search/search'],resolve); //搜索
const HotInformation = resolve => require(['components/search/hotInformation'],resolve); //搜索热点
const LiveInformation = resolve => require(['components/search/liveInformation'],resolve); //搜索直播

//路由项
router.map({
	'/index':{
        name: 'index',
        title: '股先生',
        component: Index
    },
    '/user':{
    	name: 'user',
    	title: '用户中心',
        islogin: true,
    	component: User
    },
    '/login':{
    	name: 'login',
    	title: '登录页面',
    	component: Login
    },
    '/kits':{
    	name: 'kits',
    	title: '锦囊',
    	component: Kits
    },
	'/hot':{
        name: 'hot',
        title: '热点',
        component: Hot
    },
	'/stockpool':{
		name:'stockpool',
		title:'股池',
		component:Stockpool,
	},
    '/preStockDetail':{
        name:'preStockDetail',
        title:'预售股池详情',
        component:PreStockDetail
    },
    '/noPreStockDetail':{
        name:'noPreStockDetail',
        title:'非预售股池详情',
        component:NoPreStockDetail
    },
    '/articleOne':{
        name:'articleOne',
        title:'热点正文',
        component:ArticleOne
    },
    '/articleTwo':{
        name:'articleTwo',
        title:'热点正文',
        component:ArticleTwo
    },
    '/articleThree':{
        name:'articleThree',
        title:'热点正文',
        component:ArticleThree
    },
    '/articleFour':{
        name:'articleFour',
        title:'热点正文',
        component:ArticleFour
    },
    '/stockList':{
        name:'stockList',
        title:'股客榜',
        component:StockList,
        subRoutes:{
            'investmentAdviser':{
                name:'investmentAdviser',
                title:'投顾',
                component:InvestmentAdviser
            },
            'other':{
                name:'other',
                title:'其他',
                component:Other
            }
        }
    },
    '/stockHome':{
	    name:'stockHome',
        title:'股客之家',
        component:StockHome
    },
    '/pay':{
	    name:'pay',
        title:'支付',
        islogin: true,
        component:Pay
    },
    '/paysuccess':{
        name:'paySuccess',
        title:'支付成功',
        component:PaySuccess
    },
    '/payagreement':{
        name:'payAgreement',
        title:'购买协议',
        component:PayAgreement
    },
    '/riskRating':{
        name:'riskRating',
        title:'风险评估',
        islogin: true,
        component:RiskRating
    },
    '/findpassword':{
        name:'findpassword',
        title:'找回密码',
        component:Findpassword
    },
    '/kitsdetail':{
        name:'kitsdetail',
        title:'锦囊详情',
        component:Kitsdetail
	},
    '/personalCenter':{
	    name:'personalCenter',
        title:'个人中心首页',
        component:PersonalCenter
    },
    '/successExplain':{
        name:'successExplain',
        title:'成就说明',
        component:SuccessExplain
    },
    '/myOrder':{
	    name:'myOrder',
        title:'我的订单',
        islogin: true,
        component:MyOrder
    },
    '/myBill':{
        name:'myBill',
        title:'我的账单',
        islogin: true,
        component:MyBill
    },
    '/myQuestion':{
	    name:'myQuestion',
        title:'我的提问',
        islogin: true,
        component:MyQuestion
    },
    '/focusSubscribe':{
	    name:'focusSubscribe',
        title:'关注订阅',
        islogin: true,
        component:FocusSubscribe
    },
    '/applyCertified':{
        name:'applyCertified',
        title:'申请认证',
        component:Applycertified
    },
    '/invitefriends':{
        name:'invitefriends',
        title:'邀请好友',
        islogin: true,
        component:Invitefriends
    },
    '/personalInformation':{
	    name:'personalInformation',
        title:'个人信息',
        islogin: true,
        component:PersonalInformation
    },
    '/feedback':{
	    name:'feedback',
        title:'反馈建议',
        component:Feedback
    },
    '/about':{
	    name:'about',
        title:'关于股先生',
        component:About
    },
    '/setUp':{
	    name:'setUp',
        title:'设置',
        islogin: true,
        component:SetUp
    },
    '/sign':{
        name:'sign',
        title:'签到',
        component:Sign
    },
    '/lost404':{
        name:'lost404',
        title:'帐号异常',
        component:Lost404
    },
    '/modifyPassword':{
        name:'modifyPassword',
        title:'修改密码',
        component:ModifyPassword
    },
    '/livelist':{
        name:'livelist',
        title:'股客直播',
        component:Livelist
    },
    '/liveuser':{
        name:'liveuser',
        title:'直播用户',
        component:Liveuser
    },
    '/livetext':{
        name:'livetext',
        title:'直播正文',
        component:Livetext,
    },
    '/livehistory':{
        name:'livehistory',
        title:'历史观点',
        component:Livehistory,
    },
    '/livequestion':{
        name:'livequestion',
        title:'直播提问',
        component:Livequestion,
    },
    '/livesuccess':{
        name:'livesuccess',
        title:'提问成功',
        component:Livesuccess,
    },
    '/guji':{
	    name:'guji',
        title:'股机列表',
        component:GuJi,
        subRoutes:{
	        '/todayPlan':{
                name:'todayPlan',
                title:'今日股机',
                component:TodayPlan
            },
            '/historyPlan':{
                name:'historyPlan',
                title:'历史股机',
                component:HistoryPlan
            },
        }
    },
    '/GujiDetail':{
	    name:'GujiDetail',
        title:'股机详情',
        component:GujiDetail,
    },
    '/userAgreement':{
        name: 'userAgreement',
        title: '股先生软件服务协议',
        component: UserAgreement
    },
    '/search':{
        name: 'search',
        title: '搜索',
        component: Search
    },
    '/hotInformation':{
        name:'hotInformation',
        title:'搜索热点',
        component:HotInformation
    },
    '/liveInformation':{
        name:'liveInformation',
        title:'搜索直播',
        component:LiveInformation
    }
});

/**
 * [globalFn description] 全局方法
 * @type {Object}
 */
let globalFn = {
    closeConfirm:()=>{ //关闭弹出层  提示下载APP
       let msgboxcancel = $('body').find('.msgbox-cancel');
        msgboxcancel.length && msgboxcancel.trigger('click'); 
    },
    checkLoginKey:()=>{ //全局轮循 检测用户KEY是否过期  单点登录状态
        let timer = setInterval(()=>{
            if(window.localStorage.member_info){
                let member_info = JSON.parse(window.localStorage.member_info); 
                $.ajax({
                    url: urlServer.ApiUrl + '/index.php?c=seller_question&a=get_notice&route_mark=h5',
                    type: 'get',
                    dataType: 'jsonp',
                    data: {member_id: member_info.member_id, key: member_info.key},
                })
                .done(function(data) {
                    if(data.code == -2){
                        require.ensure([], function () {
                            window.localStorage.removeItem('member_info');
                            let confirmLogin = require('./base/confirmLogin');
                                confirmLogin.app();
                        });
                    }
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    // console.log("complete");
                }); 
            }
        },15000);
    },
    addHandler: function (element, type, handler) { 
        if(element.addEventListener) { 
            element.addEventListener(type, handler, false); 
        }else if(element.attachEvent) { 
            element.attachEvent("on" + type, handler); 
        }else{ 
            element["on" + type] = handler; 
        } 
    } 
};
globalFn.checkLoginKey();
globalFn.addHandler(window, "offline", function () { 
    alert("网络链接失败,请检查您的网络！"); 
});  

//设置路由跳转之前的动作 检测用户是否登录
router.beforeEach(function (transition) {
	window.scrollTo(0, 0);
    let backUrl = transition.to.path;
	if(transition.to.islogin){
		if(window.localStorage){
			window.localStorage.member_info ? transition.next() : transition.redirect({name:'login',query:{backUrl: backUrl}});
		}else{
			alert('浏览器不支持localStorage');
		}
	}else{
		transition.next();
	}
    globalFn.closeConfirm();
});

//设置路由跳转以后更新title  为了解决IOS下微信刷新title  需要使用iframe刷新
router.afterEach(function (transition) {
    if (transition.to.title) {
    	setTimeout(function(){
		    //利用iframe的onload事件刷新页面
		    document.title = transition.to.title;
		    let iframe = document.createElement('iframe');
		    iframe.style.visibility = 'hidden';
		    iframe.style.width = '1px';
		    iframe.style.height = '1px';
		    iframe.onload = function () {
		        setTimeout(function () {
		            document.body.removeChild(iframe);
		        }, 0);
		    };
		    document.body.appendChild(iframe);
		},0);
    }
});

// If no route is matched redirect home
router.redirect({
    '*': '/index',
    '/guji':'/guji/todayPlan',
    '/stockList':'/stockList/investmentAdviser'
});

// Start up our app
router.start(App, 'app');
