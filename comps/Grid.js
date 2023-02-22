import React from 'react';
import PropTypes from 'prop-types'; 
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
`;

const Grid = ({}) => {
  return (
    <Container>

    </Container>
  );
}

Grid.defaultProps = {

}

export default Grid;