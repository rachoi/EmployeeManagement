import React, { Component } from 'react';
import {Row, Col, Card, Form, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        id:'', password:'', error:''
    };

    credentialChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };



    resetLoginForm = () => {
        this.setState(() => this.initialState);
    };

    render() {
        const {id, password, error} = this.state;

        return (
            <Row className="justify-content-md-center" style={{marginTop: "10px"}}>
                <Col xs={5}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header style={{marginTop: "10px"}}>
                            <i class="fas fa-sign-in-alt"></i> Login
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-id-card" style={{marginTop: "3px", marginBottom: "3px"}}></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="text" name="id" value={id} onChange={this.credentialChange}
                                            className={"bg-dark text-white"} placeholder="Enter Employee ID" style={{marginBottom: "10px", marginLeft: "10px"}}/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><i class="fas fa-lock" style={{marginTop: "3px", marginBottom: "3px", marginRight: "2px", marginLeft: "2px"}}></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete="off" type="password" name="password" value={password} onChange={this.credentialChange}
                                            className={"bg-dark text-white"} placeholder="Enter Password" style={{marginLeft: "10px"}} />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"text-align":"right"}}>
                            <Button size="sm" type="button" variant="success"
                                disabled={this.state.id.length === 0 || this.state.password.length === 0}>
                                <i class="fas fa-sign-in-alt"></i> Login
                            </Button>{' '}
                            <Button size="sm" type="button" variant="info" onClick={this.resetLoginForm}
                                disabled={this.state.id.length === 0 && this.state.password.length === 0 && this.state.error.length === 0}>
                                <i class="fas fa-undo"></i> Undo
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
}



export default (Login);