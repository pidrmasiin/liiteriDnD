import React from 'react';
import userService from '../services/user'
import { Table } from 'semantic-ui-react'

class Data extends React.Component {

    state = {
        users: []
    }

    componentWillMount = async () => {
        const all = await userService.getAll()
        console.log('all', all)
        this.setState({
            users: all
        })
    }
    render() {
        return (
            <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date & Time (GMT +00)</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
                {this.state.users.map(x =>  <Table.Row key={x.id}>
                <Table.Cell>
                {x.date}</Table.Cell>
                <Table.Cell>{x.phone}</Table.Cell>
                <Table.Cell>{x.email}</Table.Cell>
              </Table.Row>)}
             
            </Table.Body>
          </Table>
               
        )
    }
}

export default Data;