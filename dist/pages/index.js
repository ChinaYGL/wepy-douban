'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _movies = require('./../components/movies.js');

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "movies": { "movieType": "in_theaters" } }, _this.$events = {}, _this.components = {
      movies: _movies2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 声明组件


  _createClass(Index, [{
    key: 'formSubmit',
    value: function formSubmit(e) {
      var _searchKey = e.detail.value.searchKey;
      console.log(_searchKey);
      console.log(this);
      // 这里做值校验
      if (!_searchKey) return;
      this.$navigate({
        url: '/pages/search?q=' + _searchKey
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibW92aWVzIiwiZSIsIl9zZWFyY2hLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlYXJjaEtleSIsImNvbnNvbGUiLCJsb2ciLCIkbmF2aWdhdGUiLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUVwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGFBQVksYUFBYixFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSzs7QUFKUjs7Ozs7K0JBT1NDLEMsRUFBRztBQUNaLFVBQUlDLGFBQWFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxTQUFoQztBQUNBQyxjQUFRQyxHQUFSLENBQVlMLFVBQVo7QUFDQUksY0FBUUMsR0FBUixDQUFZLElBQVo7QUFDQTtBQUNBLFVBQUksQ0FBQ0wsVUFBTCxFQUFpQjtBQUNqQixXQUFLTSxTQUFMLENBQWU7QUFDYkMsYUFBSyxxQkFBcUJQO0FBRGIsT0FBZjtBQUdEOzs7O0VBakJnQyxlQUFLUSxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8g5byV5YWl57uE5Lu2XG4gIGltcG9ydCBNb3ZpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZXMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgLy8g5aOw5piO57uE5Lu2XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm1vdmllc1wiOntcIm1vdmllVHlwZVwiOlwiaW5fdGhlYXRlcnNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbW92aWVzOiBNb3ZpZXNcbiAgICB9O1xuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgbGV0IF9zZWFyY2hLZXkgPSBlLmRldGFpbC52YWx1ZS5zZWFyY2hLZXlcbiAgICAgIGNvbnNvbGUubG9nKF9zZWFyY2hLZXkpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgICAgLy8g6L+Z6YeM5YGa5YC85qCh6aqMXG4gICAgICBpZiAoIV9zZWFyY2hLZXkpIHJldHVyblxuICAgICAgdGhpcy4kbmF2aWdhdGUoe1xuICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoP3E9JyArIF9zZWFyY2hLZXlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=