'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var url = _ref.url,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$data = _ref.data,
            data = _ref$data === undefined ? {} : _ref$data;
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _tip2.default.loading();
                        _context.next = 3;
                        return _wepy2.default.request({
                            url: url,
                            method: method,
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 3:
                        res = _context.sent;

                        _tip2.default.loaded();
                        return _context.abrupt('return', res);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest(_x) {
        return _ref2.apply(this, arguments);
    };
}();

exports.default = wxRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwibG9hZGluZyIsInJlcXVlc3QiLCJoZWFkZXIiLCJyZXMiLCJsb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHdFQUFZO0FBQUEsWUFBUUMsR0FBUixRQUFRQSxHQUFSO0FBQUEsK0JBQVlDLE1BQVo7QUFBQSxZQUFZQSxNQUFaLCtCQUFtQixLQUFuQjtBQUFBLDZCQUF5QkMsSUFBekI7QUFBQSxZQUF5QkEsSUFBekIsNkJBQThCLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLHNDQUFJQyxPQUFKO0FBRGM7QUFBQSwrQkFFRSxlQUFLQyxPQUFMLENBQWE7QUFDekJKLGlDQUFLQSxHQURvQjtBQUV6QkMsb0NBQVFBLE1BRmlCO0FBR3pCQyxrQ0FBTUEsSUFIbUI7QUFJekJHLG9DQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQjtBQUppQix5QkFBYixDQUZGOztBQUFBO0FBRVZDLDJCQUZVOztBQVFkLHNDQUFJQyxNQUFKO0FBUmMseURBU1BELEdBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFhZVAsUyIsImZpbGUiOiJ3eFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHRpcCBmcm9tICcuL3RpcCdcclxuXHJcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHsgdXJsLG1ldGhvZD0nR0VUJyxkYXRhPXt9fSkgPT4ge1xyXG4gICAgdGlwLmxvYWRpbmcoKTtcclxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIH0pO1xyXG4gICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3eFJlcXVlc3Q7Il19