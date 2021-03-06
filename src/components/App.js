// @flow
import React from 'react';
import { connect } from '@seracio/rx-connect';
import styled from 'styled-components';
import { map } from 'rxjs/operators';

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
`;

type Props = {
    hello: string
};

const App = ({ hello }: Props) => {
    return <Container>Hello {hello}</Container>;
};

const combinator = state => {
    const { hello$ } = state;
    return hello$.pipe(map(hello => ({ hello })));
};

export default connect(combinator)(App);
