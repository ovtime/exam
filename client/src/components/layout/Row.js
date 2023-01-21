import BootstrapRow from 'react-bootstrap/Row';
import React from 'react';

const styles = {
    padding: '10px',
};

const Row  = props => {
    const { children } = props;
    return <BootstrapRow styles={styles}> {children} </BootstrapRow>;
};

export default Row;
