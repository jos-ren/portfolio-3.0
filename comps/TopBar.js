import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.div`
    height:60px;
    width:100vw;
    position: fixed;
    top: 0px;
    box-shadow: 0px 1px 0px 0px var(--border);
    background: var(--primary);
    z-index:100;
    display:flex;
    align-items:center;
    padding:0 1.5em;
`;

const TopBar = ({ onClick, strokeColor }) => {
  const [UseAnimations, setUseAnimations] = useState(null);
  const [menu4, setMenu4] = useState(null);

  useEffect(() => {
    const loadAnimations = async () => {
      const [useAnimationsModule, menu4Module] = await Promise.all([
        import('react-useanimations'),
        import('react-useanimations/lib/menu4')
      ]);
      
      setUseAnimations(() => useAnimationsModule.default);
      setMenu4(menu4Module.default);
    };

    loadAnimations();
  }, []);

  return (
    <Container>
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
        {UseAnimations && menu4 ? (
          <UseAnimations animation={menu4} size={36} speed={2.5} strokeColor={strokeColor}/>
        ) : (
          <div style={{ width: 36, height: 36 }} /> // Fallback
        )}
      </div>
    </Container>
  );
}

TopBar.defaultProps = {
  strokeColor: "black"
}

export default TopBar;