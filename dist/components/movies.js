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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsIm1vdmllVHlwZSIsIlN0cmluZyIsImRhdGEiLCJtb3ZpZVRpdGxlIiwibW92aWVMaXN0IiwiX3VybCIsIl9wYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsIl9jdXJQYWdlIiwibGVuZ3RoIiwib3B0aW9ucyIsInEiLCJnZXRNb3ZpZUxpc3QiLCJ1cmwiLCJfdGhpcyIsInd4Iiwic2hvd0xvYWRpbmciLCJyZXF1ZXN0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJhcGlVcmwiLCJtZXRob2QiLCJjb3VudCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aXRsZSIsInN1YmplY3RzIiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs2TEFJRUEsSyxHQUFRO0FBQ05DLGlCQUFXQztBQURMLEssU0FJUkMsSSxHQUFPO0FBQ0xDLGtCQUFZLEVBRFA7QUFFTEMsaUJBQVc7QUFGTixLOzs7Ozs2QkFLRTtBQUNQO0FBQ0EsVUFBSUMsT0FBTyxhQUFYO0FBQ0EsVUFBSSxLQUFLTCxTQUFMLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CO0FBQ0EsWUFBSU0sU0FBU0MsaUJBQWI7QUFDQSxZQUFJQyxXQUFXRixPQUFPQSxPQUFPRyxNQUFQLEdBQWdCLENBQXZCLENBQWY7QUFDQTtBQUNBSixlQUFPLGNBQWNHLFNBQVNFLE9BQVQsQ0FBaUJDLENBQXRDO0FBQ0Q7QUFDRDtBQUNBLFdBQUtDLFlBQUwsQ0FBa0JQLElBQWxCO0FBQ0Q7Ozs7O0FBRUQ7aUNBQ2NRLEcsRUFBSztBQUNqQixVQUFJQyxRQUFRLElBQVo7QUFDQUMsU0FBR0MsV0FBSDtBQUNBRCxTQUFHRSxPQUFILENBQVc7QUFDVEosYUFBSyxLQUFLSyxPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDQyxNQUFoQyxHQUF5QyxTQUF6QyxHQUFxRFAsR0FEakQ7QUFFVFEsZ0JBQVEsS0FGQztBQUdUbkIsY0FBTSxFQUFFb0IsT0FBTyxFQUFULEVBSEc7QUFJVEMsZUFKUyxtQkFJREMsR0FKQyxFQUlJO0FBQ1g7QUFDQVYsZ0JBQU1YLFVBQU4sR0FBbUJxQixJQUFJdEIsSUFBSixDQUFTdUIsS0FBNUI7QUFDQVgsZ0JBQU1WLFNBQU4sR0FBa0JvQixJQUFJdEIsSUFBSixDQUFTd0IsUUFBM0I7QUFDQVosZ0JBQU1hLE1BQU47QUFDQVosYUFBR2EsV0FBSDtBQUNEO0FBVlEsT0FBWDtBQVlEOzs7O0VBeEMwQixlQUFLQyxTIiwiZmlsZSI6Im1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAvKiBnbG9iYWwgZ2V0Q3VycmVudFBhZ2VzIHd4ICovXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBtb3ZpZVR5cGU6IFN0cmluZ1xuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgbW92aWVUaXRsZTogJycsXG4gICAgICBtb3ZpZUxpc3Q6IFtdXG4gICAgfTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIC8vIOmqjOivgeivt+axguadpea6kCDmkJzntKLjgIHpppbpobVcbiAgICAgIGxldCBfdXJsID0gJ2luX3RoZWF0ZXJzJ1xuICAgICAgaWYgKHRoaXMubW92aWVUeXBlID09PSAnc2VhcmNoJykge1xuICAgICAgICAvLyDmkJzntKLpobXpnaLor7fmsYLlpITnkIZcbiAgICAgICAgbGV0IF9wYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXG4gICAgICAgIGxldCBfY3VyUGFnZSA9IF9wYWdlc1tfcGFnZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgLy8g6I635Y+W5Yiw5pCc57Si5bim6L+H5p2l55qE5Y+C5pWw5bm25aSN5Yi25Yiw6K+35rGC55qEdXJs5o6l5Y+j5LitXG4gICAgICAgIF91cmwgPSAnc2VhcmNoP3E9JyArIF9jdXJQYWdlLm9wdGlvbnMucVxuICAgICAgfVxuICAgICAgLy8g6I635Y+W55S15b2x5YiX6KGoXG4gICAgICB0aGlzLmdldE1vdmllTGlzdChfdXJsKVxuICAgIH07XG5cbiAgICAvLyDojrflj5bnlLXlvbHliJfooahcbiAgICBnZXRNb3ZpZUxpc3QgKHVybCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgd3guc2hvd0xvYWRpbmcoKVxuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5hcGlVcmwgKyAnL21vdmllLycgKyB1cmwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGE6IHsgY291bnQ6IDE1IH0sXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgLy8g5q2k5aSE55yB55Wl6K+35rGC5piv5ZCm5oiQ5Yqf5qCh6aqMXG4gICAgICAgICAgX3RoaXMubW92aWVUaXRsZSA9IHJlcy5kYXRhLnRpdGxlXG4gICAgICAgICAgX3RoaXMubW92aWVMaXN0ID0gcmVzLmRhdGEuc3ViamVjdHNcbiAgICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==