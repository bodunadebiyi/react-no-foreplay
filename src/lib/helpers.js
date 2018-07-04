import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';

export function toNumber(number){
    return parseFloat(number).toFixed(2).replace(/\d(?=(\d{3})+[.\0]+)/g, (x) => x + ',').substring(-2).slice(0, -3);
}

export function toRawNumber(formattedNumber) {
    return +formattedNumber.replace(/,/g, '');
}

export function getUniqueKey() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export function connectToStore(component, stateFields=null) {
    function mapStateToProps(state) {
        return getMappedStates(state, stateFields);
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators(actionCreators, dispatch);
    }

    function getMappedStates(state, fieldsToMap) {
        let mapping = {};

        if (fieldsToMap) {
            fieldsToMap.forEach(element => {
                return mapping[element] = state[element];
            });
        } else {
            Object.keys(state).forEach(element => {
                return mapping[element] = state[element];
            });
        }

        return mapping;
    }

    return connect(mapStateToProps, mapDispatchToProps)(component);
}

export const capitalize = uncapitalizedText => {
    return uncapitalizedText[0].toUpperCase() + uncapitalizedText.slice(1);
}

export const setTitle = (title) => {
    document.title = title;
}

export function slugify(unslugified) {
    return unslugified.replace(/[^\w]/gi, '').replace(/ /g, '-');
}

export function toCurrency(currency) {
    return `${currency}`.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function quarterFractionToString(number) {
    let fractionString = "";
    switch(number) {
      case "25":
        fractionString = String.fromCharCode(188); break;
      case "50":
        fractionString = String.fromCharCode(189); break;
      case "75":
        fractionString = String.fromCharCode(190); break;
      default: 
        fractionString = `.${number}`.substring(0, 3);
    }

    return fractionString;
}

export function str2TitleCase(Str) {
    return Str.toLowerCase().split('_').map(i => i[0].toUpperCase() + i.substring(1)).join(' ');
}

export function titleCase2Params(Title) {
    return Title.toUpperCase().split(' ').map(i => i[0].toUpperCase() + i.substring(1)).join('_');
}

export function checkBrowser() {
    
    return({
        // Opera 8.0+
        isOpera: (!!window.opr) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
        // Firefox 1.0+
        isFirefox: typeof InstallTrigger !== 'undefined',
        // At least Safari 3+: "[object HTMLElementConstructor]"
        isSafari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
        // Internet Explorer 6-11
        isIE: !!document.documentMode,
        // Edge 20+
        isEdge: !document.documentMode && !!window.StyleMedia,
        // Chrome 1+
        isChrome: !!window.chrome && !!window.chrome.webstore
    });
}

export function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
 
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return null;
}

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}  

export function deleteCookie(cname, domain) {
    var expiredDate = "Thu, 01 Jan 1970 00:00:00 UTC";
    var expires = 'expires=' + expiredDate;
    document.cookie = cname + '=;' +expires + ';path=/;domain=' + domain;
}

export function getSelectedText() {
    let text = '';

    if (typeof window.getSelection !== "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection !== "undefined" && document.selection.type === "Text") {
        text = document.selection.createRange().text;
    }

    return text;
}

export function setCaretPosition(ctrl, pos) {
    var range = null;
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    } else if (ctrl.createTextRange) {
        range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    } else {
        var sel = window.getSelection();
        range = document.createRange();

        range.setStart(ctrl.childNodes[0], pos);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        ctrl.focus();
    }
}