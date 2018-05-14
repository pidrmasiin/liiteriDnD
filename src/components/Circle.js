
import React from 'react'
import './Info.css'
import { Grid, Item, Button } from 'semantic-ui-react'

class Circle extends React.Component {
  state = {
      visible: false
  }

  show = () => {
      this.setState({
          visible: !this.state.visible
      })
  }
  render() {

      return (
          <Grid>
              <Grid.Row >
                  <Grid.Column width={3}>
                  </Grid.Column>
                  <Grid.Column className='circle2' style={{ display: this.state.visible ? '' : 'none' }} width={10}>
                      <Item.Group>
                          <Item>
                              <Item.Content>
                                  <Item.Header> <br/><h2 style={{color:'white', textShadow: '2px 2px black'}}>Keep moving</h2> </Item.Header>
                                  <Item.Description>
                                      <br/>
                                      <h3 style={{color:'white', textShadow: '2px 2px black'}}>
                                      With us you never stop moving. Continue your journey with an electric bike that youn cant rent from us.</h3>
                                      <br/>
                                  </Item.Description>
                                  <Item.Extra>
                                      <br/>
                                      <Button color='orange' onClick={this.show}>Fix the hole</Button>
                                      <br/>
                                      <br/>
                                  </Item.Extra>
                              </Item.Content>
                          </Item>
                      </Item.Group>
                  </Grid.Column>
                  
              </Grid.Row>
              <Grid.Row >
                  <Grid.Column width={3}>
                      
                  </Grid.Column>
                  <Grid.Column className='circle' style={{background: this.props.color, display: this.state.visible ? 'none' : ''}} width={10}>
                      <Item.Group >
                          <Item >
                              <Item.Content>
                                  <Item.Header><br/> <h1>{this.props.head}</h1></Item.Header>
                                  <Item.Meta>{this.props.description}</Item.Meta>
                                  <Item.Description>
                                      <h2 style={{color: 'grey', height:'100%'}}>{this.props.text}</h2>
                                      <br/>
                                  </Item.Description>
                                  {this.props.button &&
                                  <Item.Extra>
                                      <br/>
                                      <Button inverted color='orange' onClick={this.show}>More info</Button>
                                  </Item.Extra>}
                                  <br/>
                                      <br/>
                              </Item.Content>
                          </Item>
                      </Item.Group>
                  </Grid.Column>
              </Grid.Row>
              
          </Grid>)
  }
}
export default Circle
