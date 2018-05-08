import React from 'react'
import './Info.css'
import { Grid, Image, Header, Form, Message, Button, Icon, Item } from 'semantic-ui-react'
import Circle from './Circle'
import userService from '../services/user'


class Info extends React.Component {
    state = {
        date: Date,
        visible: false,
        info: true,
        phone: '',
        email: ''
    }

    componentDidMount = () => {
        this.setState({
            date: new Date()
        })
        setTimeout(() => {
            this.addUserAndRenderHome()
           }, 15000);
    }

    info = () => {
        this.setState({
            info: !this.state.info
        })
    } 

    add = (e) => {
        e.preventDefault()
        this.setState({
            visible: true,
            phone: e.target.phone.value,
            email: e.target.email.value
        })
       setTimeout(() => {
        this.addUserAndRenderHome()
       }, 4000);
        

    }
    
    addUserAndRenderHome = () => {
        const user ={
            date: this.state.date,
            phone: this.state.phone,
            email: this.state.email
        }
        userService.addUser(user)
        if(this.props.cyclist){
            this.props.history.history.push('/cyclist')
        } else {
            window.location.assign('/')
        }
    }
    
    render() {
        return (
            <div className="liiteri">
                <Grid className='container'>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={12}>
                    <Item.Group>
                          <Item >
                              <Item.Content>
                              <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                                  <Item.Header><p style={{textAlign: 'center'}}>Hassle-free repair @Liiteri.  Liiteri.net provides repais services and houshold tools for rent. </p></Item.Header>
                              </Item.Content>
                          </Item>
                      </Item.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='top'>
                        <Grid.Column width={7}>
                            <Circle
                                head='24/7'
                                description=''
                                text='Repair service that never closes'
                                color='pink'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width={9}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Circle
                                head='On the go...'
                                text='Repair service easily accessible on your mobile'
                                description=''
                                color='#ccffff'
                                button={true}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Circle
                                head='Contact'
                                description=''
                                text='Leaves us your worries and contact information and we will take care of the rest'
                                color='#ffff66'
                            />
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={7}>
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
                                <Button positive type="submit">Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={15}>
                       
                            <br/>
                           <Button animated attached='bottom' color='orange' onClick={this.info}>
                           <Button.Content visible> <Icon name='unhide' /></Button.Content>
                           <Button.Content hidden>
                           <Icon name='hide' />
                           </Button.Content>
                           </Button>
                           {this.state.info &&
                        <Header>
                            I am a magic box where broken bikes become fixed. Access me whenever you need. Just register with your email address and you will receive a unique code on your mobile. This magic password will let you inside. 
                            Your bike will be safe in gentle hands and we will repair it as soon as possible. We will reach out to you when the wounds of your beloved bike have been healed.  
                            BTW! I also contain a great selection of household tools that are in your service around the clock with 9,99€ monthly. Sounds cool? Go check more information on our website liiteri.net.</Header>
                        }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
               
            </div>
        )
    }
}

export default Info
