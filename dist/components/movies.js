'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global getCurrentPages wx */


var _default = function (_wepy$component) {
  _inherits(_default, _wepy$component);

  function _default() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this2), _this2.props = {
      movieType: String
    }, _this2.data = {
      movieTitle: '',
      movieList: []
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {
      // 验证请求来源 搜索、首页
      var _url = 'in_theaters';
      if (this.movieType === 'search') {
        // 搜索页面请求处理
        var _pages = getCurrentPages();
        var _curPage = _pages[_pages.length - 1];
        // 获取到搜索带过来的参数并复制到请求的url接口中
        _url = 'search?q=' + _curPage.options.q;
      }
      // 获取电影列表
      this.getMovieList(_url);
    }
  }, {
    key: 'getMovieList',


    // 获取电影列表
    value: function getMovieList(url) {
      console.log(this.$root.$parent);
      console.log(this.$parent.$parent);
      var _this = this;
      wx.showLoading();
      wx.request({
        url: this.$parent.$parent.globalData.apiUrl + '/movie/' + url,
        method: 'GET',
        data: { count: 15 },
        success: function success(res) {
          // 此处省略请求是否成功校验
          _this.movieTitle = res.data.title;
          _this.movieList = res.data.subjects;
          _this.$apply();
          wx.hideLoading();
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm1vdmllVHlwZSIsIlN0cmluZyIsImRhdGEiLCJtb3ZpZVRpdGxlIiwibW92aWVMaXN0IiwiX3VybCIsIl9wYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsIl9jdXJQYWdlIiwibGVuZ3RoIiwib3B0aW9ucyIsInEiLCJnZXRNb3ZpZUxpc3QiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiJHJvb3QiLCIkcGFyZW50IiwiX3RoaXMiLCJ3eCIsInNob3dMb2FkaW5nIiwicmVxdWVzdCIsImdsb2JhbERhdGEiLCJhcGlVcmwiLCJtZXRob2QiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aXRsZSIsInN1YmplY3RzIiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs2TEFJRUEsSyxHQUFRO0FBQ05DLGlCQUFXQztBQURMLEssU0FJUkMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFFTEMsaUJBQVc7QUFGTixLOzs7Ozs2QkFLRTtBQUNQO0FBQ0EsVUFBSUMsT0FBTyxhQUFYO0FBQ0EsVUFBSSxLQUFLTCxTQUFMLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CO0FBQ0EsWUFBSU0sU0FBU0MsaUJBQWI7QUFDQSxZQUFJQyxXQUFXRixPQUFPQSxPQUFPRyxNQUFQLEdBQWdCLENBQXZCLENBQWY7QUFDQTtBQUNBSixlQUFPLGNBQWNHLFNBQVNFLE9BQVQsQ0FBaUJDLENBQXRDO0FBQ0Q7QUFDRDtBQUNBLFdBQUtDLFlBQUwsQ0FBa0JQLElBQWxCO0FBQ0Q7Ozs7O0FBRUQ7aUNBQ2NRLEcsRUFBSztBQUNqQkMsY0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsQ0FBV0MsT0FBdkI7QUFDQUgsY0FBUUMsR0FBUixDQUFZLEtBQUtFLE9BQUwsQ0FBYUEsT0FBekI7QUFDQSxVQUFJQyxRQUFRLElBQVo7QUFDQUMsU0FBR0MsV0FBSDtBQUNBRCxTQUFHRSxPQUFILENBQVc7QUFDVFIsYUFBSyxLQUFLSSxPQUFMLENBQWFBLE9BQWIsQ0FBcUJLLFVBQXJCLENBQWdDQyxNQUFoQyxHQUF5QyxTQUF6QyxHQUFxRFYsR0FEakQ7QUFFVFcsZ0JBQVEsS0FGQztBQUdUdEIsY0FBTSxFQUFFdUIsT0FBTyxFQUFULEVBSEc7QUFJVEMsZUFKUyxtQkFJREMsR0FKQyxFQUlJO0FBQ1g7QUFDQVQsZ0JBQU1mLFVBQU4sR0FBbUJ3QixJQUFJekIsSUFBSixDQUFTMEIsS0FBNUI7QUFDQVYsZ0JBQU1kLFNBQU4sR0FBa0J1QixJQUFJekIsSUFBSixDQUFTMkIsUUFBM0I7QUFDQVgsZ0JBQU1ZLE1BQU47QUFDQVgsYUFBR1ksV0FBSDtBQUNEO0FBVlEsT0FBWDtBQVlEOzs7O0VBMUMwQixlQUFLQyxTIiwiZmlsZSI6Im1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAvKiBnbG9iYWwgZ2V0Q3VycmVudFBhZ2VzIHd4ICovXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBtb3ZpZVR5cGU6IFN0cmluZ1xuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgbW92aWVUaXRsZTogJycsXG4gICAgICBtb3ZpZUxpc3Q6IFtdXG4gICAgfTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIC8vIOmqjOivgeivt+axguadpea6kCDmkJzntKLjgIHpppbpobVcbiAgICAgIGxldCBfdXJsID0gJ2luX3RoZWF0ZXJzJ1xuICAgICAgaWYgKHRoaXMubW92aWVUeXBlID09PSAnc2VhcmNoJykge1xuICAgICAgICAvLyDmkJzntKLpobXpnaLor7fmsYLlpITnkIZcbiAgICAgICAgbGV0IF9wYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXG4gICAgICAgIGxldCBfY3VyUGFnZSA9IF9wYWdlc1tfcGFnZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgLy8g6I635Y+W5Yiw5pCc57Si5bim6L+H5p2l55qE5Y+C5pWw5bm25aSN5Yi25Yiw6K+35rGC55qEdXJs5o6l5Y+j5LitXG4gICAgICAgIF91cmwgPSAnc2VhcmNoP3E9JyArIF9jdXJQYWdlLm9wdGlvbnMucVxuICAgICAgfVxuICAgICAgLy8g6I635Y+W55S15b2x5YiX6KGoXG4gICAgICB0aGlzLmdldE1vdmllTGlzdChfdXJsKVxuICAgIH07XG5cbiAgICAvLyDojrflj5bnlLXlvbHliJfooahcbiAgICBnZXRNb3ZpZUxpc3QgKHVybCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy4kcm9vdC4kcGFyZW50KVxuICAgICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50LiRwYXJlbnQpXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICB3eC5zaG93TG9hZGluZygpXG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLmFwaVVybCArICcvbW92aWUvJyArIHVybCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgZGF0YTogeyBjb3VudDogMTUgfSxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAvLyDmraTlpITnnIHnlaXor7fmsYLmmK/lkKbmiJDlip/moKHpqoxcbiAgICAgICAgICBfdGhpcy5tb3ZpZVRpdGxlID0gcmVzLmRhdGEudGl0bGVcbiAgICAgICAgICBfdGhpcy5tb3ZpZUxpc3QgPSByZXMuZGF0YS5zdWJqZWN0c1xuICAgICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19