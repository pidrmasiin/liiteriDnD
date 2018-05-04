import React from 'react'
import './Info.css'
import { Grid, Image, Header, Form, Message, Button } from 'semantic-ui-react'
import Circle from './Circle'
import userService from '../services/user'


class Info extends React.Component {
    state = {
        date: Date,
        visible: false,
        phone: '',
        email: ''
    }

    componentWillMount = async () => {
        this.setState({
            date: new Date()
        })
        setTimeout(() => {
            this.addUserAndRenderHome()
           }, 90000);
    }

    add = async (e) => {
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
        window.location.assign('/')
    }

    

    render() {
        return (
            <div className="liiteri">
                <Grid className='container'>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}>
                        </Grid.Column>
                        <Grid.Column className='circleBase type3' width={6}>
                            <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Header>
                            I am a magic box where broken bikes become fixed. Access me whenever you need. Just register with your email address and you will receive a unique code on your mobile. This magic password will let you inside. 
                            Your bike will be safe in gentle hands and we will repair it as soon as possible. We will reach out to you when the wounds of your beloved bike have been healed.  
                            BTW! I also contain a great selection of household tools that are in your service around the clock with 9,99€ monthly. Sounds cool? Go check more information on our website liiteri.net.</Header>
                            <br/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='top'>
                        <Grid.Column width={7}>
                            <Circle
                                head='24/7'
                                description='Tuo tavarasi huoltoon juuri silloin kuin sinulle sopii'
                                text='Olemme aina auki ja järjestämme huollon puolestasi. Koska vain, milloin vain, aina helppoa.'
                                color='pink'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width={9}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Circle
                                head='Pysy liikkeessä!'
                                description='Jätä korjattava tuote Liiteriin ja ota alle sähköpyörä'
                                text='Liiterit sijaitsevat liikenteen solmukohdissa. Olet sitten matkalla töihin tai kauppaan, poikkea Liiteriin'
                                color='#ccffff'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Circle
                                head='Mikä Liiteri?'
                                description='Liiteri tarjoaa kestävän elämäntavan palveluna'
                                text='Säästät tilaa ja ympäristöä'
                                color='#ffff66'
                            />
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Form success onSubmit={this.add}>
                                <Form.Field>
                                    <label>Numero</label>
                                    <input placeholder='404-12456879' name='phone'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Sähköposti</label>
                                    <input placeholder='meikä@mandoliini.fi' name='email'/>
                                </Form.Field>
                                <Message style={{ display: this.state.visible ? '' : 'none' }}
                                    success
                                    header='Teit hyvän päätöksen!'
                                    content="Otamme sinuun yhteyttä mahdollisimman pian."
                                />
                                <Button positive type="submit">Hyväksy</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Info