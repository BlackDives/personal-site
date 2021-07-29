import React from "react"
import { Flex, Text, Grid } from "@chakra-ui/react"
import ProjectBox from "./project-box"

const MyProjects = () => {
    return (
        <Flex
            // h={"100vh"}
            background={"#131313"}
            flexDirection={"column"}
            p={5}
            pt={[20]}
            id={"MyProjects"}
        >
            <Flex>
                <Text color={"white"} fontSize={"xl"}>
                    MY{" "}
                    <Text color={"#9518fc"} display={"inline"}>
                        WORK
                    </Text>
                </Text>
            </Flex>
            <Grid
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
                gridGap={5}
                pt={10}
            >
                <ProjectBox
                    title={"CYPHER"}
                    desc={
                        "Cypher is a website that I helped develop for an upcoming crypto-currency brokerage company. I helped contribute in all areas of the site."
                    }
                    delay={0}
                    link={"https://distracted-mestorf-484af5.netlify.app/"}
                />
                <ProjectBox
                    title={"CARVER-SCI"}
                    desc={
                        "A website that I helped develop for a local Baton Rouge Company"
                    }
                    delay={0.25}
                    link={""}
                />
                <ProjectBox
                    title={"ASTRA-APP"}
                    desc={"A mobile app that I helped develop in React-Native"}
                    delay={0.5}
                    link={""}
                />
            </Grid>
        </Flex>
    )
}
export default MyProjects
