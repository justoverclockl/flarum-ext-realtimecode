import Page from "flarum/components/Page";
import IndexPage from "flarum/components/IndexPage";
import listItems from "flarum/helpers/listItems";

export function refresh(){
  document.getElementById('output').srcdoc = document.getElementById('editor-text').value;
}

export default class RealTimeEditor extends Page {

  view() {
    return m(".IndexPage", [
      IndexPage.prototype.hero(),
      m('.container', m('.sideNavContainer', [
        m('nav.IndexPage-nav.sideNav', m('ul', listItems(IndexPage.prototype.sidebarItems().toArray()))),
        m('.IndexPage-results.sideNavOffset', m("div", {className: "main"},
          [
            m("textarea", {id: "editor-text", onkeyup: refresh, placeholder: "flarum is good"}),
            m("iframe", {id: "output"})
          ]
        )),
      ]))
    ]);
  }
}
