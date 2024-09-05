import { Text } from '@mantine/core';
import { FooterProps } from '@lib/types';

export default function Footer({year, name, studentId}: FooterProps){
  return (
    <>
      <Text ta="center" c="dimmed" my="sm" fz={15.2} >Copyright © {year} {name} {studentId}</Text>
    </>
  );
}
