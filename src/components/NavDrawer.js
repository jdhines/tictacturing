import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import {NavToggleButton} from './styled/NavDrawer';

class NavDrawer extends Component {
  state={
    open:true,
    drawerWidth:250
  };

  toggle = () => {
    this.setState((prevState,props) => {
      return {
        open: !prevState.open,
        drawerWidth: prevState.drawerWidth
      }
    })
  }
  render() {
    return (
      <div>
          <NavToggleButton
            toggle={this.toggle}
            width={this.state.drawerWidth}
            open={this.state.open}
          />
          <Drawer
            open={this.state.open}
            width={this.state.drawerWidth}
          >
            <div style={{height:'200px', width:'100%', backgroundColor: 'palevioletred'}}>

            </div>
            <Divider />
            <Link to={'/'}>
              <MenuItem
                onTouchTap={this.toggle}
                primaryText="play"
              />
            </Link>
            <Link to="/profile">
            <MenuItem
                onTouchTap={this.toggle}
                primaryText="profile"
              />
            </Link>
          </Drawer>
      </div>
    )
  }
}

export default NavDrawer;
