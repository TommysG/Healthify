import React from "react";
import HomeNav from "../components/HomeNav";
import { NewsView } from "../components/NewsView";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import newsfile from "../news.json";

export default function viewNews({ match }) {
  const newsContent = newsfile.map((item) => {
    if (item.id.toString() === match.params.id)
      return (
        <NewsView
          key={item.id}
          id={item.id}
          title={item.title}
          category={item.category}
          image={item.image}
          content={item.content}
        ></NewsView>
      );
    return <div key={item.id}></div>;
  });

  return (
    <div className="news">
      <HomeNav />
      <Container className="news-container">
        <Col>{newsContent}</Col>
      </Container>
    </div>
  );
}
