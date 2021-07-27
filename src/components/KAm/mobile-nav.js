import React from "react";
import Home from "~components/KAm/home-component";
import {
  Box,
  Text,
  Menu,
  MenuIcon,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  Link,
  Button,
  background,
} from "@chakra-ui/react";
import { FaBars, FaHome, FaAddressCard, FaTh, FaPhone } from "react-icons/fa";
import { useState } from "react";

const MobNav = [
  {
    name: "Home",
    place: () =>
      document.getElementById("Home").scrollIntoView({ behavior: "smooth" }),
    icon: <FaHome />,
  },
  {
    name: "About",
    place: () =>
      document.getElementById("About").scrollIntoView({ behavior: "smooth" }),
    icon: <FaAddressCard />,
  },
  {
    name: "Projects",
    place: () =>
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" }),
    icon: <FaTh />,
  },
  {
    name: "Contact",
    place: () =>
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" }),
    icon: <FaPhone />,
  },
];
const MobileNav = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const isDarkMode = false;

  return (
    <>
      {/* <Box display={"flex"} justifyContent={"center"}>
        <Button onClick={decrement}>-</Button>
        <Text fontSize={"xl"}>{count}</Text>
        <Button onClick={increment}>+</Button>
      </Box> */}
      <Box
        display={["flex", "none"]}
        justifyContent={"flex-end"}
        padding={"1.2rem"}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            rightIcon={<FaBars size={"24px"} />}
            background={isDarkMode ? "black" : "transparent"}
            _active={{ background: "transparent", color: "#DE541E" }}
          ></MenuButton>
          <MenuList>
            {MobNav.map((data, index) => {
              return (
                <MenuItem
                  key={index}
                  icon={data.icon}
                  onClick={() => data.place()}
                >
                  {data.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default MobileNav;
