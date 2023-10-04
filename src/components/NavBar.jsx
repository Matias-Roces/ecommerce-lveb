import CartWidget from './CartWidget';
import { Flex, Spacer, Box, Select, Center } from '@chakra-ui/react';

function NavBar() {
    return (
        <Flex bg='rgba(236, 215, 255)'>
            <Center p='4' fontSize="20px" width="200px">
                La Vie Est Belle
            </Center>
            <Spacer />
            <Center p='4'>
                <Select placeholder='Todos' bg='#ffffff'>
                    <option value='1'>Linea Home</option>
                    <option value='2'>Linea Spa</option>
                    <option value='3'>Jabones</option>
                    <option value='4'>Cosmetica natural</option>
                    <option value='5'>Almohadillas y antifaces</option>
                    <option value='6'>Esponjas</option>
                </Select>
            </Center>
            <Spacer />
            <Center p='4' width="200px">
                <CartWidget/>
            </Center>
        </Flex>
        
    );
}
export default NavBar;