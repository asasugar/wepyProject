"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
    function Tips() {
        _classCallCheck(this, Tips);

        this.isLoading = false;
    }
    /**
     * 弹出提示框
     */

    _createClass(Tips, null, [{
        key: "success",
        value: function success(title) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

            setTimeout(function () {
                wx.showToast({
                    title: title,
                    icon: "success",
                    mask: true,
                    duration: duration
                });
            }, 300);
            if (duration > 0) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, duration);
                });
            }
        }

        /**
         * 弹出确认窗口
         */

    }, {
        key: "confirm",
        value: function confirm(text) {
            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

            return new Promise(function (resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: true,
                    success: function success(res) {
                        if (res.confirm) {
                            resolve(payload);
                        } else if (res.cancel) {
                            reject(payload);
                        }
                    },
                    fail: function fail(res) {
                        reject(payload);
                    }
                });
            });
        }
    }, {
        key: "toast",
        value: function toast(title, onHide) {
            var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";

            setTimeout(function () {
                wx.showToast({
                    title: title,
                    icon: icon,
                    mask: true,
                    duration: 500
                });
            }, 300);

            // 隐藏结束回调
            if (onHide) {
                setTimeout(function () {
                    onHide();
                }, 500);
            }
        }

        /**
         * 警告框
         */

    }, {
        key: "alert",
        value: function alert(title) {
            wx.showToast({
                title: title,
                image: "../images/alert.png",
                mask: true,
                duration: 1500
            });
        }

        /**
         * 错误框
         */

    }, {
        key: "error",
        value: function error(title, onHide) {
            wx.showToast({
                title: title,
                image: "../images/error.png",
                mask: true,
                duration: 500
            });
            // 隐藏结束回调
            if (onHide) {
                setTimeout(function () {
                    onHide();
                }, 500);
            }
        }

        /**
         * 弹出加载提示
         */

    }, {
        key: "loading",
        value: function loading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

            if (Tips.isLoading) {
                return;
            }
            Tips.isLoading = true;
            wx.showLoading({
                title: title,
                mask: true
            });
        }

        /**
         * 加载完毕
         */

    }, {
        key: "loaded",
        value: function loaded() {
            if (Tips.isLoading) {
                Tips.isLoading = false;
                wx.hideLoading();
            }
        }
    }, {
        key: "share",
        value: function share(title, url, desc) {
            return {
                title: title,
                path: url,
                desc: desc,
                success: function success(res) {
                    Tips.toast("分享成功");
                }
            };
        }
    }]);

    return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDakIsb0JBQWM7QUFBQTs7QUFDVixhQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7QUFDRDs7Ozs7O2dDQUllQyxLLEVBQXVCO0FBQUEsZ0JBQWhCQyxRQUFnQix1RUFBTCxHQUFLOztBQUNsQ0MsdUJBQVcsWUFBTTtBQUNiQyxtQkFBR0MsU0FBSCxDQUFhO0FBQ1RKLDJCQUFPQSxLQURFO0FBRVRLLDBCQUFNLFNBRkc7QUFHVEMsMEJBQU0sSUFIRztBQUlUTCw4QkFBVUE7QUFKRCxpQkFBYjtBQU1ILGFBUEQsRUFPRyxHQVBIO0FBUUEsZ0JBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNkLHVCQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENQLCtCQUFXLFlBQU07QUFDYk07QUFDSCxxQkFGRCxFQUVHUCxRQUZIO0FBR0gsaUJBSk0sQ0FBUDtBQUtIO0FBQ0o7O0FBRUQ7Ozs7OztnQ0FHZVMsSSxFQUFrQztBQUFBLGdCQUE1QkMsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsZ0JBQWRYLEtBQWMsdUVBQU4sSUFBTTs7QUFDN0MsbUJBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ04sbUJBQUdTLFNBQUgsQ0FBYTtBQUNUWiwyQkFBT0EsS0FERTtBQUVUYSw2QkFBU0gsSUFGQTtBQUdUSSxnQ0FBWSxJQUhIO0FBSVRDLDZCQUFTLHNCQUFPO0FBQ1osNEJBQUlDLElBQUlDLE9BQVIsRUFBaUI7QUFDYlQsb0NBQVFHLE9BQVI7QUFDSCx5QkFGRCxNQUVPLElBQUlLLElBQUlFLE1BQVIsRUFBZ0I7QUFDbkJULG1DQUFPRSxPQUFQO0FBQ0g7QUFDSixxQkFWUTtBQVdUUSwwQkFBTSxtQkFBTztBQUNUViwrQkFBT0UsT0FBUDtBQUNIO0FBYlEsaUJBQWI7QUFlSCxhQWhCTSxDQUFQO0FBaUJIOzs7OEJBRVlYLEssRUFBT29CLE0sRUFBMEI7QUFBQSxnQkFBbEJmLElBQWtCLHVFQUFYLFNBQVc7O0FBQzFDSCx1QkFBVyxZQUFNO0FBQ2JDLG1CQUFHQyxTQUFILENBQWE7QUFDVEosMkJBQU9BLEtBREU7QUFFVEssMEJBQU1BLElBRkc7QUFHVEMsMEJBQU0sSUFIRztBQUlUTCw4QkFBVTtBQUpELGlCQUFiO0FBTUgsYUFQRCxFQU9HLEdBUEg7O0FBU0E7QUFDQSxnQkFBSW1CLE1BQUosRUFBWTtBQUNSbEIsMkJBQVcsWUFBTTtBQUNia0I7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSDtBQUNKOztBQUVEOzs7Ozs7OEJBR2FwQixLLEVBQU87QUFDaEJHLGVBQUdDLFNBQUgsQ0FBYTtBQUNUSix1QkFBT0EsS0FERTtBQUVUcUIsdUJBQU8scUJBRkU7QUFHVGYsc0JBQU0sSUFIRztBQUlUTCwwQkFBVTtBQUpELGFBQWI7QUFNSDs7QUFFRDs7Ozs7OzhCQUlhRCxLLEVBQU9vQixNLEVBQVE7QUFDeEJqQixlQUFHQyxTQUFILENBQWE7QUFDVEosdUJBQU9BLEtBREU7QUFFVHFCLHVCQUFPLHFCQUZFO0FBR1RmLHNCQUFNLElBSEc7QUFJVEwsMEJBQVU7QUFKRCxhQUFiO0FBTUE7QUFDQSxnQkFBSW1CLE1BQUosRUFBWTtBQUNSbEIsMkJBQVcsWUFBTTtBQUNia0I7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSDtBQUNKOztBQUVEOzs7Ozs7a0NBRzhCO0FBQUEsZ0JBQWZwQixLQUFlLHVFQUFQLEtBQU87O0FBQzFCLGdCQUFJRixLQUFLQyxTQUFULEVBQW9CO0FBQ2hCO0FBQ0g7QUFDREQsaUJBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQUksZUFBR21CLFdBQUgsQ0FBZTtBQUNYdEIsdUJBQU9BLEtBREk7QUFFWE0sc0JBQU07QUFGSyxhQUFmO0FBSUg7O0FBRUQ7Ozs7OztpQ0FHZ0I7QUFDWixnQkFBSVIsS0FBS0MsU0FBVCxFQUFvQjtBQUNoQkQscUJBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUksbUJBQUdvQixXQUFIO0FBQ0g7QUFDSjs7OzhCQUVZdkIsSyxFQUFPd0IsRyxFQUFLQyxJLEVBQU07QUFDM0IsbUJBQU87QUFDSHpCLHVCQUFPQSxLQURKO0FBRUgwQixzQkFBTUYsR0FGSDtBQUdIQyxzQkFBTUEsSUFISDtBQUlIVix5QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCbEIseUJBQUs2QixLQUFMLENBQVcsTUFBWDtBQUNIO0FBTkUsYUFBUDtBQVFIOzs7Ozs7QUFHTDs7Ozs7a0JBdElxQjdCLEk7QUF5SXJCQSxLQUFLQyxTQUFMLEdBQWlCLEtBQWpCIiwiZmlsZSI6InRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmj5DnpLrkuI7liqDovb3lt6XlhbfnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65o+Q56S65qGGXHJcbiAgICAgKi9cclxuXHJcbiAgICBzdGF0aWMgc3VjY2Vzcyh0aXRsZSwgZHVyYXRpb24gPSA1MDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by55Ye656Gu6K6k56qX5Y+jXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb25maXJtKHRleHQsIHBheWxvYWQgPSB7fSwgdGl0bGUgPSBcIuaPkOekulwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvYXN0KHRpdGxlLCBvbkhpZGUsIGljb24gPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgICAgIC8vIOmakOiXj+e7k+adn+Wbnuiwg1xyXG4gICAgICAgIGlmIChvbkhpZGUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkhpZGUoKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorablkYrmoYZcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFsZXJ0KHRpdGxlKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuLi9pbWFnZXMvYWxlcnQucG5nXCIsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/moYZcclxuICAgICAqL1xyXG5cclxuICAgIHN0YXRpYyBlcnJvcih0aXRsZSwgb25IaWRlKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIuLi9pbWFnZXMvZXJyb3IucG5nXCIsXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcclxuICAgICAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25IaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65Yqg6L295o+Q56S6XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2FkaW5nKHRpdGxlID0gXCLliqDovb3kuK1cIikge1xyXG4gICAgICAgIGlmIChUaXBzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRpcHMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5q+VXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2FkZWQoKSB7XHJcbiAgICAgICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIFRpcHMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFyZSh0aXRsZSwgdXJsLCBkZXNjKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICBwYXRoOiB1cmwsXHJcbiAgICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIFRpcHMudG9hc3QoXCLliIbkuqvmiJDlip9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6Z2Z5oCB5Y+Y6YeP77yM5piv5ZCm5Yqg6L295LitXHJcbiAqL1xyXG5UaXBzLmlzTG9hZGluZyA9IGZhbHNlOyJdfQ==