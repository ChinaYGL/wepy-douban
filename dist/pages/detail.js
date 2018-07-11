'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global wx */


var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      'navigationBarTitleText': '电影详情'
    }, _this2.data = {
      movieInfo: {}
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Search, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this = this;
      wx.showLoading();
      wx.request({
        url: this.$parent.globalData.apiUrl + '/movie/subject/' + options.id,
        method: 'GET',
        success: function success(res) {
          console.log(res);
          // 此处省略请求是否成功校验
          _this.movieInfo = res.data;
          _this.$apply();
          wx.hideLoading();
        }
      });
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJkYXRhIiwibW92aWVJbmZvIiwib3B0aW9ucyIsIl90aGlzIiwid3giLCJzaG93TG9hZGluZyIsInJlcXVlc3QiLCJ1cmwiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImFwaVVybCIsImlkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7SUFHcUJBLE07Ozs7Ozs7Ozs7Ozs7O3lMQUNuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCO0FBRG5CLEssU0FJVEMsSSxHQUFPO0FBQ0xDLGlCQUFXO0FBRE4sSzs7Ozs7MkJBR0FDLE8sRUFBUztBQUNkLFVBQUlDLFFBQVEsSUFBWjtBQUNBQyxTQUFHQyxXQUFIO0FBQ0FELFNBQUdFLE9BQUgsQ0FBVztBQUNUQyxhQUFLLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsTUFBeEIsR0FBaUMsaUJBQWpDLEdBQXFEUixRQUFRUyxFQUR6RDtBQUVUQyxnQkFBUSxLQUZDO0FBR1RDLGVBSFMsbUJBR0RDLEdBSEMsRUFHSTtBQUNYQyxrQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0E7QUFDQVgsZ0JBQU1GLFNBQU4sR0FBa0JhLElBQUlkLElBQXRCO0FBQ0FHLGdCQUFNYyxNQUFOO0FBQ0FiLGFBQUdjLFdBQUg7QUFDRDtBQVRRLE9BQVg7QUFXRDs7OztFQXRCaUMsZUFBS0MsSTs7a0JBQXBCckIsTSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLyogZ2xvYmFsIHd4ICovXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfnlLXlvbHor6bmg4UnXG4gICAgfTtcblxuICAgIGRhdGEgPSB7XG4gICAgICBtb3ZpZUluZm86IHt9XG4gICAgfTtcbiAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgd3guc2hvd0xvYWRpbmcoKVxuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYXBpVXJsICsgJy9tb3ZpZS9zdWJqZWN0LycgKyBvcHRpb25zLmlkLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAvLyDmraTlpITnnIHnlaXor7fmsYLmmK/lkKbmiJDlip/moKHpqoxcbiAgICAgICAgICBfdGhpcy5tb3ZpZUluZm8gPSByZXMuZGF0YVxuICAgICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19