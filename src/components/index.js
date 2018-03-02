import React, { Component } from 'react';
import './main.css';
// GraphQL Config
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//Components
import Display from './display';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleChange = e => {
        this.setState({ input: e.target.value });
    };

    handleClick = e => {
        this.props
            .mutate({
                variables: { message: this.state.input }
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };

    render() {
        const { input } = this.state;
        return (
            <div className="Main">
                <div>
                    <input
                        value={input}
                        onChange={this.handleChange}
                        placeholder="Write a message."
                    />
                    <button onClick={this.handleClick}>Save</button>
                </div>
                <Display />
            </div>
        );
    }
}

const writeHello = gql`
    mutation writeHello($message: String!) {
        writeHello(message: $message)
    }
`;

export default graphql(writeHello)(Main);
