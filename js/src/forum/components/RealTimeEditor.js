import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';
/*import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/addon/display/autorefresh';*/

/* global m */

export default class RealTimeEditor extends Page {
  view() {
    return m('.IndexPage', [
      IndexPage.prototype.hero(),
      m(
        '.container',
        m('.sideNavContainer', [
          m('nav.IndexPage-nav.sideNav', m('ul', listItems(IndexPage.prototype.sidebarItems().toArray()))),
          m('.IndexPage-results.sideNavOffset', [
            m(
              'div',
              { className: 'hometitle' },
              m('h1', { className: 'maintitle' }, app.translator.trans('flarum-ext-realtimecode.forum.htmleditor'))
            ),
            m('div', { className: 'mainpar' }, m('p', { className: 'desc' }, app.translator.trans('flarum-ext-realtimecode.forum.description'))),
            m('div', { className: 'main' }, [
              m('textarea', {
                className: 'contedit',
                id: 'editortext',
                name: 'editortext',
                onkeyup: refresh,
                placeholder: 'Type or paste your code here...',
              }),
              m(
                'div',
                { className: 'hometitle' },
                m('h1', { className: 'outptitle' }, app.translator.trans('flarum-ext-realtimecode.forum.outputtitle'))
              ),
              m('iframe', { id: 'output' }),
            ]),
          ]),
        ])
      ),
    ]);
  }
}
function refresh() {
  document.getElementById('output').srcdoc = document.getElementById('editortext').value;
}
