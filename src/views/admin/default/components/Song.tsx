/* eslint-disable jsx-a11y/alt-text */
// Chakra imports
import {
  Flex,
  Icon,
  Text,
  Image,
  SimpleGrid,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import IconBox from "components/icons/IconBox";
import React from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { useState, useRef } from "react";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

export default function Song(props: { [x: string]: any }) {
  // let audio = new Audio('/havana.mp3');
  const [audio] = useState(typeof Audio !== "undefined" && new Audio('/havana.mp3'));
  const { ...rest } = props;
  const reference = useRef();
  // Chakra Color Mode
  const cardColor = useColorModeValue("white", "navy.700");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  function handleProgress() {
    const percent = (audio.currentTime / audio.duration) * 100;
  }
  
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [togglePlay, setTogglePlay] = useState(false);

  const changeRange = () => {
    const range = reference.current;
  }

  return (
    <Card w="100%" {...rest}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
     
        <Card>
        
          <Image
            src="https://th.bing.com/th/id/R.adef27eb046caec16bf739128453d780?rik=91OeRVwG31pUMQ&pid=ImgRaw&r=0"
            borderRadius={30}
          />
        </Card>
        <Card>
          <Card
            bg={cardColor}
            flexDirection="row"
            boxShadow={cardShadow}
            w="100%"
            p="15px"
            px="20px"
            mt="15px"
            mx="auto"
          >
            <Flex direction="column" py="5px">
              <Text
                color={textColor}
                fontSize="4xl"
                fontWeight="700"
                mt="4px"
                marginBottom={0}
              >
                HAVANA
              </Text>
              <Text
                color={textColor}
                fontSize="10px"
                fontWeight="600"
                mt="4px"
                marginTop={0}
              >
                CAMILA CABELLO
              </Text>
            </Flex>
          </Card>
          <Card
            bg={cardColor}
            flexDirection="column"
            alignItems={"center"}
            justifyContent={"center"}
            boxShadow={cardShadow}
            w="100%"
            p="15px"
            px="20px"
            mt="15px"
            mx="auto"
            paddingTop={'4rem'}
          >
            
            <input type='range' ref={reference} value='0' onChange={() => {changeRange()}}/>
            <Flex direction="row" py="5px" padding={"2rem 3rem 3rem 3rem"} gap={"1rem"}>
              <IconBox
                w="50px"
                h="50px"
                bg={boxBg}
                icon={
                  <Icon
                    w="30px"
                    h="30px"
                    as={TbPlayerTrackPrevFilled}
                    color={brandColor}
                    />
                  }
              />
              {
                togglePlay === false ? (
                  <IconBox
                  cursor='pointer'
                  onClick={() => {
                    audio.play();
                    handleProgress();
                    setTogglePlay(prevState => !prevState);
                  }}
                  w="50px"
                  h="50px"
                  bg={boxBg}
                  icon={
                    <Icon
                    w="30px"
                    h="30px"
                    as={FaPlayCircle}
                    color={brandColor}
                  />
                }
              />
                ) : (
                  <IconBox
                cursor='pointer'
                onClick={() => {
                  audio.pause();
                  setTogglePlay(prevState => !prevState);
                }}
                w="50px"
                h="50px"
                bg={boxBg}
                icon={
                  <Icon
                  w="30px"
                  h="30px"
                  as={FaPauseCircle}
                  color={brandColor}
                  />
                }
                />
                )
              }
              <IconBox
                w="50px"
                h="50px"
                bg={boxBg}
                icon={
                  <Icon
                    w="30px"
                    h="30px"
                    as={TbPlayerTrackNextFilled}
                    color={brandColor}
                  />
                }
              />
            </Flex>
          </Card>
        </Card>
      </SimpleGrid>
    </Card>
  );
}



