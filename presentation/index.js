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
  kharkivjsBg: require("../assets/kharkivjs-bg.jpg"),
  kharkivjsLogo: require("../assets/kharkivjs-logo.png"),
  shells: require("../assets/shells-on-the-beach.jpg"),
  github: require("../assets/denysdovhan-github.png"),
  nodeschoolBg: require("../assets/nodeschool-bg.png"),
  nodeschoolLogo: require("../assets/nodeschool-logo.png"),
  chernivtsijsBg: require("../assets/chernivtsijs-bg.jpg"),
  chernivtsijsLogo: require("../assets/chernivtsijs-logo.png"),
  bullshit: require("../assets/bullshit.gif"),
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
        <Deck transition={["fade"]} transitionDuration={500} progress="none">

          <Slide bgImage={images.kharkivjsBg.replace("/", "")} bgDarken={0.4}>
            <Link href="https://github.com/denysdovhan">
              <Image src={images.kharkivjsLogo.replace("/", "")} width="250px" />
            </Link>
            <Heading textColor="white" margin=".2em auto 0">
              Hello, Kharkiv!
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Link href="https://github.com/denysdovhan" target="_blank">
              <Image src={images.github.replace("/", "")} width="100%" />
            </Link>
          </Slide>

          <Slide bgImage={images.nodeschoolBg.replace("/", "")}>
            <Link href="https://nodeschool.io/chernivtsi/" target="_blank">
              <Image src={images.nodeschoolLogo.replace("/", "")} width="100%" />
              <Text bold textColor="white">nodeschool.io/chernivtsi</Text>
            </Link>
          </Slide>

          <Slide bgImage={images.chernivtsijsBg.replace("/", "")} bgDarken={0.4}>
            <Link href="https://www.facebook.com/chernivtsijs/" target="_blank">
              <Image src={images.chernivtsijsLogo.replace("/", "")} width="100%" />
              <Text bold textColor="white">facebook.com/chernivtsijs</Text>
            </Link>
          </Slide>

          <Slide bgImage={images.shells.replace("/", "")} bgDarken={0.75}>
            <Heading size={2} fit caps textColor="primary">
              JavaScript
            </Heading>
            <Heading size={1} fit caps textColor="white">
              Shells
            </Heading>
          </Slide>

          <Slide bgImage={images.bullshit.replace("/", "")} bgDarken={0.2}>
            {/* Unbelieable bullshit gif */}
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
