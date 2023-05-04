// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import BarChart from 'components/charts/BarChart';

// Custom components
import Card from 'components/card/Card';
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from 'variables/charts';


export default function DailyTraffic(props: { [x: string]: any }) {
	const { ...rest } = props;
	return (
		<Card alignItems='center' flexDirection='column' w='100%' {...rest}>
			<Flex justify='space-between' align='start' px='10px' pt='5px' w='100%'>
				<Flex flexDirection='column' align='start' me='20px'>
					<Text color='secondaryGray.600' fontSize='sm' fontWeight='500'>
						Completion Rate
					</Text>
				</Flex>
			</Flex>
			<Box h='240px' mt='auto'>
				<BarChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
			</Box>
		</Card>
	);
}
