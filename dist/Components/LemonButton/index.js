var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { ChildrenIconWrapper, StyledButton } from './styles';
// style
import { ThemeProvider } from 'styled-components';
import { primary, secondary } from './theme';
// helpers
import { SetIcon } from './icon';
export function LemonButton(_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, children = _a.children, icon = _a.icon, props = __rest(_a, ["color", "children", "icon"]);
    // themes
    var theme = {
        primary: primary,
        secondary: secondary
    };
    return (_jsx(ThemeProvider, __assign({ theme: theme[color] }, { children: _jsx(StyledButton, __assign({}, props, { children: icon && children
                ? _jsxs(ChildrenIconWrapper, { children: [children, SetIcon(icon)] }, void 0)
                : children }), void 0) }), void 0));
}
//# sourceMappingURL=index.js.map