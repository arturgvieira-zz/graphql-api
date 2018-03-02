import React, { Component } from 'react';
import './display.css';
// GraphQL Config
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Main extends Component {
    render() {
        const { query } = this.props;
        return <div className="Display">{query.hello || 'Nothing Yet!'}</div>;
    }
}

// We use the gql tag to parse our query string into a query document
const hello = gql`
    query {
        hello
    }
`;

export default graphql(hello, { name: 'query' })(Main);
