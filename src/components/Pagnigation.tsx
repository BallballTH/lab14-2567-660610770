import { Pagination, Group} from '@mantine/core';

export default function Pagnigation() {
    return (
        <Group justify="center" mt="sm" >
            <Pagination total={20} color="orange"/>
        </Group>
    );
}
