
import React from 'react'
import './Info.css'
import { Grid, Item, Button } from 'semantic-ui-react'

class Circle extends React.Component {
  state = {
      visible: false
  }

  show = () => {
      console.log('moi')
      this.setState({
          visible: !this.state.visible
      })
  }
  render() {

      return (
          <Grid>
              <Grid.Row className='circle2' style={{ display: this.state.visible ? '' : 'none' }}>
                  <Grid.Column width={3}>
                      
                  </Grid.Column>
                  <Grid.Column  width={10}>
                      <Item.Group>
                          <Item >
                              <Item.Content>
                                  <Item.Header> <br/><h2 style={{color:'white', textShadow: '2px 2px black'}}>Jotain</h2> </Item.Header>
                                  <Item.Description>
                                      <h3 style={{color:'white', textShadow: '2px 2px black'}}>
                                      Liiteri on palvelu, joka tarjoaa kiinteään hintaan kaikki kodin huoltoon tarvittavat tuotteet. 
                                      Lisäksi Liiteri tarjoaa mahdollisuuden helppoon korjauspalveluun</h3>
                                  </Item.Description>
                                  <Item.Extra>
                                      <br/>
                                      <Button color='orange' onClick={this.show}>Paikkaa kolo</Button>
                                  </Item.Extra>
                              </Item.Content>
                          </Item>
                      </Item.Group>
                  </Grid.Column>
                  
              </Grid.Row>
              <Grid.Row className='circle' style={{background: this.props.color, display: this.state.visible ? 'none' : ''}}>
                  <Grid.Column width={3}>
                      
                  </Grid.Column>
                  <Grid.Column  width={10}>
                      <Item.Group>
                          <Item >
                              <Item.Content>
                                  <Item.Header><br/> <h2>{this.props.head}</h2></Item.Header>
                                  <Item.Meta>{this.props.description}</Item.Meta>
                                  <Item.Description>
                                      <br/>
                                      <b>{this.props.text}</b>
                                  </Item.Description>
                                  <Item.Extra>
                                      <br/>
                                      <Button inverted color='orange' onClick={this.show}>Lisätietoa</Button>
                                      
                                      
                                  </Item.Extra>
                              </Item.Content>
                          </Item>
                      </Item.Group>
                  </Grid.Column>
              </Grid.Row>
              
          </Grid>)
  }
}
export default Circle
