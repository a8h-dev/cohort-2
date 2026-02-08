import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./Cli.scss";

const Cli = () => {
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    // help: {
    //   description: "List available commands.",
    //   usage: "help",
    //   fn: (..._args) => {
    //     return Object.keys(commands)
    //       .map((k) => `${k} - ${commands[k].description}`)
    //       .join("\n");
    //   },
    // },
    about: {
      description: "Short portfolio summary.",
      usage: "about",
      fn: () =>
        `Hi — I'm a frontend developer building interactive web apps. This is a demo portfolio terminal.`,
    },
    projects: {
      description: "List projects or view a project. Example: projects Mac-OS",
      usage: "projects [name]",
      fn: (...args) => {
        const list = [
          "Mac-OS - mac-like UI portfolio",
          "Journey - React routing demo",
          "Productivity-Dashboard - widgets and charts",
        ];
        if (args.length === 0) return list.join("\n");
        const name = args.join(" ");
        return `Project: ${name}\nThis is a placeholder description for the project '${name}'.`;
      },
    },
    contact: {
      description: "Contact information.",
      usage: "contact",
      fn: () =>
        `Email: hello@example.com\nTwitter: @example\nLinkedIn: linkedin.com/in/example`,
    },
    skills: {
      description: "List primary skills.",
      usage: "skills",
      fn: () => "React, JavaScript, HTML, CSS, Node.js",
    },
    whoami: {
      description: "Show your developer handle.",
      usage: "whoami",
      fn: () => "a8h-dev",
    },
    resume: {
      description: "Simulate downloading a resume.",
      usage: "resume",
      fn: () => "Saved resume to ./resume-dummy.pdf (simulated).",
    },
    say: {
      description: "Alias for echo.",
      usage: "say <message>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = [
    "Welcome to the portfolio terminal!",
    "Type 'help' to list available commands.",
    "Available commands:",
    ...Object.keys(commands).map((k) => `  ${k} - ${commands[k].description}`),
  ].join("\n");

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"a8h@dev:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
