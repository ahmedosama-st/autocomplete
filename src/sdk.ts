const deploymentFiles: Fig.Generator = {
  script: "ls | grep deploy",
  postProcess: (output) => {
    return output.split("\n").map((file) => {
      return { name: file.trim(), description: "File name" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "docker/sdk",
  description: "An autocompleter for spryker docker sdk",
  subcommands: [
    {
      name: "cli",
      description: "Enter CLI mode",
    },
    {
      name: "console",
      description: "Console most used commands",
      subcommands: [
        {
          name: "cache:empty-all",
          description: "Clear all cached files",
        },
        {
          name: "router:cache:warm-up:merchant-portal",
          description: "Clear cache for merchant portal",
        },
        {
          name: "router:cache:warm-up:backoffice",
          description: "Clear cache for backoffice",
        },
        {
          name: "propel:install",
          description: "Run all database related settings",
        },
        {
          name: "transfer:generate",
          description: "Generate all transfers",
        },
        {
          name: "code:generate:module:zed",
          description: "Generate module for zed",
        },
        {
          name: "code:generate:module:yves",
          description: "Generate module for yves",
        },
        {
          name: "code:generate:module:client",
          description: "Generate module for client",
        },
        {
          name: "code:generate:module:shared",
          description: "Generate module for shared",
        },
        {
          name: "frontend:project:install-dependencies",
          description: "Install the required dependencies for the frontend",
        },
        {
          name: "frontend:yves:install-dependencies",
          description: "Installs the dependencies for yves",
        },
        {
          name: "frontend:yves:build",
          description: "Builds the yves",
        },
        {
          name: "spryk:run AddModuleDefault",
          description: "Generates a zed module in core with all layers",
        },
        {
          name: "spryk:run AddModuleDataImport",
          description: "Generates a data import module in core",
        },
        {
          name: "spryk:run AddYvesPage",
          description: "Adds a new yves page with all related files",
        },
        {
          name: "spryk:run AddYvesWidget",
          description: "Adds a new widget to yves",
        },
      ],
    },
    {
      name: "boot",
      description: "Boot application using some yml configuration file",
      args: {
        name: "file",
        description: "The file you want boot from",
        generators: deploymentFiles,
      },
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
