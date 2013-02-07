define(['jquery', 'text!widgets/navigation/miniDropdown/miniDropdown.html'], function($, html){
$(function() {
  $.miniDropdown = function(element, options) {

    var animate, animateMethods, bindEvents, checkEasingFunction, getSubNav, hide, hideAll, setState, show, toggle,
      _this = this;
    this.defaults = {
      activeClass: 'active',
      animation: 'basic',
      easing: 'swing',
      show: 0,
      hide: 0,
      delayIn: 0,
      delayOut: 0,
      showFunction: null,
      hideFuntion: null
    };
    animateMethods = {
      basic: {
        show: 'show',
        hide: 'hide'
      },
      fade: {
        show: 'fadeIn',
        hide: 'fadeOut'
      },
      slide: {
        show: 'slideDown',
        hide: 'slideUp'
      }
    };
    this.state = '';
    this.settings = {};
    this.$element = $(element);
    getSubNav = function($item) {
      return $item.children("ul").first();
    };
    setState = function(state) {
      this.state = state;
    };
    checkEasingFunction = function() {
      if (!$.isFunction($.easing[_this.settings.easing])) {
        return _this.settings.easing = "swing";
      }
    };
    toggle = function(type, $item) {
      var $subnav, delay, fn;
      $subnav = getSubNav($item);
      window.clearTimeout($item.data("timeoutId"));
      if (type === 'show') {
        fn = $.isFunction(_this.settings.showFunction) ? _this.settings.showFunction : show;
        delay = _this.settings.delayIn;
        hideAll($item);
        $item.children("a").addClass(_this.settings.activeClass);
      } else {
        fn = $.isFunction(_this.settings.hideFunction) ? _this.settings.hideFunction : hide;
        delay = _this.settings.delayOut;
        $item.children("a").removeClass(_this.settings.activeClass);
      }
      return $item.data("timeoutId", window.setTimeout(function() {
        return fn.apply(_this, [$item, $subnav]);
      }, delay));
    };
    bindEvents = function() {
      return _this.$items.bind({
        mouseenter: function(e) {
          return toggle('show', $(e.currentTarget));
        },
        mouseleave: function(e) {
          return toggle('hide', $(e.currentTarget));
        }
      });
    };
    animate = function($subnav, type) {
      var method;
      $subnav.stop(false, true);
      method = animateMethods[_this.settings.animation][type];
      return $subnav[method](_this.settings[type], _this.settings.easing, function() {
        return $(this)[type]();
      });
    };
    show = function($item, $subnav) {
      return animate($subnav, "show");
    };
    hide = function($item, $subnav) {
      return animate($subnav, "hide");
    };
    hideAll = function($item) {
      _this.$links.removeClass(_this.settings.activeClass);
      return _this.$subnavs.stop(false, true).hide();
    };
    this.getState = function() {
      return state;
    };
    this.getSetting = function(settingKey) {
      return this.settings[settingKey];
    };
    this.callSettingFunction = function(functionName) {
      return this.settings[functionName]();
    };
    this.init = function() {
      setState('loading');
      this.settings = $.extend({}, this.defaults, options);
      this.$items = this.$element.children("li");
      this.$links = this.$items.children("a");
      this.$subnavs = this.$items.children("ul");
      checkEasingFunction();
      bindEvents();
      return setState('loaded');
    };
    return this.init();
  };
  return $.fn.miniDropdown = function(options) {
    return this.each(function() {
      var miniDropdown;
      if (void 0 === ($(this)).data('miniDropdown')) {
        miniDropdown = new $.miniDropdown(this, options);
        return ($(this)).data('miniDropdown', miniDropdown);
      }
    });
  };
});
});