import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './header.less!';
import template from './header.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the amity-header component'
    }
  }
});

export default Component.extend({
  tag: 'amity-header',
  viewModel: ViewModel,
  template
});