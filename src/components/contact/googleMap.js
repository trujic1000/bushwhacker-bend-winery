import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

import Marker from "./marker";

const defaultProps = {
  center: {
    lat: 39.226,
    lng: -92.84738,
  },
  zoom: 14,
};

const googleMap = () => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDNvkAjKdZRO2Kl4ullDLLWLF-n2niWgeU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={39.226} lng={-92.84738} />
      </GoogleMapReact>
    </Wrapper>
  );
};

export default googleMap;

const Wrapper = styled.div`
  height: 60vh;
  flex: 3;
`;
