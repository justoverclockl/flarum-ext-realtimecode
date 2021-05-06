import Page from "flarum/components/Page";
import IndexPage from "flarum/components/IndexPage";
import listItems from "flarum/helpers/listItems";

/* global m */

export function refresh(){
  document.getElementById('output').srcdoc = document.getElementById('editor-text').value;
}

export default class RealTimeEditor extends Page {

  view() {
    return m(".IndexPage", [
      IndexPage.prototype.hero(),
      m('.container', m('.sideNavContainer', [
        m('nav.IndexPage-nav.sideNav', m('ul', listItems(IndexPage.prototype.sidebarItems().toArray()))),
        m('.IndexPage-results.sideNavOffset',[
          m("div", {className:"hometitle"},
            m("h1", {className:"maintitle"},
              "Html Editor"
            )
          ),
          m("div", {className:"mainpar"},
            m("p", {className: "desc"},
              "This Html editor support HTML/Css code, simply write your code and see the result in real time in the output box"
            )
          ),
          m("div", {className:"main"},
            [
              m("textarea", {id:"editor-text",onkeyup:refresh,placeholder:"Type or paste your code here..."}),
              m("iframe", {id:"output"})
            ]
          )
        ]),
      ]))
    ]);
  }
}
