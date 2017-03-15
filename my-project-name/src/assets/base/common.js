const $ = require('jquery');
const common =  {
        /**
        毫秒转换成 年月日+时分秒 格式的  1970-01-18 07:12:39   
		补0操作： 比如2012-2-2  就会变成    2012-02-02
		使用方法： getMyDate(data[i].creationTime);
         */
        getMyDate(str){  
            var oDate = new Date(str),  
            // oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oTime =this.getzf(oMonth) +'-'+ this.getzf(oDay) +' '+ this.getzf(oHour) +':'+ this.getzf(oMin);//最后拼接时间  
            return oTime;  
        },  
        //补0操作  
        getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        }  

};
module.exports = common;