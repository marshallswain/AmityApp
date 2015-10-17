/**
 * Console Emulator
 * We have to convert arguments into arrays, and do this explicitly as webkit (chrome) hates function references, and arguments cannot be passed as is
 * @version 1.0.3
 * @date August 31, 2010
 * @since 0.1.0-dev, December 01, 2009
 * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
 * @author Benjamin "balupton" Lupton {@link http://balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
 * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function($){"undefined"==typeof window.console&&(window.console={}),"undefined"==typeof window.console.emulated&&("function"==typeof window.console.log?window.console.hasLog=!0:("undefined"==typeof window.console.log&&(window.console.log=function(){}),window.console.hasLog=!1),"function"==typeof window.console.debug?window.console.hasDebug=!0:("undefined"==typeof window.console.debug&&(window.console.debug=window.console.hasLog?function(){for(var e=["console.debug:"],n=0;n<arguments.length;n++)e.push(arguments[n]);window.console.log.apply(window.console,e)}:function(){}),window.console.hasDebug=!1),"function"==typeof window.console.warn?window.console.hasWarn=!0:("undefined"==typeof window.console.warn&&(window.console.warn=window.console.hasLog?function(){for(var e=["console.warn:"],n=0;n<arguments.length;n++)e.push(arguments[n]);window.console.log.apply(window.console,e)}:function(){}),window.console.hasWarn=!1),"function"==typeof window.console.error?window.console.hasError=!0:("undefined"==typeof window.console.error&&(window.console.error=function(){var e="An error has occured.";if(window.console.hasLog){for(var n=["console.error:"],t=0;t<arguments.length;t++)n.push(arguments[t]);window.console.log.apply(window.console,n),e="An error has occured. More information is available in your browser's javascript console."}for(var t=0;t<arguments.length&&"string"==typeof arguments[t];++t)e+="\n"+arguments[t];throw"undefined"!=typeof Error?new Error(e):e}),window.console.hasError=!1),"function"==typeof window.console.trace?window.console.hasTrace=!0:("undefined"==typeof window.console.trace&&(window.console.trace=function(){window.console.error("console.trace does not exist")}),window.console.hasTrace=!1),window.console.emulated=!0),jQuery.browser||(jQuery.uaMatch=function(e){e=e.toLowerCase();var n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}},matched=jQuery.uaMatch(navigator.userAgent),browser={},matched.browser&&(browser[matched.browser]=!0,browser.version=matched.version),browser.chrome?browser.webkit=!0:browser.webkit&&(browser.safari=!0),jQuery.browser=browser),/**
     * Append a Stylesheet to the DOM
     * @version 1.1.0
     * @date July 23, 2010
     * @since 1.0.0, June 30, 2010
     * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
     * @author Benjamin "balupton" Lupton {@link http://balupton.com}
     * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
     * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
     */
$.appendStylesheet=$.appendStylesheet||function(e,n){if(!document.body)return setTimeout(function(){$.appendStylesheet.apply($,[e,n])},500),$;var t="stylesheet-"+e.replace(/[^a-zA-Z0-9]/g,""),o=$("#"+t);if("undefined"==typeof n&&(n=!1),1===o.length){if(!n)return $;o.remove()}var i=document.getElementsByTagName($.browser.safari?"head":"body")[0],r=document.createElement("link");return r.type="text/css",r.rel="stylesheet",r.media="screen",r.href=e,r.id=t,i.appendChild(r),$},/**
     * Append a Script to the DOM
     * @version 1.1.0
     * @date July 23, 2010
     * @since 1.0.0, June 30, 2010
     * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
     * @author Benjamin "balupton" Lupton {@link http://balupton.com}
     * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
     * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
     */
$.appendScript=$.appendScript||function(e,n){if(!document.body)return setTimeout(function(){$.appendScript.apply($,[e,n])},500),$;var t="script-"+e.replace(/[^a-zA-Z0-9]/g,""),o=$("#"+t);if("undefined"==typeof n&&(n=!1),1===o.length){if(!n)return $;o.remove()}var i=document.getElementsByTagName($.browser.safari?"head":"body")[0],r=document.createElement("script");return r.type="text/javascript",r.src=e,r.id=t,i.appendChild(r),$},/**
     * Get all elements within ourself which match the selector, and include ourself in the search
     * @version 1.0.0
     * @date June 30, 2010
     * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
     * @author Benjamin "balupton" Lupton {@link http://balupton.com}
     * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
     * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
     */
$.fn.findAndSelf=$.fn.findAndSelf||function(e){var n=$(this);return n.find(e).andSelf().filter(e)},/**
     * Add the String replace method to the Number prototype
     * This is to fix an error with jQuery v1.4.2 when $('#el').val() contains a numeric value on Firefox.
     * Error is here: http://getsatisfaction.com/balupton/topics/word_jumbles
     * @version 1.0.0
     * @date September 01, 2010
     * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
     * @author Benjamin "balupton" Lupton {@link http://balupton.com}
     * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
     * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
     */
Number.prototype.replace=Number.prototype.replace||function(){var e=String(this);return e.replace.apply(this,arguments)},/**
     * jQuery SyntaxHighlighter
     * @version 1.0.1-beta
     * @date August 16, 2010
     * @since 0.1.0-dev, July 23, 2010
     * @package jquery-syntaxhighlighter {@link http://balupton.com/projects/jquery-syntaxhighlighter}
     * @author Benjamin "balupton" Lupton {@link http://balupton.com}
     * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
     * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
     */
$.SyntaxHighlighter?window.console.warn("SyntaxHighlighter has already been defined..."):$.SyntaxHighlighter={config:{load:!0,highlight:!0,debug:!1,wrapLines:!0,lineNumbers:!0,stripEmptyStartFinishLines:!0,stripInitialWhitespace:!0,alternateLines:!1,defaultClassname:"highlight",theme:"balupton",themes:["balupton"],addSparkleExtension:!0,prettifyBaseUrl:"js",baseUrl:"css"},init:function(e){var n=this,t=n.config,o=t.baseUrl;return"/"===o[o.length-1]&&(t.baseUrl=o.substr(0,o.length-2)),delete o,$.extend(!0,n.config,e||{}),$.Sparkle&&$.Sparkle.addExtension("syntaxhighlighter",function(){$(this).syntaxHighlight()}),$.fn.syntaxHighlight=$.fn.SyntaxHighlight=n.fn,t.load&&n.load(),t.highlight&&n.highlight(),this},load:function(){var e=this,n=e.config,t=n.prettifyBaseUrl,o=n.baseUrl,i=n.themes;return e.loaded()||($.appendScript(t+"/lib/prettify.js"),$.appendStylesheet(o+"/prettify.css"),$.appendStylesheet(o+"/prettify/style.css"),$.each(i,function(e,n){$.appendStylesheet(o+"/prettify/theme-"+n+".css")}),$.browser.msie&&$.appendStylesheet(o+"/prettify/ie.css"),e.loadedExtras=!0),this},loadedExtras:!1,loaded:function(){return"undefined"!=typeof prettyPrint&&this.loadedExtras},determineLanguage:function(e){for(var n=null,t=/lang(uage)?-([a-z0-9]+)/g,o=t.exec(e);null!==o;)n=o[2],o=t.exec(e);return n},fn:function(){var e=$.SyntaxHighlighter,n=e.config,t=$(this);return $.SyntaxHighlighter.highlight({el:t}),this},highlight:function(e){"object"!=typeof e&&(e={});var n=this,t=n.config,o=e.el||!1;if(o instanceof jQuery||(o=$("body")),!n.loaded())return t.debug&&window.console.debug("SyntaxHighlighter.highlight: Chosen SyntaxHighlighter is not yet defined. Waiting 1200 ms then trying again."),void setTimeout(function(){n.highlight.apply(n,[e])},1200);var i=t.defaultClassname,r="";"array"==typeof i?(r="."+i.join(",."),i=i.join(" ")):(i=String(i),r="."+i.replace(" ",",.")),"."!==r&&i||(window.console.error("SyntaxHighlighter.highlight: Invalid defaultClassname.",[this,arguments],[t.defaultClassname]),window.console.trace());var s=o.findAndSelf("code,pre").filter("[class*=lang],"+r).filter(":not(.prettyprint)");return s.css({"overflow-y":"visible","overflow-x":"visible","white-space":"pre"}).addClass("prettyprint "+i).each(function(){var e=$(this),t=e.attr("class"),o=n.determineLanguage(t);e.addClass("lang-"+o)}),t.lineNumbers&&s.addClass("linenums"),t.theme&&s.addClass("theme-"+t.theme),t.alternateLines&&s.addClass("alternate"),prettyPrint(),t.stripEmptyStartFinishLines&&s.find("li:first-child > :first-child, li:last-child > :first-child").each(function(){var e=$(this),n=e.html(),t=/^([\r\n\s\t]|\&nbsp;)*$/.test(n),o=e.parent(),i=e.siblings();if(t&&(0===i.length||1===i.length&&i.filter(":last").is("br"))){var o=e.parent(),r=o.val();o.next().val(r),o.remove()}}),t.stripInitialWhitespace&&s.find("li:first-child > :first-child").each(function(){var e=$(this),n=e.html(),t=n.match(/^(([\r\n\s\t]|\&nbsp;)+)/)||[],o=t[1]||"";o.length&&e.parent().siblings().children(":first-child").add(e).each(function(){var e=$(this),n=e.html();n=n.replace(new RegExp("^"+o,"gm"),""),e.html(n)})}),s.css(t.wrapLines?{"overflow-x":"hidden","overflow-y":"hidden","white-space":"pre-wrap","max-height":"none"}:{"overflow-x":"auto","overflow-y":"auto","white-space":"normal","max-height":"500px"}),this}}});