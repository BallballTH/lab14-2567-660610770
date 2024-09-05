"use client";
import { Container, Text } from "@mantine/core";

import AddReview from "@components/AddReview"
import Review from "@components/Review"
import Pagnigation from '@components/Pagnigation'
import Footer from "@components/Footer";

import { Reviews } from "@lib/reviews";

export default function Home() {
  return (
    <Container size="600px">
      <AddReview/>

      <Text ta="center" my="sm">
        
        {Reviews.map((review) => (
          <Review 
            key = {review.id}
            {...review}
          />
        ))}

        <Pagnigation/>
        <Footer/>

      </Text>
    </Container>
  );
}
