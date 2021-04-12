import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ListBox(pins: any) {
  const [value, setValue] = useState<string>("");
  return (
    <Box
      display="grid"
      gridGap={2}
      gridAutoFlow="row dense"
      ml={"auto"}
      p={4}
      maxWidth="400px"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="white.500" />}
        />
        <Input
          bgColor="blackAlpha.500"
          type="name"
          placeholder="Search name of the pin"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
      <VStack
        divider={<StackDivider borderColor="blackAlpha.500" />}
        spacing={1}
        align="stretch"
        rounded="0.5%"
      >
        {pins.pins.map((item: any, idx: number) => {
          if (item.label.includes(value)) {
            return (
              <Box h="35px" bg="blackAlpha.500" fontSize="20px">
                {idx + 1}. {item.label} Coordinates: x: {item.latitude} y:{" "}
                {item.longtitude}
              </Box>
            );
          }
        })}
      </VStack>
    </Box>
  );
}
