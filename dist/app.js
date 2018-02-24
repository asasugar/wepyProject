"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./utils/wxRequest.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ["pages/discover/index", "pages/contact/index", "pages/my/index"],
      window: {
        navigationBarBackgroundColor: "#357ae0",
        navigationBarTextStyle: "white"
      },
      tabBar: {
        color: "#A5A5A7",
        selectedColor: "#357ae0",
        list: [{
          selectedIconPath: "./images/compass.png",
          iconPath: "./images/compass-g.png",
          pagePath: "pages/discover/index",
          text: "发现"
        }, {
          selectedIconPath: "./images/contact.png",
          iconPath: "./images/contact-g.png",
          pagePath: "pages/contact/index",
          text: "通讯录"
        }, {
          selectedIconPath: "./images/people.png",
          iconPath: "./images/people-g.png",
          pagePath: "pages/my/index",
          text: "我的"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use("requestfix");
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: "onLaunch",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, userInfo, res, d, c, systemInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                //用户信息

                userSpecialInfo = _wepy2.default.getStorageSync('userSpecialInfo') || {};
                // 用户普通信息

                userInfo = _wepy2.default.getStorageSync('userInfo') || {};
                //如果信息过期

                if (userSpecialInfo.openid) {
                  _context.next = 18;
                  break;
                }

                _context.next = 6;
                return _wepy2.default.login();

              case 6:
                res = _context.sent;

                if (!res.code) {
                  _context.next = 17;
                  break;
                }

                d = this.globalData; //这里存储了appid、secret、token串    
                //存储userInfo 

                _context.next = 11;
                return _wepy2.default.getUserInfo();

              case 11:
                c = _context.sent;

                _wepy2.default.setStorageSync('userInfo', c.userInfo);
                //存储系统信息 
                systemInfo = _wepy2.default.getSystemInfoSync();

                _wepy2.default.setStorageSync('systemInfo', systemInfo);
                //向后端发送code，后端返回openId等关键信息。
                // const {data}=await wxRequest({
                //   url:'',
                //   method:'POST',
                //   data:{
                //     code:res.code
                //   }
                // });
                // if(data.success){
                //   //存储关键信息到storage
                //   wepy.setStorageSync('userSpecialInfo', data.data);
                // }
                _context.next = 18;
                break;

              case 17:
                console.log('获取用户登录态失败！' + res.errMsg);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInNlbGVjdGVkSWNvblBhdGgiLCJpY29uUGF0aCIsInBhZ2VQYXRoIiwidGV4dCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5pZCIsImxvZ2luIiwicmVzIiwiY29kZSIsImQiLCJnZXRVc2VySW5mbyIsImMiLCJzZXRTdG9yYWdlU3luYyIsInN5c3RlbUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImNvbnNvbGUiLCJsb2ciLCJlcnJNc2ciLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUNFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFqQ2RBLE1BaUNjLEdBakNMO0FBQ1BDLGFBQU8sQ0FBQyxzQkFBRCxFQUF5QixxQkFBekIsRUFBZ0QsZ0JBQWhELENBREE7QUFFUEMsY0FBUTtBQUNOQyxzQ0FBOEIsU0FEeEI7QUFFTkMsZ0NBQXdCO0FBRmxCLE9BRkQ7QUFNUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxjQUFNLENBQUM7QUFDSEMsNEJBQWtCLHNCQURmO0FBRUhDLG9CQUFVLHdCQUZQO0FBR0hDLG9CQUFVLHNCQUhQO0FBSUhDLGdCQUFNO0FBSkgsU0FBRCxFQU1KO0FBQ0VILDRCQUFrQixzQkFEcEI7QUFFRUMsb0JBQVUsd0JBRlo7QUFHRUMsb0JBQVUscUJBSFo7QUFJRUMsZ0JBQU07QUFKUixTQU5JLEVBWUo7QUFDRUgsNEJBQWtCLHFCQURwQjtBQUVFQyxvQkFBVSx1QkFGWjtBQUdFQyxvQkFBVSxnQkFIWjtBQUlFQyxnQkFBTTtBQUpSLFNBWkk7QUFIQTtBQU5ELEtBaUNLO0FBQUEsVUFIZEMsVUFHYyxHQUhEO0FBQ1hDLGdCQUFVO0FBREMsS0FHQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7Ozs7Ozs7Ozs7QUFFS0Msb0IsR0FBTyxJO0FBQ1g7O0FBQ0lDLCtCLEdBQWtCLGVBQUtDLGNBQUwsQ0FBb0IsaUJBQXBCLEtBQTBDLEU7QUFDaEU7O0FBQ0lKLHdCLEdBQVcsZUFBS0ksY0FBTCxDQUFvQixVQUFwQixLQUFtQyxFO0FBQ2xEOztvQkFDS0QsZ0JBQWdCRSxNOzs7Ozs7dUJBQ0gsZUFBS0MsS0FBTCxFOzs7QUFBWkMsbUI7O3FCQUNBQSxJQUFJQyxJOzs7OztBQUNGQyxpQixHQUFJLEtBQUtWLFUsRUFBWTtBQUN6Qjs7O3VCQUNjLGVBQUtXLFdBQUwsRTs7O0FBQVZDLGlCOztBQUNKLCtCQUFLQyxjQUFMLENBQW9CLFVBQXBCLEVBQWdDRCxFQUFFWCxRQUFsQztBQUNBO0FBQ0lhLDBCLEdBQWEsZUFBS0MsaUJBQUwsRTs7QUFDakIsK0JBQUtGLGNBQUwsQ0FBb0IsWUFBcEIsRUFBa0NDLFVBQWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBRSx3QkFBUUMsR0FBUixDQUFZLGVBQWVULElBQUlVLE1BQS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckVxQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbiAgaW1wb3J0IHd4UmVxdWVzdCBmcm9tICcuL3V0aWxzL3d4UmVxdWVzdC5qcydcclxuICBpbXBvcnQgXCJ3ZXB5LWFzeW5jLWZ1bmN0aW9uXCI7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXCJwYWdlcy9kaXNjb3Zlci9pbmRleFwiLCBcInBhZ2VzL2NvbnRhY3QvaW5kZXhcIiwgXCJwYWdlcy9teS9pbmRleFwiXSxcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjMzU3YWUwXCIsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJ3aGl0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgIGNvbG9yOiBcIiNBNUE1QTdcIixcclxuICAgICAgICBzZWxlY3RlZENvbG9yOiBcIiMzNTdhZTBcIixcclxuICAgICAgICBsaXN0OiBbe1xyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi4vaW1hZ2VzL2NvbXBhc3MucG5nXCIsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBcIi4vaW1hZ2VzL2NvbXBhc3MtZy5wbmdcIixcclxuICAgICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvZGlzY292ZXIvaW5kZXhcIixcclxuICAgICAgICAgICAgdGV4dDogXCLlj5HnjrBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2ltYWdlcy9jb250YWN0LnBuZ1wiLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogXCIuL2ltYWdlcy9jb250YWN0LWcucG5nXCIsXHJcbiAgICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2NvbnRhY3QvaW5kZXhcIixcclxuICAgICAgICAgICAgdGV4dDogXCLpgJrorq/lvZVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2ltYWdlcy9wZW9wbGUucG5nXCIsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiBcIi4vaW1hZ2VzL3Blb3BsZS1nLnBuZ1wiLFxyXG4gICAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9teS9pbmRleFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIuaIkeeahFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2xvYmFsRGF0YSA9IHtcclxuICAgICAgdXNlckluZm86IG51bGxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy51c2UoXCJyZXF1ZXN0Zml4XCIpO1xyXG4gICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAvL+eUqOaIt+S/oeaBr1xyXG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlclNwZWNpYWxJbmZvJykgfHwge307XHJcbiAgICAgIC8vIOeUqOaIt+aZrumAmuS/oeaBr1xyXG4gICAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpIHx8IHt9O1xyXG4gICAgICAvL+WmguaenOS/oeaBr+i/h+acn1xyXG4gICAgICBpZiAoIXVzZXJTcGVjaWFsSW5mby5vcGVuaWQpIHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgbGV0IGQgPSB0aGlzLmdsb2JhbERhdGE7IC8v6L+Z6YeM5a2Y5YKo5LqGYXBwaWTjgIFzZWNyZXTjgIF0b2tlbuS4siAgICBcclxuICAgICAgICAgIC8v5a2Y5YKodXNlckluZm8gXHJcbiAgICAgICAgICBsZXQgYyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgYy51c2VySW5mbyk7XHJcbiAgICAgICAgICAvL+WtmOWCqOezu+e7n+S/oeaBryBcclxuICAgICAgICAgIGxldCBzeXN0ZW1JbmZvID0gd2VweS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnc3lzdGVtSW5mbycsIHN5c3RlbUluZm8pO1xyXG4gICAgICAgICAgLy/lkJHlkI7nq6/lj5HpgIFjb2Rl77yM5ZCO56uv6L+U5Zueb3Blbklk562J5YWz6ZSu5L+h5oGv44CCXHJcbiAgICAgICAgICAvLyBjb25zdCB7ZGF0YX09YXdhaXQgd3hSZXF1ZXN0KHtcclxuICAgICAgICAgIC8vICAgdXJsOicnLFxyXG4gICAgICAgICAgLy8gICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgLy8gICBkYXRhOntcclxuICAgICAgICAgIC8vICAgICBjb2RlOnJlcy5jb2RlXHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgLy8gaWYoZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgIC8vICAgLy/lrZjlgqjlhbPplK7kv6Hmga/liLBzdG9yYWdlXHJcbiAgICAgICAgICAvLyAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJTcGVjaWFsSW5mbycsIGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==