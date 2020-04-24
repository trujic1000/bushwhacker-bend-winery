import React from "react";
import styled from "styled-components";

const Marker = () => {
  return (
    <Wrapper>
      <svg
        version="1.2"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        fill="#722F37"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        overflow="inherit"
      >
        <path d="M25 0c-8.284 0-15 6.656-15 14.866 0 8.211 15 35.135 15 35.135s15-26.924 15-35.135c0-8.21-6.716-14.866-15-14.866zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588 0-2.535 2.072-4.589 4.629-4.589 2.559 0 4.631 2.054 4.631 4.589 0 2.533-2.072 4.588-4.631 4.588z" />
      </svg>
      Bushwhacker Bend Winery
    </Wrapper>
  );
};

export default Marker;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
`;
