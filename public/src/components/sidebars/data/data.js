import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './data.less!';
import template from './data.stache!';

export const ViewModel = Map.extend({
  define: {
    dataSideScrollPanel: {
      value: 'servers'
    },
    serverName: {
      value: null
    }
  },
  setSideScrollPanel(panelName, serverName){
    this.attr('serverName', serverName);
    this.attr('dataSideScrollPanel', panelName);
  }
});

export default Component.extend({
  tag: 'data-sidebar',
  viewModel: ViewModel,
  template
});