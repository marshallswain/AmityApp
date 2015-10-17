import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './database.less!';
import template from './database.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the page-database component'
    }
  }
});

export default Component.extend({
  tag: 'page-database',
  viewModel: ViewModel,
  template
});