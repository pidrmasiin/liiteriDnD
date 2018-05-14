import React from 'react'
import './Info.css'
import { Grid, Image, Header, Form, Message, Button, Icon, Item, Checkbox } from 'semantic-ui-react'
import Circle from './Circle'
import Language from './Language'
import userService from '../services/user'



class Info extends React.Component {
    state = {
        date: Date,
        visible: false,
        checkbox: false,
        info: false,
        phone: '',
        email: ''
    }

    componentDidMount = () => {
        this.setState({
            date: new Date()
        })
        setTimeout(() => {
            this.setState({
                info: false
            })
           }, 6000);
        setTimeout(() => {
            this.addUserAndRenderHome()
           }, 90000);
    }

    info = () => {
        this.setState({
            info: !this.state.info
        })
    } 

    add = (e) => {
        e.preventDefault()
        if(document.getElementById("checkbox").checked){
            this.setState({
                checkbox: false}
            )
            this.setState({
                visible: true,
                phone: e.target.phone.value,
                email: e.target.email.value
            })
           setTimeout(() => {
            this.addUserAndRenderHome()
           }, 4000);
        } else {
            this.setState({
                checkbox: true}
            )
        }
    }
    
    addUserAndRenderHome = () => {
        const user ={
            date: this.state.date,
            phone: this.state.phone,
            email: this.state.email
        }
        userService.addUser(user)
        if(this.props.cyclist){
            window.location.assign('/cyclist')
        } else {
            window.location.assign('/lost')
        }
    }

  
    
    render() {
        return (
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={12}>
                    <Item.Group>
                          <Item >
                              <Item.Content>
                              <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                                  <Item.Header><h2 style={{textAlign: 'center'}}>{this.props.language.header} </h2></Item.Header>
                              </Item.Content>
                          </Item>
                      </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='top'>
                        <Grid.Column width={8}>
                            <Circle
                                head='24/7'
                                description=''
                                text={this.props.language.circle1}
                                color='pink'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={2}>
                    </Grid.Column>
                        <Grid.Column width={6}>
                        {this.state.info &&
                        <Header style={{border: "3px solid orange"}}>
                           {this.props.language.info}</Header>
                        }

                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Circle
                                head='On the go...'
                                text={this.props.language.circle2}
                                description=''
                                color='#ccffff'
                                button={true}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column width={9}>
                            <Circle
                                head='Contact'
                                description=''
                                text={this.props.language.circle3}
                                color='#ffff66'
                            />
                        </Grid.Column>
                        
                        <Grid.Column width={6}>
                            <Form success onSubmit={this.add}>
                                <Form.Field>
                                    <label>Phone</label>
                                    <input placeholder='404-12456879' name='phone'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder='meikä@mandoliini.fi' name='email'/>
                                </Form.Field>
                                <Message style={{ display: this.state.visible ? '' : 'none' }}
                                    success
                                    header='Form Completed'
                                    content="You're all signed up for the newsletter"
                                />
                                  <Form.Field control={Checkbox} id="checkbox" label={<label>I accept <a href='/privacy'>the privacy policy</a></label>}/>
                                  {this.state.checkbox && <Message style={{background: 'tomato'}}
                                    header='Accept the privacy policy first'
                                />}
                                <Button positive type="submit">Submit</Button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={14}>
                       
                            <br/>
                           <Button animated attached='bottom' color='orange' onClick={this.info}>
                           <Button.Content visible> <Icon name='unhide' /></Button.Content>
                           <Button.Content hidden>
                           <Icon name='hide' />
                           </Button.Content>
                           </Button>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                    </Grid.Row>
                   <Language language={this.props.language}/>
                </Grid>
               
        )
    }
}


export default Info
