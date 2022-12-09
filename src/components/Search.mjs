// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Icon from "./Icon.mjs";
import * as Next from "../bindings/Next.mjs";
import * as Util from "../common/Util.mjs";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as ReactDom from "react-dom";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as React$1 from "@docsearch/react";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

var apiKey = "d3d9d7cebf13a7b665e47cb85dc9c582";

var indexName = "rescript-lang";

var appId = "BH4D9OD16A";

function Search(Props) {
  var match = React.useState(function () {
        return /* Inactive */1;
      });
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          var isEditableTag = function (el) {
            var match = el.tagName;
            switch (match) {
              case "INPUT" :
              case "SELECT" :
              case "TEXTAREA" :
                  return true;
              default:
                return false;
            }
          };
          var focusSearch = function (e) {
            var el = document.activeElement;
            if (el !== undefined) {
              var el$1 = Caml_option.valFromOption(el);
              if (isEditableTag(el$1) || el$1.isContentEditable) {
                return ;
              }
              
            }
            Curry._1(setState, (function (param) {
                    return /* Active */0;
                  }));
            e.preventDefault();
          };
          var handleGlobalKeyDown = function (e) {
            var match = e.key;
            switch (match) {
              case "/" :
                  return focusSearch(e);
              case "Escape" :
                  return Curry._1(setState, (function (param) {
                                return /* Inactive */1;
                              }));
              case "k" :
                  if (e.ctrlKey || e.metaKey) {
                    return focusSearch(e);
                  } else {
                    return ;
                  }
              default:
                return ;
            }
          };
          window.addEventListener("keydown", handleGlobalKeyDown);
          return (function (param) {
                    window.addEventListener("keydown", handleGlobalKeyDown);
                  });
        }), [setState]);
  var onClick = function (param) {
    Curry._1(setState, (function (param) {
            return /* Active */0;
          }));
  };
  var onClose = React.useCallback((function (param) {
          Curry._1(setState, (function (param) {
                  return /* Inactive */1;
                }));
        }), [state]);
  var tmp;
  if (state) {
    tmp = null;
  } else {
    var element = document.querySelector("body");
    tmp = (element == null) ? null : ReactDom.createPortal(React.createElement(React$1.DocSearchModal, {
                appId: appId,
                indexName: indexName,
                apiKey: apiKey,
                transformItems: (function (items) {
                    return items.map(function (item) {
                                var url;
                                try {
                                  url = Util.Url.make(item.url).pathname;
                                }
                                catch (raw_obj){
                                  var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
                                  if (obj.RE_EXN_ID === Js_exn.$$Error) {
                                    var m = obj._1.message;
                                    if (m !== undefined) {
                                      console.error("Failed to constructor URL" + m);
                                      url = item.url;
                                    } else {
                                      url = item.url;
                                    }
                                  } else {
                                    throw obj;
                                  }
                                }
                                return {
                                        objectID: item.objectID,
                                        content: item.content,
                                        url: url,
                                        url_without_anchor: item.url_without_anchor,
                                        type: item.type,
                                        anchor: item.anchor,
                                        hierarchy: item.hierarchy
                                      };
                              });
                  }),
                hitComponent: (function (param) {
                    return React.createElement(Next.Link.make, {
                                href: param.hit.url,
                                children: React.createElement("a", undefined, param.children)
                              });
                  }),
                onClose: onClose
              }), element);
  }
  return React.createElement("button", {
              type: "button",
              onClick: onClick
            }, React.createElement(Icon.MagnifierGlass.make, {
                  className: "text-gray-60 w-5 h-5"
                }), tmp);
}

var make = Search;

export {
  apiKey ,
  indexName ,
  appId ,
  make ,
}
/* Icon Not a pure module */
