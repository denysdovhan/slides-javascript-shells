// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

// Images
const images = {
  shells: require("../assets/shells-on-the-beach.jpg"),
  github: require("../assets/denysdovhan-github.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ffe000",
  secondary: "#2D2D2D",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress="bar">

          <Slide bgImage={images.shells.replace("/", "")} bgDarken={0.75}>
            <Heading size={2} fit caps textColor="primary">
              JavaScript
            </Heading>
            <Heading size={1} fit caps textColor="white">
              Shells
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Link href="https://github.com/denysdovhan">
              <Image src={images.github.replace("/", "")} width="100%" />
            </Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
