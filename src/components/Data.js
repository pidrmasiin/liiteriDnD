import React from 'react';
import { Table, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import userService from '../services/user';

import '../App.css';

class Data extends React.Component {
    state = {
      users: [],
    }

    componentWillMount = async () => {
      const all = await userService.getAll();
      console.log('all', all);
      this.setState({
        users: all,
      });
    }
    render() {
      const navStyle = {
        background: '#a3c2c2',
      };

      const linkStyle = {
        color: 'black',
      };
      return (
        <div className="liiteri">
          <Menu inverted style={navStyle}>
            <Menu.Item link>
              <Link style={linkStyle} to="/cyclist"> Cyclist</Link>
            </Menu.Item>
            <Menu.Item link>
              <Link style={linkStyle} to="/lost">Lost guy</Link>
            </Menu.Item>
            <Menu.Item link>
              <Link style={linkStyle} to="/info">Info</Link>
            </Menu.Item>

          </Menu>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date & Time (GMT +00)</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.users.map(x => (
                <Table.Row key={x.id}>
                  <Table.Cell>
                    {x.date}
                  </Table.Cell>
                  <Table.Cell>{x.phone}</Table.Cell>
                  <Table.Cell>{x.email}</Table.Cell>
                </Table.Row>))}

            </Table.Body>
          </Table>
        </div>
      );
    }
}

export default Data;
