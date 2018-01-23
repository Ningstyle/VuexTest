/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-22 14:51:11
 * @version $Id$
 */

var url=window.location.href;
function getUrlParam(name, href, noDecode) {
    var re = new RegExp('(?:\\?|#|&)' + name + '=([^&]*)(?:$|&|#)', 'i'),
        m = re.exec(href);
    var ret = m ? m[1] : '';
    return !noDecode ? decodeURIComponent(ret) : ret;
}
