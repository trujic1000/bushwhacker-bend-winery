import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Section, Container, Link } from "components/elements";
import wines from "data/wines";

const FeaturedWines = () => (
  <FeaturedWinesSection id="featured-wines" className="featured-wines" light>
    <h1 className="featured-wines__title">Featured Wines</h1>
    <Container className="featured-wines__wrap">
      {wines
        .filter(item => item.featured)
        .map(item => (
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
    <Link type="dark" to="/wines">
      View all wines
    </Link>
  </FeaturedWinesSection>
);

export default FeaturedWines;

export const FeaturedWinesSection = styled(Section)`
  text-align: center;
  .featured-wines__wrap {
    margin: 60px auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(220px, 1fr));
    justify-content: center;
    align-items: center;
    text-align: center;
    .item {
      border: 1px solid ${props => props.theme.colors.black};
      padding: 30px;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      &:hover .description {
        opacity: 1;
      }
      img {
        width: 30%;
      }
      span {
        display: block;
      }
      .item__title {
        font-size: calc(1rem + 0.5vw);
      }
      .item__price {
        font-size: calc(1rem + 0.2vw);
      }
      .description {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        color: ${props => props.theme.colors.white};
        opacity: 0;
        transition: all 300ms linear;
        .type {
          margin-bottom: 20px;
        }
      }
    }
    ${media.lessThan("medium")`
      grid-template-columns: 1fr;
      .item .description {
        padding: 3rem;
      }
  `}
    ${media.lessThan("small")`
      grid-template-columns: 1fr;
      .item .description {
        padding: 10px;
      }
  `}
  }
`;
