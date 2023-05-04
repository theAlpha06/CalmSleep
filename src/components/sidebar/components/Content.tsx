// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
import Links from 'components/sidebar/components/Links';
import { IRoute } from 'types/navigation';interface SidebarContentProps {
	routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>
			<Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mt='60px' mb='40px' borderRadius='30px'>
			</Box>
		</Flex>
	);
}

export default SidebarContent;
