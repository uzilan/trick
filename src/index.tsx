import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
		typePolicies: {
			Query: {
				merge: true,
			},
		},
	},
)

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: cache,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>,
	document.getElementById('root'),
);
