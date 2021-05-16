import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import RealTimeEditor from './components/RealTimeEditor';
import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-realtimecode', () => {});
app.routes.RealTimeEditor = {
  path: '/editor',
  component: RealTimeEditor,
};
extend(IndexPage.prototype, 'navItems', (navItems) => {
  navItems.add(
    'RealTimeEditor',
    <LinkButton href={app.route('RealTimeEditor')} icon="fas fa-laptop-code">
      {app.translator.trans('flarum-ext-realtimecode.forum.title')}
    </LinkButton>,
    100
  );
  return navItems;
});
