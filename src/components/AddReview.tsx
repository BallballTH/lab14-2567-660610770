import { Title, Rating, Textarea, Button } from '@mantine/core';

export default function AddReview() {
  return (
    <>
      <Title order={4} mt="sm" >Your rating</Title>

      <Rating defaultValue={0} size="lg" />

      <Textarea
        mt="sm"
        label="Your review"
        placeholder="Do you enjoy eating?"
        rows={3}
      />

      <Button variant="filled" color="orange" size="sm" mt="sm" >Submit Review</Button>
    </>
  );
}