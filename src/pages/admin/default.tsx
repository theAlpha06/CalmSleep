import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import {
  FaHeart,
  FaPlayCircle
} from 'react-icons/fa'
import CompletionRate from 'views/admin/default/components/CompletionRate'
import PieCard from 'views/admin/default/components/PieCard'
import UniquePlays from 'views/admin/default/components/UniquePlays'
import Song from 'views/admin/default/components/Song'
import AdminLayout from 'layouts/admin'

export default function Dashboard () {
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, '2xl': 6 }}
            gap='20px'
            mb='20px'
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={FaPlayCircle}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Total Plays'
              value='134'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={FaHeart}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Favourites'
              value='12'
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
            <Song />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
            <UniquePlays />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
            <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px'>
              <CompletionRate />
              <PieCard />
            </SimpleGrid>
          </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}
