import { Group, Title, Text, Divider, Rating } from '@mantine/core';
import { ReviewProps } from '@lib/types';
export default function Review({id, name, rating, comment} :ReviewProps) {
  return (
    <>

        <Divider my="md" />

        <Group justify="center">
         <Title order={4} > {name} </Title>
         <Rating value={rating} fractions={2} readOnly />
        </Group>

        <Text c="dimmed" size="sm">{comment}</Text>

    </>
  )
}
