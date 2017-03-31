/**
 * @fetch
* */
const baseUrl = '172.10.12'
const ajax = async(type = 'GET', url = '', data = {}, method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;
  if (type == 'GET') {
    let dataStr = '';  // get请求数据拼接
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }
  if(window.fetch && method == 'fetch') {
    let requireConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cros',
      cache: 'force-cache'
    };

    if(type == 'POST') {
      Object.defineProperty(requireConfig, 'body',{
        value: JSON.stringify(data)
      })
    }
    try {
      var response = await fetch(url, requireConfig);
      var responeseJson = await response.json();
    } catch (error) {
      throw new Error(error)
    }
    return responeseJson
  } else {
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest;
    } else {
      requestObj = new ActiveXObject("Microsoft.XMLHTTP");
    }
    let sendData = '';
    if (type == 'POST') {
      sendData = JSON.stringify(data);
    }
    requestObj.open(type, url, true);
    requestObj.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    requestObj.send(sendData);
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.state === 200) {
          let obj = requestObj.response;
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj);
          }
          return obj;
        } else {
          throw new Error(requestObj);
        }
      }
    }
  }

};
export default ajax;
