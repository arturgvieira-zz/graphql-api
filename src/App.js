import React, { Component } from 'react';
import './App.css';
// Apollo Client Configuration
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Components
import Main from './components';
// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Main />
            </ApolloProvider>
        );
    }
}

export default App;
