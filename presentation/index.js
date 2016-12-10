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
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text,
  Markdown,
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
  ternopilBg: require("../assets/ternopil-bg.jpg"),
  shells: require("../assets/shells-on-the-beach.jpg"),
  github: require("../assets/denysdovhan-github.png"),
  nodeschoolBg: require("../assets/nodeschool-bg.png"),
  nodeschoolLogo: require("../assets/nodeschool-logo.png"),
  chernivtsijsBg: require("../assets/chernivtsijs-bg.jpg"),
  chernivtsijsLogo: require("../assets/chernivtsijs-logo.png"),
  bullshit: require("../assets/bullshit.gif"),
  vorpal: require("../assets/vorpal-logo.png"),
  cash: require("../assets/cash-logo.jpg"),
  cashUsage: require("../assets/cash-usage.gif"),
  awkward: require("../assets/awkward.gif"),
  scheme: require("../assets/scheme.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ffe000",
  secondary: "#2D2D2D",
  vorpal: "#4281A3",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}>

          <Slide bgImage={images.ternopilBg.replace("/", "")} bgDarken={0.4}>
            <Heading textColor="white" margin=".2em auto 0">
              Hello, Ternopil!
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

          <Slide notes="">
            <Heading size={2}>Take it easy</Heading>
            <Text margin=".5em auto 0">
              This is just an overview.
            </Text>
            <Text margin=".2em auto 0">
              Sort of things that we do, because we can.
            </Text>
          </Slide>

          <Slide notes="">
            <Heading size={2}>It’s about personal usage</Heading>
            <Text margin=".5em auto 0">The ecosystem of the shell:</Text>
            <Text margin=".2em auto 0">
              autocompletions, plugins, themes, customizations,
              managing of dependecies
            </Text>
          </Slide>

          <Slide>
            <Link href="http://shelljs.org">
              <Heading size={2}>shelljs</Heading>
            </Link>
            <Text margin="0.5em auto 0">
              Used by pm2, angular-cli, JSHint, ESLint, PDF.js, Firebug,
              Yeoman, serverless and 2500+ other
            </Text>
            <Link href="https://github.com/dthree/vorpal/commit/94bfcad0cce509c5849538f0d93d7f178b5e38fc">
              <Text margin="1em auto 0">Initial commit on Mar 2, 2012 (4.8K★)</Text>
            </Link>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="0.5em"
              source={require("./examples/1-shelljs.example")}
            />
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="0.5em"
              source={require("./examples/2-shelljs-global.example")}
            />
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="coffeescript"
              textSize="0.5em"
              source={require("./examples/3-shelljs-coffee.example")}
            />
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="bash"
              textSize="0.5em"
              source={require("./examples/4-shelljs-shell.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>ShellJS is not a shell</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>What is shell, exactly?</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <BlockQuote>
              <Quote>
                shell — is a user interface for access to an operating
                system’s services.
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <BlockQuote>
              <Quote textSize="2em">
                CLI is a means of interacting with a computer program
                where the user issues commands to the program
                in the form of successive lines of text.
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Text bold>Command Line Interface</Text>
            <List ordered>
              <ListItem>Read input line-by-line</ListItem>
              <ListItem>Execute the commands</ListItem>
              <ListItem>Produces the output</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2}>
              How to build a shell?
            </Heading>
            <Text margin="0.5em auto 0">
              Using JavaScript and Node.js API
            </Text>
          </Slide>

          <Slide>
            <Link href="https://en.m.wikipedia.org/wiki/Shebang_(Unix)">
              <Heading size={2}>#!/usr/bin/env node</Heading>
            </Link>
            <Text margin="0.5em auto 0">
              Tells the computer what interpreter should be used to run a file
            </Text>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="1.8em"
              source={require("./examples/5-shebang.example")}
            />
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="bash"
              textSize="1.8em"
              source={require("./examples/6-shebang-output.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              We know how to run
            </Heading>
            <Text margin="0.5em auto 0">
              How to create an interface?
            </Text>
          </Slide>

          <Slide>
            <Link href="https://nodejs.org/api/readline.html#readline_readline">
              <Heading size={2}>readline</Heading>
            </Link>
            <Markdown>
              The `readline` module provides an interface
              for reading data from a Readable stream one line at a time
            </Markdown>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="0.5em"
              source={require("./examples/7-readline-simple.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Control codes
            </Heading>
            <Markdown margin="0.5em auto 0">
              How to respond to `ctrl-Z`, `ctrl-C`, `ctrl-D` codes?
            </Markdown>
          </Slide>

          <Slide>
            <Heading size={2}>
              pause and resume
            </Heading>
            <List>
              <ListItem>
                pause — stream is paused or receives the SIGCONT event
              </ListItem>
              <ListItem>
                resume — stream is resumed
              </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2}>
              SIGINT, SIGTSTP, SIGCONT
            </Heading>
            <List>
              <ListItem>
                SIGINT — whenever input receives <Code>ctrl-C</Code>
              </ListItem>
              <ListItem>
                SIGTSTP — whenever process is gonna be sent to the background
                (<Code>ctrl-Z</Code>)
              </ListItem>
              <ListItem>
                SIGCONT — whenever process is gonna be brought back from
                the background (<Code>fg(1)</Code>)
              </ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="0.5em"
              source={require("./examples/8-readline-evented.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              We have a shell
            </Heading>
            <Text margin="0.5em auto 0">
              How to execute the commands?
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Implement commands in JavaScript
            </Heading>
            <Text margin="0.5em auto 0">
              ShellJS can be useful here
            </Text>
          </Slide>

          <Slide>
            <Heading size={2}>
              Pass command to the real shell
            </Heading>
            <Text margin="0.5em auto 0">
              Execute commands using sh, bash, etc
            </Text>
          </Slide>

          <Slide>
            <Link href="https://nodejs.org/api/child_process.html#child_process_child_process">
              <Heading size={2}>child_process</Heading>
            </Link>
            <Markdown>
              The `child_process` module provides the ability to spawn
              child processes
            </Markdown>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="0.65em"
              source={require("./examples/9-readline-exec.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              Got it!
            </Heading>
            <Text margin="0.5em auto 0">
              We have working shell written in 50 lines
            </Text>
            <Appear>
              <Text italic margin="0.5em auto 0">
                There remain a lot of things to fix and improve!
              </Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={2}>
              There are existing solutions
            </Heading>
            <Text margin="0.5em auto 0">
              Those helps to avoid pitfalls, give simple syntax
              and convenient defaults
            </Text>
          </Slide>

          <Slide bgColor="vorpal">
            <Link href="http://vorpal.js.org/">
              <Image src={images.vorpal.replace("/", "")} />
            </Link>
            <Link href="https://github.com/dthree/vorpal/commit/94bfcad0cce509c5849538f0d93d7f178b5e38fc">
              <Text textColor="white" margin="0.5em auto 0">
                Initial commit on Aug 23, 2015 (3.5K★)
              </Text>
            </Link>
          </Slide>

          <Slide bgColor="vorpal">
            <Heading size={2} textColor="white">
              Helps to build command line applications
            </Heading>
            <Text textColor="white" margin="0.5em auto 0">
              And I do mean applications
            </Text>
          </Slide>

          <Slide bgColor="vorpal">
            <Heading size={2} textColor="white">
              Helps with …
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Own context</ListItem></Appear>
              <Appear><ListItem>Customizable prompts</ListItem></Appear>
              <Appear><ListItem>Persistent command history</ListItem></Appear>
              <Appear><ListItem>Built-in help</ListItem></Appear>
              <Appear><ListItem>Piped commands</ListItem></Appear>
              <Appear><ListItem>Built-in tabbed autocompletion</ListItem></Appear>
              <Appear><ListItem>Command-specific autocompletion</ListItem></Appear>
              <Appear><ListItem>Custom event listeners</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="0.4em"
              source={require("./examples/10-vorpal-piping.example")}
            />
          </Slide>

          <Slide>
            <Heading size={2}>
              That is “immersive” CLA
            </Heading>
            <Text margin="0.5em auto 0">
              Don’t exit after first command. Have isolated CLI environment
              independent of your underlying terminal, own state
              and its own suite of commands
            </Text>
          </Slide>

          <Slide bgColor="white">
            <Link href="https://github.com/dthree/cash">
              <Image src={images.cash.replace("/", "")} width="500px" />
            </Link>
            <Link href="https://github.com/dthree/cash/commit/a8d0eab2c6168d44fff29a38305bbdbe35959b83">
              <Text margin="0.5em auto 0">Initial commit on Feb 22, 2016 (6.9K★)</Text>
            </Link>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.cashUsage.replace("/", "")} />
            <Text margin="0.5em auto 0">
              Cross-platform implementation of Unix shell commands written in straight ES6
            </Text>
          </Slide>

          <Slide>
            <Text bold>
              alias, cat, clear, cd, cp, echo, export, false, grep, head,
              kill, less, ls, mkdir, mv, pwd, rm, sort, source, tail, touch,
              true, unalias
            </Text>
            <Text margin="0.5em auto 0">
              <Link href="https://github.com/dthree/cash/wiki/Roadmap" textColor="secondary">
                Vote on the next commands
              </Link>
            </Text>
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="bash"
              textSize="0.9em"
              source={require("./examples/11-cash-mix.example")}
            />
          </Slide>

          <Slide bgColor="secondary" notes="">
            <CodePane
              lang="js"
              textSize="1.2em"
              source={require("./examples/12-cash-template.example")}
            />
          </Slide>

          <Slide bgColor="white">
            <Link href="https://github.com/iostreamer-X/Awkward">
              <Heading size={2}>Awkward</Heading>
            </Link>
            <Text margin="0.5em auto 0">
              A Node.js based shell where everything is an Object
            </Text>
            <Link href="https://github.com/iostreamer-X/Awkward/commit/b3c81169dff8070c11efa243e6461f0cf5a815bf">
              <Text margin="1em auto 0">Initial commit on Jul 16, 2016 (~400★)</Text>
            </Link>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.awkward.replace("/", "")} width="760px" />
            <Markdown>
              Every structured data can be represented as a JS array
              with `map`, `forEach`, `filter` methods
            </Markdown>
          </Slide>

          <Slide>
            <Heading size={2}>Other</Heading>
          </Slide>

          <Slide>
            <Link href="https://github.com/shelljs/shx">
              <Heading size={2}>shelljs/shx</Heading>
            </Link>
            <Text margin="0.5em auto 0">
              A cli-wrapper around ShellJS Unix commands
            </Text>
            <Link href="https://github.com/shelljs/shx/commit/c3487e839f287796cddac17a9bc8042fe05af127">
              <Text margin="1em auto 0">Initial commit on Mar 10, 2016 (~120★)</Text>
            </Link>
          </Slide>

          <Slide>
            <Link href="https://github.com/tj/nshell">
              <Heading size={2}>tj/nshell</Heading>
            </Link>
            <Text margin="0.5em auto 0">
              Probably the first shell in Node.js
            </Text>
            <Link href="https://github.com/tj/nshell/commit/9cc2228354cf4b9d6529f96cd4d6a15b21a67d98">
              <Text margin="1em auto 0">Initial commit on Jul 29, 2012 (~80★)</Text>
            </Link>
          </Slide>

          <Slide>
            <Link href="https://github.com/streamich/jssh">
              <Heading size={2}>streamich/jssh</Heading>
            </Link>
            <Text margin="0.5em auto 0">
              Wrapper around shelljs to use it within NodeOS
            </Text>
            <Link href="https://github.com/tj/nshell/commit/9cc2228354cf4b9d6529f96cd4d6a15b21a67d98">
              <Text margin="1em auto 0">Initial commit on Jun 1, 2015 (4★)</Text>
            </Link>
          </Slide>

          <Slide>
            <Heading size={1} textColor="secondary">Proposal</Heading>
          </Slide>

          <Slide>
            <Image src={images.scheme.replace("/", "")} width="800px" />
          </Slide>

          <Slide>
            <Heading size={4} textColor="secondary">
              What benefits could be achieved?
            </Heading>
            <List>
              <Appear><ListItem>Input validation</ListItem></Appear>
              <Appear><ListItem>Syntax highlighting on the fly</ListItem></Appear>
              <Appear><ListItem>Autoclosing quotes, brackets, parentheses</ListItem></Appear>
              <Appear><ListItem>Browser-like autocompletion</ListItem></Appear>
              <Appear><ListItem>Output filtering</ListItem></Appear>
              <Appear><ListItem>Cross-platform and cross-shell</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} textColor="secondary">Conclusion</Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="secondary">
              Learn more
            </Heading>
            <List>
              <Link textColor="secondary" href="http://git.io/js-shell-demos"><ListItem>git.io/js-shell-demos</ListItem></Link>
              <Link textColor="secondary" href="http://git.io/bash-handbook"><ListItem>git.io/bash-handbook</ListItem></Link>
              <Link textColor="secondary" href="http://git.io/learnyoubash"><ListItem>git.io/learnyoubash</ListItem></Link>
              <Link textColor="secondary" href="http://github.com/alebcay/awesome-shell"><ListItem>github.com/alebcay/awesome-shell</ListItem></Link>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} textColor="secondary">Thank you!</Heading>
            <Link href="https://twitter.com/denysdovhan">
              <Text margin="0.6em auto 0" bold textColor="secondary">
                @denysdovhan
              </Text>
            </Link>
            <Text textSize="0.6em" margin="1em auto 0">
              5-6 Nov 2016
            </Text>
            <Link href="http://denysdovhan.com/slides-javascript-shells" >
              <Text margin="3em auto 0" textColor="secondary">
                Slides: denysdovhan.com/slides-javascript-shells
              </Text>
            </Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
