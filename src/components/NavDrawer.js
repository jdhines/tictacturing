import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'


class NavDrawer extends Component {
  state={
    open:true
  };

  toggle = () => {
    this.setState((prevState,props) => {
      return {
        open: !prevState.open
      }
    })
  }
  render() {
    return (
      <div>
          <FloatingActionButton onTouchTap={this.toggle}>
            <Menu />
          </FloatingActionButton>
          <Drawer open={this.state.open}>
            <div style={{height:'200px', width:'100%', backgroundColor: 'palevioletred'}}>

            </div>
            <Divider />
            <Link to={'/'}>
              <MenuItem
                primaryText="play"
              />
            </Link>
            <Link to="/profile">
              <MenuItem
                primaryText="profile"
              />
            </Link>
          </Drawer>
      </div>
    )
  }
}

export default NavDrawer;
