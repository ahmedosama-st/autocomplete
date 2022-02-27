const completionSpec: Fig.Spec = {
  name: "docker/sdk",
  description: "An autocompleter for spryker docker sdk",
  subcommands: [
    {
      name: "cli",
      description: "Enter CLI mode",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for docker sdk",
    },
  ],
};
export default completionSpec;
