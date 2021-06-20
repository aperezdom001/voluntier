import React from 'react';
import {Card, Button, Container, Modal, Icon, Input, Header} from 'semantic-ui-react'

function Opportunities() {
    const [open, setOpen] = React.useState(false)

    return(
        <>
        <br/>
        <Container textAlign='left'>
        <Header as='h2' dividing textAlign='left'>
            Welcome to the volunteer opportunities page
            <Header.Subheader>Search for opportunities and volunteer at the press of a button!</Header.Subheader>
        </Header>
            <Input action='Search' placeholder='Keyword/zipcode'/>
        <br/>
        <br/>
        <Card.Group itemsPerRow={4}>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>Hackathon Mentors</Card.Header>
                    <Card.Meta>55 volunteers requested</Card.Meta>
                    <Card.Description>Signup to help mentor/assist non-binary and women in their first hackathon!</Card.Description>
                </Card.Content>
                    <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>Poetry Slam Co-host</Card.Header>
                    <Card.Meta>1 volunteer requested</Card.Meta>
                    <Card.Description>Are you a poet and you know it? Come help others discover their poetic talents!</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>Gardening Help Wanted</Card.Header>
                    <Card.Meta>10 volunteers requested</Card.Meta>
                    <Card.Description>Meeting at local park to plant native flowers for bees!</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>5k Marathon for Cancer</Card.Header>
                    <Card.Meta>400 volunteers requested</Card.Meta>
                    <Card.Description>Run 5k for cancer treatment and research! Register at random5k4cancer.site</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>Houses for Homeless</Card.Header>
                    <Card.Meta>30 volunteers requested</Card.Meta>
                    <Card.Description>Help us build homes for those without--locations all over XYZ county to help those in need.</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>School donation drive</Card.Header>
                    <Card.Meta>20 volunteers requested</Card.Meta>
                    <Card.Description>Donate or help us setup a donation drive for your local school!</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>Corn collector</Card.Header>
                    <Card.Meta>12 volunteers requested</Card.Meta>
                    <Card.Description>I have a large field full of corn, but need some help picking it.</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>Oil changing instructor</Card.Header>
                    <Card.Meta>1 volunteer requested</Card.Meta>
                    <Card.Description>Please help me learn how to change the oil in my car.</Card.Description>
                </Card.Content>
                <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size='small'
                        trigger={<Button color='green'>Volunteer</Button>}
                    >
                        <Header>
                            <Icon name='star'/>
                            Thank you for volunteering!
                        </Header>
                        <Modal.Content>
                            <p>
                                We appreciate your generosity and time in volunteering! Your contact information
                                has been sent to the opportunity poster, and they will contact you with
                                any additional details
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='green' inverted onClick={() => setOpen(false)}>
                                <Icon name='checkmark' /> Close
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Card>

        </Card.Group>
        </Container>
        </>
        );
}

export default Opportunities;
