import React from "react";
import styled from "styled-components";
import { Container } from "components/elements";
import { FeaturedWinesSection } from "components/home/featuredWines";
import wines from "data/wines";

const Wines = () => (
  <WinesSection id="wines" className="wines" light>
    <Container className="featured-wines__wrap">
      {wines.map(item => (
        <article key={item.id} className="item">
          <img src={item.image} alt={item.type} />
          <span className="item__title">{item.title}</span>
          <span className="item__price">{item.price}</span>
          <div className="description">
            <span className="type">{item.type}</span>
            <p className="desc">{item.description}</p>
          </div>
        </article>
      ))}
    </Container>
  </WinesSection>
);

export default Wines;

const WinesSection = styled(FeaturedWinesSection)`
  .featured-wines__wrap {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
