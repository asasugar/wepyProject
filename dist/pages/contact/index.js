"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OneDollar = function (_wepy$page) {
  _inherits(OneDollar, _wepy$page);

  function OneDollar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OneDollar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OneDollar.__proto__ || Object.getPrototypeOf(OneDollar)).call.apply(_ref, [this].concat(args))), _this), _this.customData = {}, _this.config = {
      navigationBarTitleText: '发现'
    }, _this.data = {}, _this.components = {}, _this.mixins = [], _this.computed = {}, _this.watch = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OneDollar, [{
    key: "customFunction",
    // 自定义数据

    value: function customFunction() {} //自定义方法

  }, {
    key: "onLoad",
    value: function onLoad() {} // 在Page和Component共用的生命周期函数

  }, {
    key: "onShow",
    // 声明组件之间的事件处理函数
    value: function onShow() {} // 只在Page中存在的页面生命周期函数

    // 只在Page实例中存在的配置数据，对应于原生的page.json文件

    // 页面所需数据均需在这里声明，可用于模板数据绑定

    // 声明页面中所引用的组件，或声明组件中所引用的子组件

    // 声明页面所引用的Mixin实例

    // 声明计算属性（详见后文介绍）

    // 声明数据watcher（详见后文介绍）

    // 声明页面wxml中标签的事件处理函数。注意，此处只用于声明页面wxml中标签的bind、catch事件，自定义方法需以自定义方法的方式声明

  }]);

  return OneDollar;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OneDollar , 'pages/contact/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9uZURvbGxhciIsImN1c3RvbURhdGEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsVSxHQUFhLEUsUUFRYkMsTSxHQUFTO0FBQ0xDLDhCQUF3QjtBQURuQixLLFFBSVRDLEksR0FBTyxFLFFBRVBDLFUsR0FBYSxFLFFBRWJDLE0sR0FBUyxFLFFBRVRDLFEsR0FBVyxFLFFBRVhDLEssR0FBUSxFLFFBRVJDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7OztBQXhCUTs7cUNBRUEsQ0FBRSxDLENBQUM7Ozs7NkJBRVgsQ0FBRSxDLENBQUM7Ozs7QUFvQkM7NkJBbEJKLENBQUUsQyxDQUFDOztBQUlUOztBQUVROztBQUVNOztBQUVKOztBQUVFOztBQUVIOztBQUVFOzs7OztFQXZCdUIsZUFBS0MsSTs7a0JBQXZCWCxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVEb2xsYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjdXN0b21EYXRhID0ge307IC8vIOiHquWumuS5ieaVsOaNrlxuXG4gIGN1c3RvbUZ1bmN0aW9uKCkge30gLy/oh6rlrprkuYnmlrnms5VcblxuICBvbkxvYWQoKSB7fSAvLyDlnKhQYWdl5ZKMQ29tcG9uZW505YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG5cbiAgb25TaG93KCkge30gLy8g5Y+q5ZyoUGFnZeS4reWtmOWcqOeahOmhtemdoueUn+WRveWRqOacn+WHveaVsFxuXG4gIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HnjrAnXG4gIH07IC8vIOWPquWcqFBhZ2Xlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoRwYWdlLmpzb27mlofku7ZcblxuICBkYXRhID0ge307IC8vIOmhtemdouaJgOmcgOaVsOaNruWdh+mcgOWcqOi/memHjOWjsOaYju+8jOWPr+eUqOS6juaooeadv+aVsOaNrue7keWumlxuXG4gIGNvbXBvbmVudHMgPSB7fTsgLy8g5aOw5piO6aG16Z2i5Lit5omA5byV55So55qE57uE5Lu277yM5oiW5aOw5piO57uE5Lu25Lit5omA5byV55So55qE5a2Q57uE5Lu2XG5cbiAgbWl4aW5zID0gW107IC8vIOWjsOaYjumhtemdouaJgOW8leeUqOeahE1peGlu5a6e5L6LXG5cbiAgY29tcHV0ZWQgPSB7fTsgLy8g5aOw5piO6K6h566X5bGe5oCn77yI6K+m6KeB5ZCO5paH5LuL57uN77yJXG5cbiAgd2F0Y2ggPSB7fTsgLy8g5aOw5piO5pWw5o2ud2F0Y2hlcu+8iOivpuingeWQjuaWh+S7i+e7je+8iVxuXG4gIG1ldGhvZHMgPSB7fTsgLy8g5aOw5piO6aG16Z2id3htbOS4reagh+etvueahOS6i+S7tuWkhOeQhuWHveaVsOOAguazqOaEj++8jOatpOWkhOWPqueUqOS6juWjsOaYjumhtemdond4bWzkuK3moIfnrb7nmoRiaW5k44CBY2F0Y2jkuovku7bvvIzoh6rlrprkuYnmlrnms5XpnIDku6Xoh6rlrprkuYnmlrnms5XnmoTmlrnlvI/lo7DmmI5cblxuICBldmVudHMgPSB7fTsgLy8g5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXG59XG4iXX0=