import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const AppBarExampleIcon = () => (
  <AppBar
    title='Some title goes here'
    iconClassNameRight='muidocs-icon-navigation-expand-more'>
    <RaisedButton label='Stuff' primary style={{ backgroundColor: 'blue' }} />
  </AppBar>
);

export default AppBarExampleIcon;
