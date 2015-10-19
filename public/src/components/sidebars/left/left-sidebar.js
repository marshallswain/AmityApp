import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './left-sidebar.less!';
import template from './left-sidebar.stache!';

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
  tag: 'left-sidebar',
  viewModel: ViewModel,
  template
});