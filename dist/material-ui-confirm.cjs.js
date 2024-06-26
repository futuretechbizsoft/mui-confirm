'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Button = require('@mui/material/Button');
var Dialog = require('@mui/material/Dialog');
var DialogActions = require('@mui/material/DialogActions');
var DialogContent = require('@mui/material/DialogContent');
var DialogContentText = require('@mui/material/DialogContentText');
var DialogTitle = require('@mui/material/DialogTitle');
var TextField = require('@mui/material/TextField');
var Stack = require('@mui/material/Stack');
var IconButton = require('@mui/material/IconButton');
var CloseIcon = require('@mui/icons-material/Close');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog);
var DialogActions__default = /*#__PURE__*/_interopDefaultLegacy(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefaultLegacy(DialogContent);
var DialogContentText__default = /*#__PURE__*/_interopDefaultLegacy(DialogContentText);
var DialogTitle__default = /*#__PURE__*/_interopDefaultLegacy(DialogTitle);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var Stack__default = /*#__PURE__*/_interopDefaultLegacy(Stack);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ConfirmContext = /*#__PURE__*/React.createContext();

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var open = _ref.open,
    options = _ref.options,
    onCancel = _ref.onCancel,
    onConfirm = _ref.onConfirm,
    onOptional = _ref.onOptional,
    onClose = _ref.onClose,
    onConfirmationText = _ref.onConfirmationText;
  var title = options.title,
    description = options.description,
    content = options.content,
    confirmationText = options.confirmationText,
    cancellationText = options.cancellationText,
    optionalText = options.optionalText,
    dialogProps = options.dialogProps,
    dialogActionsProps = options.dialogActionsProps,
    confirmationButtonProps = options.confirmationButtonProps,
    cancellationButtonProps = options.cancellationButtonProps,
    optionalButtonProps = options.optionalButtonProps,
    titleProps = options.titleProps,
    contentProps = options.contentProps,
    allowClose = options.allowClose,
    confirmationKeyword = options.confirmationKeyword,
    confirmationKeywordTextFieldProps = options.confirmationKeywordTextFieldProps,
    hideCancelButton = options.hideCancelButton,
    buttonOrder = options.buttonOrder,
    icon = options.icon,
    titleIcon = options.titleIcon,
    closeIcon = options.closeIcon,
    disableEscapeKeyDown = options.disableEscapeKeyDown;
  var _React$useState = React__default["default"].useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    confirmationKeywordValue = _React$useState2[0],
    setConfirmationKeywordValue = _React$useState2[1];
  React.useEffect(function () {
    onConfirmationText(confirmationKeywordValue);
  }, [confirmationKeywordValue, onConfirmationText]);
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      var activeEle = document.activeElement;
      var isButton = buttonOrder.includes(activeEle.id);
      if (!isButton) return;
      var btnCount = buttonOrder.length;
      var eleIndex = buttonOrder.indexOf(activeEle.id);
      var btnName = '';
      if (event.key === 'ArrowRight') {
        if (btnCount === eleIndex + 1) {
          btnName = buttonOrder[0];
        } else {
          btnName = buttonOrder[eleIndex + 1];
        }
      }
      if (event.key === 'ArrowLeft') {
        if (eleIndex === 0) {
          btnName = buttonOrder[buttonOrder.length - 1];
        } else {
          btnName = buttonOrder[eleIndex - 1];
        }
      }
      var btn = document.getElementById(btnName);
      if (btn) {
        btn.tabIndex = '-1';
        btn.focus();
      }
    }
  };

  // useEffect(() => {

  //   if (open) {
  //       document.addEventListener('keydown', handleKeyDown);
  //   } else {
  //       document.removeEventListener('keydown', handleKeyDown);
  //   }
  // }, [open]);
  React.useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
  }, []);
  var confirmationButtonDisabled = confirmationKeyword && confirmationKeywordValue !== confirmationKeyword;
  var confirmationContent = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, confirmationKeyword && /*#__PURE__*/React__default["default"].createElement(TextField__default["default"], _extends({
    onChange: function onChange(e) {
      return setConfirmationKeywordValue(e.target.value);
    },
    value: confirmationKeywordValue,
    fullWidth: true
  }, confirmationKeywordTextFieldProps)));
  var dialogActions = buttonOrder.map(function (buttonType) {
    if (buttonType === "cancel") {
      return !hideCancelButton && /*#__PURE__*/React__default["default"].createElement(Button__default["default"], _extends({
        id: "cancel",
        key: "cancel"
      }, cancellationButtonProps, {
        onClick: onCancel
      }), cancellationText);
    }
    if (buttonType === "confirm") {
      return /*#__PURE__*/React__default["default"].createElement(Button__default["default"], _extends({
        id: "confirm",
        key: "confirm",
        color: "primary",
        disabled: confirmationButtonDisabled
      }, confirmationButtonProps, {
        onClick: onConfirm
      }), confirmationText);
    }
    if (buttonType === "optional") {
      return /*#__PURE__*/React__default["default"].createElement(Button__default["default"], _extends({
        id: "optional",
        key: "optional"
      }, optionalButtonProps, {
        onClick: onOptional
      }), optionalText);
    }
    throw new Error("Supported button types are only \"confirm\" and \"cancel\", got: ".concat(buttonType));
  });
  return /*#__PURE__*/React__default["default"].createElement(Dialog__default["default"], _extends({
    fullWidth: true
  }, dialogProps, {
    open: open,
    onClose: allowClose ? onClose : null,
    disableRestoreFocus: true,
    disableEscapeKeyDown: disableEscapeKeyDown
  }), title && /*#__PURE__*/React__default["default"].createElement(DialogTitle__default["default"], titleProps, /*#__PURE__*/React__default["default"].createElement(Stack__default["default"], {
    direction: "row",
    alignItems: "center",
    gap: 1,
    component: "span"
  }, titleIcon, title)), closeIcon && /*#__PURE__*/React__default["default"].createElement(IconButton__default["default"], {
    "aria-label": "close",
    onClick: onCancel,
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: function color(theme) {
        return theme.palette.grey[500];
      }
    },
    tabIndex: -1
  }, /*#__PURE__*/React__default["default"].createElement(CloseIcon__default["default"], null)), content ? /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], contentProps, /*#__PURE__*/React__default["default"].createElement(DialogContentText__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Stack__default["default"], {
    direction: "row",
    alignItems: "center",
    gap: 1,
    component: "span"
  }, icon, content)), confirmationContent) : description ? /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], contentProps, /*#__PURE__*/React__default["default"].createElement(DialogContentText__default["default"], null, /*#__PURE__*/React__default["default"].createElement(Stack__default["default"], {
    direction: "row",
    alignItems: "center",
    gap: 1,
    component: "span"
  }, icon, " ", description)), confirmationContent) : confirmationKeyword && /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], contentProps, confirmationContent), /*#__PURE__*/React__default["default"].createElement(DialogActions__default["default"], dialogActionsProps, dialogActions));
};

/* <Grid container direction="row" alignItems="center" component={"span"}>
    {icon} {description}
</Grid> */

var DEFAULT_OPTIONS = {
  title: "Are you sure?",
  description: "",
  content: null,
  confirmationText: "Ok",
  cancellationText: "Cancel",
  optionalText: "Optional",
  dialogProps: {},
  dialogActionsProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
  optionalButtonProps: {},
  titleProps: {},
  contentProps: {},
  allowClose: true,
  confirmationKeywordTextFieldProps: {},
  hideCancelButton: false,
  buttonOrder: ["cancel", "confirm"],
  icon: null,
  titleIcon: null,
  closeIcon: null,
  disableEscapeKeyDown: false
};
var buildOptions = function buildOptions(defaultOptions, options) {
  var dialogProps = _objectSpread2(_objectSpread2({}, defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps), options.dialogProps || {});
  var dialogActionsProps = _objectSpread2(_objectSpread2({}, defaultOptions.dialogActionsProps || DEFAULT_OPTIONS.dialogActionsProps), options.dialogActionsProps || {});
  var confirmationButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.confirmationButtonProps || DEFAULT_OPTIONS.confirmationButtonProps), options.confirmationButtonProps || {});
  var cancellationButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.cancellationButtonProps || DEFAULT_OPTIONS.cancellationButtonProps), options.cancellationButtonProps || {});
  var optionalButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.optionalButtonProps || DEFAULT_OPTIONS.optionalButtonProps), options.optionalButtonProps || {});
  var titleProps = _objectSpread2(_objectSpread2({}, defaultOptions.titleProps || DEFAULT_OPTIONS.titleProps), options.titleProps || {});
  var contentProps = _objectSpread2(_objectSpread2({}, defaultOptions.contentProps || DEFAULT_OPTIONS.contentProps), options.contentProps || {});
  var confirmationKeywordTextFieldProps = _objectSpread2(_objectSpread2({}, defaultOptions.confirmationKeywordTextFieldProps || DEFAULT_OPTIONS.confirmationKeywordTextFieldProps), options.confirmationKeywordTextFieldProps || {});
  return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), defaultOptions), options), {}, {
    dialogProps: dialogProps,
    dialogActionsProps: dialogActionsProps,
    confirmationButtonProps: confirmationButtonProps,
    cancellationButtonProps: cancellationButtonProps,
    optionalButtonProps: optionalButtonProps,
    titleProps: titleProps,
    contentProps: contentProps,
    confirmationKeywordTextFieldProps: confirmationKeywordTextFieldProps
  });
};
exports.confirm = void 0;
var ConfirmProvider = function ConfirmProvider(_ref) {
  var children = _ref.children,
    _ref$defaultOptions = _ref.defaultOptions,
    defaultOptions = _ref$defaultOptions === void 0 ? {} : _ref$defaultOptions;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = React.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    resolveReject = _useState4[0],
    setResolveReject = _useState4[1];
  var _resolveReject = _slicedToArray(resolveReject, 2),
    resolve = _resolveReject[0],
    reject = _resolveReject[1];
  var _useState5 = React.useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    inputValue = _useState6[0],
    setInputValue = _useState6[1];
  var confirm = React.useCallback(function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      setOptions(options);
      setResolveReject([resolve, reject]);
    });
  }, []);
  var handleClose = React.useCallback(function () {
    setResolveReject([]);
  }, []);
  var handleCancel = React.useCallback(function () {
    if (reject) {
      reject();
      handleClose();
    }
  }, [reject, handleClose]);
  var handleConfirm = React.useCallback(function () {
    if (resolve) {
      resolve(_objectSpread2({
        buttonType: "cofirm"
      }, options.confirmationKeyword && {
        inputValue: inputValue
      }));
      handleClose();
    }
  }, [resolve, options.confirmationKeyword, inputValue, handleClose]);
  var handleOptional = React.useCallback(function () {
    if (resolve) {
      resolve(_objectSpread2({
        buttonType: "optional"
      }, options.confirmationKeyword && {
        inputValue: inputValue
      }));
      handleClose();
    }
  }, [resolve, options.confirmationKeyword, inputValue, handleClose]);
  var onConfirmationText = React.useCallback(function (obj) {
    setInputValue(obj);
  }, []);
  exports.confirm = confirm;
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(ConfirmContext.Provider, {
    value: confirm
  }, children), /*#__PURE__*/React__default["default"].createElement(ConfirmationDialog, {
    open: resolveReject.length === 2,
    options: buildOptions(defaultOptions, options),
    onClose: handleClose,
    onCancel: handleCancel,
    onOptional: handleOptional,
    onConfirm: handleConfirm,
    onConfirmationText: onConfirmationText
  }));
};

var useConfirm = function useConfirm() {
  var confirm = React.useContext(ConfirmContext);
  return confirm;
};

exports.ConfirmProvider = ConfirmProvider;
exports.useConfirm = useConfirm;
