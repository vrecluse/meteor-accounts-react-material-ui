global.React = require('react');
// see https://github.com/meteor/react-packages/issues/83

global.injectTapEventPlugin = require("react-tap-event-plugin");
MUI = require('material-ui');
MUI.Libs = {};
MUI.Libs.Menu = require('material-ui/lib/menus/menu');
MUI.Libs.MenuItem = require('material-ui/lib/menus/menu-item');
MUI.Libs.MenuDivider = require('material-ui/lib/menus/menu-divider');
