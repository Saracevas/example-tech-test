import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Card, Pagination } from "../components";
import styles from "../styles/home.module.css";
import { Product } from "types/types";

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
`;

interface HomeProps {
  results: Product[];
}

export default function Home({ results }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Tech Test</title>
        <meta name="description" content="Tech Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Live Pairing Tech Test</h1>

        {results.map(({ id, name, description, price, image }) => (
          <Card
            id={id}
            name={name}
            description={description}
            price={price}
            image={image}
          />
        ))}

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Main>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchUrl = "http://localhost:3000/api/product";

  return {
    props: {
      results: [
        {
          id: "24522",
          name: "Unbranded Concrete Gloves",
          description:
            "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
          price: "860.00",
          image: "https://picsum.photos/640/480",
        },
        {
          id: "24523",
          name: "Gorgeous Wooden Chicken",
          description:
            "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
          image: "https://picsum.photos/640/480",
        },
        {
          id: "24524",
          name: "Exceptional Fast Car",
          description:
            "This desirable manual-transmission car benefits from long-term early ownership and a well-documented maintenance history",
          image: "https://picsum.photos/640/480",
        },
        {
          id: "24525",
          name: "Splendid Gardening Secateurs",
          description:
            "An indispensable tool, essential for tidying up around the garden",
          image: "https://picsum.photos/640/480",
          price: "49.99",
        },
      ],
    },
  };
}
