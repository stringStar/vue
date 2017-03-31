import _regeneratorRuntime from 'babel-runtime/regenerator';
import _typeof from 'babel-runtime/helpers/typeof';
import _JSON$stringify from 'babel-runtime/core-js/json/stringify';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';

var _this = this;

var baseUrl = '172.10.12';
var ajax = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fetch';
    var dataStr, requireConfig, response, responeseJson, requestObj, sendData;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = type.toUpperCase();
            url = baseUrl + url;
            if (type == 'GET') {
              dataStr = '';

              _Object$keys(data).forEach(function (key) {
                dataStr += key + '=' + data[key] + '&';
              });

              if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
              }
            }

            if (!(window.fetch && method == 'fetch')) {
              _context.next = 21;
              break;
            }

            requireConfig = {
              credentials: 'include',
              method: type,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              mode: 'cros',
              cache: 'force-cache'
            };


            if (type == 'POST') {
              Object.defineProperty(requireConfig, 'body', {
                value: _JSON$stringify(data)
              });
            }
            _context.prev = 6;
            _context.next = 9;
            return fetch(url, requireConfig);

          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();

          case 12:
            responeseJson = _context.sent;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](6);
            throw new Error(_context.t0);

          case 18:
            return _context.abrupt('return', responeseJson);

          case 21:
            requestObj = void 0;

            if (window.XMLHttpRequest) {
              requestObj = new XMLHttpRequest();
            } else {
              requestObj = new ActiveXObject("Microsoft.XMLHTTP");
            }
            sendData = '';

            if (type == 'POST') {
              sendData = _JSON$stringify(data);
            }
            requestObj.open(type, url, true);
            requestObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            requestObj.send(sendData);
            requestObj.onreadystatechange = function () {
              if (requestObj.readyState === 4) {
                if (requestObj.state === 200) {
                  var obj = requestObj.response;
                  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
                    obj = JSON.parse(obj);
                  }
                  return obj;
                } else {
                  throw new Error(requestObj);
                }
              }
            };

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[6, 15]]);
  }));

  return function ajax() {
    return _ref.apply(this, arguments);
  };
}();
export default ajax;

//# sourceMappingURL=fetch-compiled.js.map