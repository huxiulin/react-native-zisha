/**
 * 判断为空
 */

'use strict';

let isEmptyObject = (e) => {
    if (null === e || '' === e || [] === e || {} === e || typeof e == 'undefined') {
        return true;
    }
    try {
        if (Object.keys(e).length < 1) {
            return true;
        }
    } catch (error) {
    }
    let t;
    for (t in e)
        return !1;
    return !0
}
export default isEmptyObject;