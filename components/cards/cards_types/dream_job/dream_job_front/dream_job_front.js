"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobFront = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_vector = require("../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _dream_job_front_styles = require("./dream_job_front_styles");

var _remote_utils = require("../../../../../utils/enums/remote/remote_utils");

var _reactIntl = require("react-intl");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HomeLogo = function HomeLogo(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M39.512 18.822L21.18.488a1.668 1.668 0 0 0-2.357 0L.488 18.822a1.668 1.668 0 0 0 1.179 2.845H3.75c.23 0 .417.187.417.417v16.25c0 .92.746 1.667 1.666 1.667h9.584c.23 0 .417-.187.417-.417v-7.917a4.166 4.166 0 1 1 8.333 0v7.917c0 .23.187.417.417.417h9.583c.92 0 1.667-.747 1.667-1.667v-16.25c0-.23.187-.417.417-.417h2.083a1.667 1.667 0 0 0 1.178-2.845zM20 20a4.166 4.166 0 1 1 0-8.333A4.166 4.166 0 1 1 20 20z",
    fill: "#fff"
  }));
};

HomeLogo.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_dream_job_front_styles.styles);

var DreamJobFrontComponent = function DreamJobFrontComponent(_ref) {
  var data = _ref.data;
  var remoteFrequency = data.remoteFrequency,
      places = data.places;
  var classes = useStyles();
  var content = (0, _react.useMemo)(function () {
    if (remoteFrequency === _remote_utils.REMOTE_FREQUENCY.FULL_TIME) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_front_vector.ProfileCardFrontVector, {
        customClasses: {
          container: classes.logo
        },
        vector: HomeLogo
      }), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
        customClasses: {
          container: classes.typography
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: 'DreamJob.Front.RemoteFulltime',
        defaultMessage: "I want to work remotely"
      })));
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_front_vector.ProfileCardFrontVector, {
      customClasses: {
        container: classes.logo
      },
      vector: HomeLogo
    }), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
      customClasses: {
        container: classes.typography
      }
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: 'DreamJob.Front.Cities',
      defaultMessage: "I want to work in {cities}",
      values: {
        cities: places.slice(0, 2).map(function (_ref2) {
          var name = _ref2.name;
          return name;
        }).join(', ')
      }
    })));
  }, [remoteFrequency, places]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, content)), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, null, "Discover my dream job")));
};

var DreamJobFront = DreamJobFrontComponent;
exports.DreamJobFront = DreamJobFront;