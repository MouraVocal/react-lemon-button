import { jsx as _jsx } from "react/jsx-runtime";
import ArrowRightIcon from './icons/arrow-right.svg';
import CheckIcon from './icons/check.svg';
import RefreshIcon from './icons/refresh.svg';
export var SetIcon = function (icon) {
    if (icon === 'arrow-right') {
        return _jsx(ArrowRightIcon, {}, void 0);
    }
    if (icon === 'check') {
        return _jsx(CheckIcon, {}, void 0);
    }
    if (icon === 'refresh') {
        return _jsx(RefreshIcon, {}, void 0);
    }
};
//# sourceMappingURL=icon.js.map