import path, { basename } from 'node:path';
import consola$1, { consola } from 'consola';
import prompts from 'prompts';
import { a as blue, y as yellow, c as green, r as red, d as cyan, m as magenta, e as reset } from '../shared/apibara.730bb1e4.mjs';
import fs from 'node:fs';
import { Project, SyntaxKind } from 'ts-morph';
import * as prettier from 'prettier';
import 'picocolors';

const chains = [
  {
    name: "starknet",
    display: "Starknet",
    color: blue,
    networks: [
      { name: "mainnet", display: "Mainnet", color: blue },
      { name: "sepolia", display: "Sepolia", color: yellow }
    ]
  },
  {
    name: "ethereum",
    display: "Ethereum",
    color: green,
    networks: [
      { name: "mainnet", display: "Mainnet", color: blue },
      { name: "sepolia", display: "Sepolia", color: yellow }
    ]
  },
  {
    name: "beaconchain",
    display: "Beacon Chain",
    color: yellow,
    networks: [{ name: "mainnet", display: "Mainnet", color: yellow }]
  }
];
const networks = [
  { name: "mainnet", display: "Mainnet", color: blue },
  { name: "sepolia", display: "Sepolia", color: green },
  { name: "other", display: "Other", color: red }
];
const storages = [
  { name: "postgres", display: "Postgres", color: green },
  { name: "none", display: "None", color: red }
];
const packageVersions = {
  // Required Dependencies
  apibara: "next",
  "@apibara/protocol": "next",
  // Chain Dependencies
  "@apibara/evm": "next",
  "@apibara/beaconchain": "next",
  "@apibara/starknet": "next",
  // Storage Dependencies
  "@apibara/plugin-drizzle": "next",
  "@apibara/plugin-mongo": "next",
  "@apibara/plugin-sqlite": "next",
  // Postgres Dependencies
  "@electric-sql/pglite": "^0.2.17",
  "drizzle-orm": "^0.40.1",
  pg: "^8.13.1",
  "@types/pg": "^8.11.10",
  "drizzle-kit": "^0.29.0",
  // Typescript Dependencies
  typescript: "^5.6.2",
  "@types/node": "^20.5.2"
};
const dnaUrls = {
  ethereum: "https://mainnet.ethereum.a5a.ch",
  ethereumSepolia: "https://sepolia.ethereum.a5a.ch",
  beaconchain: "https://beaconchain.preview.apibara.org",
  starknet: "https://mainnet.starknet.a5a.ch",
  starknetSepolia: "https://sepolia.starknet.a5a.ch"
};

function isEmpty(path2) {
  const files = fs.readdirSync(path2);
  return files.length === 0 || files.length === 1 && files[0] === ".git";
}
function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    if (file === ".git") {
      continue;
    }
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
  }
}
function validateLanguage(language, throwError = false) {
  if (!language) {
    return false;
  }
  if (language === "typescript" || language === "ts" || language === "javascript" || language === "js" || language === "mjs") {
    return true;
  }
  if (throwError) {
    throw new Error(
      `Invalid language ${cyan("(--language | -l)")}: ${red(language)}. Options: ${blue("typescript, ts")} or ${yellow("javascript, js")} | default: ${cyan("typescript")}`
    );
  }
  return false;
}
function getLanguageFromAlias(alias) {
  if (alias === "ts" || alias === "typescript") {
    return "typescript";
  }
  if (alias === "js" || alias === "javascript" || alias === "mjs") {
    return "javascript";
  }
  throw new Error(
    `Invalid language ${cyan("(--language | -l)")}: ${red(alias)}. Options: ${blue("typescript, ts")} or ${yellow("javascript, js")}`
  );
}
function validateIndexerId(indexerId, throwError = false) {
  if (!indexerId) {
    return false;
  }
  if (!/^[a-z0-9-]+$/.test(indexerId)) {
    if (throwError) {
      throw new Error(
        `Invalid indexer ID ${cyan("(--indexer-id)")}: ${red(indexerId)}. Indexer ID must contain only lowercase letters, numbers, and hyphens.`
      );
    }
    return false;
  }
  return true;
}
function validateChain(chain, throwError = false) {
  if (!chain) {
    return false;
  }
  if (chain) {
    if (chain === "starknet" || chain === "ethereum" || chain === "beaconchain")
      return true;
    if (throwError) {
      throw new Error(
        `Invalid chain ${cyan("(--chain)")}: ${red(chain)}. Chain must be one of ${blue("starknet, ethereum, beaconchain")}.`
      );
    }
    return false;
  }
  return true;
}
function validateNetwork(chain, network, throwError = false) {
  if (!network) {
    return false;
  }
  if (network === "other") {
    return true;
  }
  if (chain) {
    if (chain === "starknet") {
      if (network === "mainnet" || network === "sepolia") {
        return true;
      }
      if (throwError) {
        throw new Error(
          `Invalid network ${cyan("(--network)")}: ${red(network)}. For chain ${blue("starknet")}, network must be one of ${blue("mainnet, sepolia, other")}.`
        );
      }
      return false;
    }
    if (chain === "ethereum") {
      if (network === "mainnet" || network === "goerli") {
        return true;
      }
      if (throwError) {
        throw new Error(
          `Invalid network ${cyan("(--network)")}: ${red(network)}. For chain ${blue("ethereum")}, network must be one of ${blue("mainnet, goerli, other")}.`
        );
      }
      return false;
    }
    if (chain === "beaconchain") {
      if (network === "mainnet") {
        return true;
      }
      if (throwError) {
        throw new Error(
          `Invalid network ${cyan("(--network)")}: ${red(network)}. For chain ${blue("beaconchain")}, network must be ${blue("mainnet, other")}.`
        );
      }
      return false;
    }
  }
  if (networks.find((n) => n.name === network)) {
    return true;
  }
  if (throwError) {
    throw new Error(
      `Invalid network ${cyan("(--network)")}: ${red(network)}. Network must be one of ${blue("mainnet, sepolia, goerli, other")}.`
    );
  }
  return false;
}
function validateStorage(storage, throwError = false) {
  if (!storage) {
    return false;
  }
  if (storage === "postgres" || storage === "none") {
    return true;
  }
  if (throwError) {
    throw new Error(
      `Invalid storage ${cyan("(--storage)")}: ${red(storage)}. Storage must be one of ${blue("postgres, none")}.`
    );
  }
  return false;
}
function validateDnaUrl(dnaUrl, throwError = false) {
  if (!dnaUrl) {
    return false;
  }
  if (!dnaUrl.startsWith("https://") && !dnaUrl.startsWith("http://")) {
    if (throwError) {
      throw new Error(
        `Invalid DNA URL ${cyan("(--dna-url)")}: ${red(dnaUrl)}. DNA URL must start with ${blue("https:// or http://")}.`
      );
    }
    return false;
  }
  return true;
}
function hasApibaraConfig(cwd) {
  const configPathJS = path.join(cwd, "apibara.config.js");
  const configPathTS = path.join(cwd, "apibara.config.ts");
  const configPathMJS = path.join(cwd, "apibara.config.mjs");
  return fs.existsSync(configPathJS) || fs.existsSync(configPathTS) || fs.existsSync(configPathMJS);
}
function getApibaraConfigLanguage(cwd) {
  const configPathJS = path.join(cwd, "apibara.config.js");
  const configPathTS = path.join(cwd, "apibara.config.ts");
  const configPathMJS = path.join(cwd, "apibara.config.mjs");
  if (fs.existsSync(configPathMJS)) {
    return { language: "javascript", extension: "mjs" };
  }
  if (fs.existsSync(configPathJS)) {
    return { language: "javascript", extension: "js" };
  }
  if (fs.existsSync(configPathTS)) {
    return { language: "typescript", extension: "ts" };
  }
  throw new Error(red("\u2716") + " No apibara.config found");
}
function getDnaUrl(chain, network) {
  if (chain === "ethereum") {
    if (network === "mainnet") {
      return dnaUrls.ethereum;
    }
    if (network === "sepolia") {
      return dnaUrls.ethereumSepolia;
    }
  }
  if (chain === "beaconchain") {
    if (network === "mainnet") {
      return dnaUrls.beaconchain;
    }
  }
  if (chain === "starknet") {
    if (network === "mainnet") {
      return dnaUrls.starknet;
    }
    if (network === "sepolia") {
      return dnaUrls.starknetSepolia;
    }
  }
  throw new Error(red("\u2716") + " Invalid chain or network");
}
function convertKebabToCamelCase(_str) {
  let str = _str;
  if (!str || typeof str !== "string") {
    return "";
  }
  if (/^[a-z][a-zA-Z0-9]*$/.test(str)) {
    return str;
  }
  str = str.trim().replace(/^-+|-+$/g, "");
  if (!str) {
    return "";
  }
  return str.replace(/[-_]+/g, "-").split("-").filter(Boolean).map((word, index) => {
    const _word = word.toLowerCase();
    if (index > 0) {
      return _word.charAt(0).toUpperCase() + _word.slice(1);
    }
    return _word;
  }).join("");
}
async function checkFileExists(path2, options) {
  const { askPrompt = false, fileName, allowIgnore = false } = options ?? {};
  if (!fs.existsSync(path2)) {
    return {
      exists: false,
      overwrite: false
    };
  }
  if (askPrompt) {
    const { overwrite } = await prompts({
      type: "select",
      name: "overwrite",
      message: `${fileName ?? basename(path2)} already exists. Please choose how to proceed:`,
      initial: 0,
      choices: [
        ...allowIgnore ? [
          {
            title: "Keep original file",
            value: "ignore"
          }
        ] : [],
        {
          title: "Cancel operation",
          value: "no"
        },
        {
          title: "Overwrite file",
          value: "yes"
        }
      ]
    });
    if (overwrite === "no") {
      cancelOperation();
    }
    if (overwrite === "ignore") {
      return {
        exists: true,
        overwrite: false
      };
    }
    return {
      exists: true,
      overwrite: true
    };
  }
  return {
    exists: true,
    overwrite: false
  };
}
function cancelOperation(message) {
  throw new Error(red("\u2716") + (message ?? " Operation cancelled"));
}
function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent;
  const pkgInfo = pkgFromUserAgent(userAgent);
  if (pkgInfo) {
    return pkgInfo;
  }
  return {
    name: "npm"
  };
}
function pkgFromUserAgent(userAgent) {
  if (!userAgent)
    return void 0;
  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  };
}
async function formatFile(path2) {
  const file = fs.readFileSync(path2, "utf8");
  const formatted = await prettier.format(file, {
    filepath: path2,
    tabWidth: 2
  });
  fs.writeFileSync(path2, formatted);
}

function generatePackageJson(isTypeScript) {
  return {
    name: "apibara-app",
    version: "0.1.0",
    private: true,
    type: "module",
    scripts: {
      ...isTypeScript && { prepare: "apibara prepare" },
      dev: "apibara dev",
      start: "apibara start",
      build: "apibara build",
      ...isTypeScript && { typecheck: "tsc --noEmit" }
    },
    dependencies: {
      "@apibara/protocol": packageVersions["@apibara/protocol"],
      apibara: packageVersions.apibara
    },
    devDependencies: {
      ...isTypeScript && {
        "@types/node": packageVersions["@types/node"],
        typescript: packageVersions.typescript
      }
    }
  };
}
function generateTsConfig() {
  return {
    $schema: "https://json.schemastore.org/tsconfig",
    display: "Default",
    compilerOptions: {
      forceConsistentCasingInFileNames: true,
      target: "ES2022",
      lib: ["ESNext"],
      module: "ESNext",
      moduleResolution: "bundler",
      skipLibCheck: true,
      types: ["node"],
      noEmit: true,
      strict: true,
      baseUrl: "."
    },
    include: [".", "./.apibara/types"],
    exclude: ["node_modules"]
  };
}
function generateApibaraConfig(isTypeScript) {
  return `import { defineConfig } from "apibara/config";

export default defineConfig({
  runtimeConfig: {},
});
`;
}
function generateIndexer({
  indexerId,
  storage,
  chain,
  language
}) {
  return `import { defineIndexer } from "apibara/indexer";
import { useLogger } from "apibara/plugins";
${storage === "postgres" ? `import { drizzleStorage } from "@apibara/plugin-drizzle";` : ""}
${storage === "postgres" ? `import { drizzle } from "@apibara/plugin-drizzle";` : ""}
${chain === "ethereum" ? `import { EvmStream } from "@apibara/evm";` : chain === "beaconchain" ? `import { BeaconChainStream } from "@apibara/beaconchain";` : chain === "starknet" ? `import { StarknetStream } from "@apibara/starknet";` : ""}
${language === "typescript" ? `import type { ApibaraRuntimeConfig } from "apibara/types";` : ""}
${storage === "postgres" ? `import * as schema from "../lib/schema";` : ""}


export default function (runtimeConfig${language === "typescript" ? ": ApibaraRuntimeConfig" : ""}) {
  const { startingBlock, streamUrl } = runtimeConfig["${indexerId}"];
  ${storage === "postgres" ? `const db = drizzle({
    schema,
  });` : ""}

  return defineIndexer(${chain === "ethereum" ? "EvmStream" : chain === "beaconchain" ? "BeaconChainStream" : chain === "starknet" ? "StarknetStream" : ""})({
    streamUrl,
    finality: "accepted",
    startingBlock: BigInt(startingBlock),
    filter: {
      ${chain === "ethereum" ? "logs: []," : chain === "starknet" ? "events:  []," : ""}
    },
    plugins: [${storage === "postgres" ? "drizzleStorage({ db, migrate: { migrationsFolder: './drizzle' } })" : ""}],
    async transform({ endCursor, finality }) {
      const logger = useLogger();

      logger.info(
        "Transforming block | orderKey: ",
        endCursor?.orderKey,
        " | finality: ",
        finality
      );

      ${storage === "postgres" ? `// Example snippet to insert data into db using drizzle with postgres
      // const { db: database } = useDrizzleStorage();

      // await database.insert(schema.cursorTable).values({
      //   endCursor: Number(endCursor?.orderKey),
      //   uniqueKey: \`\${endCursor?.uniqueKey}\`,
      // });` : ""}
    },
  });
}   
`;
}
async function createIndexerFile(options) {
  const indexerFilePath = path.join(
    options.cwd,
    "indexers",
    `${options.indexerFileId}.indexer.${options.extension}`
  );
  const { exists, overwrite } = await checkFileExists(indexerFilePath, {
    askPrompt: true
  });
  if (exists && !overwrite)
    return;
  const indexerContent = generateIndexer(options);
  fs.mkdirSync(path.dirname(indexerFilePath), { recursive: true });
  fs.writeFileSync(indexerFilePath, indexerContent);
  await formatFile(indexerFilePath);
}
async function updatePackageJson({
  cwd,
  chain,
  storage,
  language
}) {
  const packageJsonPath = path.join(cwd, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  if (chain === "ethereum") {
    packageJson.dependencies["@apibara/evm"] = packageVersions["@apibara/evm"];
  } else if (chain === "beaconchain") {
    packageJson.dependencies["@apibara/beaconchain"] = packageVersions["@apibara/beaconchain"];
  } else if (chain === "starknet") {
    packageJson.dependencies["@apibara/starknet"] = packageVersions["@apibara/starknet"];
  }
  if (storage === "postgres") {
    packageJson.scripts["drizzle:generate"] = "drizzle-kit generate";
    packageJson.scripts["drizzle:migrate"] = "drizzle-kit migrate";
    packageJson.dependencies["@apibara/plugin-drizzle"] = packageVersions["@apibara/plugin-drizzle"];
    packageJson.dependencies["drizzle-orm"] = packageVersions["drizzle-orm"];
    packageJson.dependencies["@electric-sql/pglite"] = packageVersions["@electric-sql/pglite"];
    packageJson.dependencies["drizzle-kit"] = packageVersions["drizzle-kit"];
    packageJson.dependencies["pg"] = packageVersions["pg"];
    if (language === "typescript") {
      packageJson.devDependencies["@types/pg"] = packageVersions["@types/pg"];
    }
  }
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  await formatFile(packageJsonPath);
}
async function updateApibaraConfigFile({
  indexerId,
  cwd,
  chain,
  storage,
  language,
  network,
  dnaUrl,
  extension
}) {
  const pathToConfig = path.join(cwd, `apibara.config.${extension}`);
  const runtimeConfigString = `{
  startingBlock: 0,
  streamUrl: "${dnaUrl ?? getDnaUrl(chain, network)}"  
}`;
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(pathToConfig);
  const defineConfigCall = sourceFile.getFirstDescendantByKind(
    SyntaxKind.CallExpression
  );
  if (!defineConfigCall)
    return;
  const configObjectExpression = defineConfigCall.getArguments()[0];
  const runtimeConfigObject = configObjectExpression.getProperty("runtimeConfig");
  if (!runtimeConfigObject) {
    configObjectExpression.addPropertyAssignment({
      name: "runtimeConfig",
      initializer: `{
  "${indexerId}": ${runtimeConfigString}
}`
    });
  } else {
    const runtimeConfigProp = runtimeConfigObject.asKindOrThrow(
      SyntaxKind.PropertyAssignment
    );
    const runtimeConfigObj = runtimeConfigProp.getInitializerOrThrow().asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    runtimeConfigObj.addPropertyAssignment({
      name: `"${indexerId}"`,
      initializer: runtimeConfigString
    });
  }
  sourceFile.saveSync();
  await formatFile(pathToConfig);
}
async function createDrizzleStorageFiles(options) {
  const {
    cwd,
    language,
    storage,
    indexerId,
    extension: fileExtension
  } = options;
  if (storage !== "postgres")
    return;
  const drizzleConfigFileName = `drizzle.config.${fileExtension}`;
  const drizzleConfigPath = path.join(cwd, drizzleConfigFileName);
  const { exists, overwrite } = await checkFileExists(drizzleConfigPath, {
    askPrompt: true,
    allowIgnore: true
  });
  if (!exists || overwrite) {
    const drizzleConfigContent = `${language === "typescript" ? 'import type { Config } from "drizzle-kit";' : ""}

export default {
  schema: "./lib/schema.${fileExtension}",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env["POSTGRES_CONNECTION_STRING"] ?? "memory://${indexerId}",
  },
}${language === "typescript" ? " satisfies Config" : ""};`;
    fs.writeFileSync(drizzleConfigPath, drizzleConfigContent);
    await formatFile(drizzleConfigPath);
    consola.success(`Created ${cyan(drizzleConfigFileName)}`);
  }
  const schemaFileName = `schema.${fileExtension}`;
  const schemaPath = path.join(cwd, "lib", schemaFileName);
  const { exists: schemaExists, overwrite: schemaOverwrite } = await checkFileExists(schemaPath, {
    askPrompt: true,
    allowIgnore: true,
    fileName: `lib/${schemaFileName}`
  });
  if (!schemaExists || schemaOverwrite) {
    const schemaContent = `//  --- Add your pg table schemas here ----

// import { bigint, pgTable, text, uuid } from "drizzle-orm/pg-core";

// export const cursorTable = pgTable("cursor_table", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   endCursor: bigint("end_cursor", { mode: "number" }),
//   uniqueKey: text("unique_key"),
// });

export {};
  `;
    fs.mkdirSync(path.dirname(schemaPath), { recursive: true });
    fs.writeFileSync(schemaPath, schemaContent);
    await formatFile(schemaPath);
    consola.success(`Created ${cyan(`lib/${schemaFileName}`)}`);
  }
  console.log("\n");
  if (!schemaExists || schemaOverwrite) {
    consola.info(
      `Make sure to export your pgTables in ${cyan(`lib/${schemaFileName}`)}`
    );
    console.log();
    consola.info(`${magenta("Example:")}
    
${yellow(`
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502               lib/schema                 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

import { bigint, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const cursorTable = pgTable("cursor_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  endCursor: bigint("end_cursor", { mode: "number" }),
  uniqueKey: text("unique_key"),
});`)}`);
    console.log("\n");
  }
  consola.info(
    `Run ${green(`${options.packageManager}${options.packageManager === "npm" ? " run" : ""} drizzle:generate`)} & ${green(`${options.packageManager}${options.packageManager === "npm" ? " run" : ""} drizzle:migrate`)} to generate and apply migrations.`
  );
}
async function createStorageRelatedFiles(options) {
  const { storage } = options;
  if (storage === "postgres") {
    await createDrizzleStorageFiles(options);
  }
}
const gitIgnoreItems = [
  {
    isRecommended: false,
    value: "node_modules"
  },
  {
    isRecommended: false,
    value: "dist"
  },
  {
    isRecommended: true,
    description: "build and dev files of apibara",
    value: ".apibara"
  },
  {
    isRecommended: false,
    value: ".env"
  },
  {
    isRecommended: false,
    description: "for mac users",
    value: ".DS_Store"
  }
];
async function createGitIgnoreFile(cwd) {
  const gitIgnorePath = path.join(cwd, ".gitignore");
  if (fs.existsSync(gitIgnorePath)) {
    const result = await prompts([
      {
        type: "select",
        name: "overwrite",
        message: `${cyan(".gitignore")} already exists. Please choose how to proceed:`,
        initial: 0,
        choices: [
          {
            title: "Choose items to append in your .gitignore",
            value: "append"
          },
          {
            title: "Keep original",
            value: "ignore"
          },
          {
            title: "Overwrite",
            value: "overwrite"
          }
        ]
      },
      {
        type: (overwrite2) => overwrite2 === "append" ? "multiselect" : null,
        name: "ignoreItems",
        message: "Choose items to append in your .gitignore",
        choices: gitIgnoreItems.map((item) => ({
          title: `${yellow(item.value)}${item.description ? ` - ${item.description}` : ""}${item.isRecommended ? ` ${green("(recommended)")}` : ""}`,
          value: item.value
        }))
      }
    ]);
    const { overwrite, ignoreItems } = result;
    if (overwrite === "append" && ignoreItems.length > 0) {
      const gitIgnoreContent = fs.readFileSync(gitIgnorePath, "utf8");
      fs.writeFileSync(
        gitIgnorePath,
        `${gitIgnoreContent}
${result.ignoreItems.join("\n")}`
      );
      consola.success(`Updated ${cyan(".gitignore")}`);
      return;
    }
    if (overwrite === "overwrite") {
      fs.writeFileSync(
        gitIgnorePath,
        gitIgnoreItems.map((item) => item.value).join("\n")
      );
      consola.success(`Updated ${cyan(".gitignore")}`);
      return;
    }
  }
  fs.writeFileSync(
    gitIgnorePath,
    gitIgnoreItems.map((item) => item.value).join("\n")
  );
  consola.success(`Created ${cyan(".gitignore")}`);
}

async function initializeProject({
  argTargetDir,
  argLanguage,
  argNoCreateIndexer
}) {
  const cwd = process.cwd();
  validateLanguage(argLanguage, true);
  console.log();
  const result = await prompts(
    [
      {
        type: () => argTargetDir && (!fs.existsSync(argTargetDir) || isEmpty(argTargetDir)) ? null : "select",
        name: "overwrite",
        message: () => (argTargetDir === "." ? "Current directory" : `Target directory "${argTargetDir}"`) + " is not empty. Please choose how to proceed:",
        initial: 0,
        choices: [
          {
            title: "Cancel operation",
            value: "no"
          },
          {
            title: "Remove existing files and continue",
            value: "yes"
          },
          {
            title: "Ignore files and continue",
            value: "ignore"
          }
        ],
        hint: "\nCurrent Working Directory: " + cwd
      },
      {
        type: (_, { overwrite: overwrite2 }) => {
          if (overwrite2 === "no") {
            cancelOperation();
          }
          return null;
        },
        name: "overwriteChecker"
      },
      {
        type: argLanguage ? null : "select",
        name: "prompt_language",
        message: "Select a language:",
        choices: [
          {
            title: "Typescript",
            value: "typescript"
          },
          {
            title: "Javascript",
            value: "javascript"
          }
        ]
      }
    ],
    {
      onCancel: () => {
        cancelOperation();
      }
    }
  );
  const { overwrite, prompt_language } = result;
  const root = path.join(cwd, argTargetDir);
  if (overwrite === "yes") {
    emptyDir(root);
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true });
  }
  const lang = argLanguage ? getLanguageFromAlias(argLanguage) : prompt_language;
  const isTs = lang === "typescript";
  const configExt = isTs ? "ts" : "js";
  console.log("\n");
  consola$1.info(`Initializing project in ${argTargetDir}

`);
  const packageJsonPath = path.join(root, "package.json");
  const packageJson = generatePackageJson(isTs);
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n"
  );
  await formatFile(packageJsonPath);
  consola$1.success("Created", cyan("package.json"));
  if (isTs) {
    const tsConfigPath = path.join(root, "tsconfig.json");
    const tsConfig = generateTsConfig();
    fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2) + "\n");
    await formatFile(tsConfigPath);
    consola$1.success("Created", cyan("tsconfig.json"));
  }
  const apibaraConfigPath = path.join(root, `apibara.config.${configExt}`);
  const apibaraConfig = generateApibaraConfig();
  fs.writeFileSync(apibaraConfigPath, apibaraConfig);
  await formatFile(apibaraConfigPath);
  consola$1.success("Created", cyan(`apibara.config.${configExt}`));
  const indexersDir = path.join(root, "indexers");
  if (!fs.existsSync(indexersDir)) {
    fs.mkdirSync(indexersDir, { recursive: true });
    consola$1.success(`Created ${cyan("indexers")} directory`);
  }
  await createGitIgnoreFile(root);
  console.log("\n");
  consola$1.ready(green("Project initialized successfully"));
  console.log();
  if (!argNoCreateIndexer) {
    consola$1.info("Let's create an indexer\n");
    await addIndexer({ argRootDir: argTargetDir });
  } else {
    const pkgManager = getPackageManager();
    consola$1.info(
      "Run ",
      green(`${pkgManager.name} install`),
      " to install all dependencies"
    );
  }
}

async function addIndexer({
  argIndexerId,
  argChain,
  argNetwork,
  argStorage,
  argDnaUrl,
  argRootDir
}) {
  const cwd = path.join(process.cwd(), argRootDir ?? ".");
  const configExists = hasApibaraConfig(cwd);
  if (!configExists) {
    consola$1.error("No apibara.config found in the current directory.");
    const prompt_initialize = await prompts({
      type: "confirm",
      name: "prompt_initialize",
      message: reset(
        "Do you want to initialize a apibara project here before adding an indexer?"
      )
    });
    if (prompt_initialize.prompt_initialize) {
      await initializeProject({
        argTargetDir: process.cwd(),
        argNoCreateIndexer: true
      });
    } else {
      consola$1.info(
        `Initialize a project with ${cyan("apibara init")} before adding an indexer`
      );
      throw new Error(
        red("\u2716") + " Operation cancelled: No apibara.config found"
      );
    }
  }
  const { language, extension } = getApibaraConfigLanguage(cwd);
  validateIndexerId(argIndexerId, true);
  validateChain(argChain, true);
  validateNetwork(argChain, argNetwork, true);
  validateStorage(argStorage, true);
  validateDnaUrl(argDnaUrl, true);
  const result = await prompts(
    [
      {
        type: argIndexerId ? null : "text",
        name: "prompt_indexerId",
        message: reset("Indexer ID:"),
        initial: argIndexerId ?? "my-indexer",
        validate: (id) => validateIndexerId(id) ? checkFileExists(
          path.join(cwd, "indexers", `${id}.indexer.${extension}`)
        ).then(
          ({ exists }) => exists ? `Indexer ${cyan(`${id}.indexer.${extension}`)} already exists` : true
        ) : "Invalid indexer ID, it cannot be empty and must be in kebab-case format"
      },
      {
        type: argChain ? null : "select",
        name: "prompt_chain",
        message: reset("Select a chain:"),
        choices: chains.map((chain) => ({
          title: chain.color(chain.display),
          value: chain
        }))
      },
      {
        type: argNetwork ? null : "select",
        name: "prompt_network",
        message: reset("Select a network:"),
        choices: (chain) => [
          ...(chain?.networks ?? chains.find((c) => c.name === argChain)?.networks ?? []).map((network) => ({
            title: network.color(network.display),
            value: network
          })),
          {
            title: cyan("Other"),
            value: {
              color: cyan,
              display: "Other",
              name: "other"
            }
          }
        ]
      },
      {
        type: (network) => {
          if (network || argNetwork) {
            return network?.name === "other" || argNetwork === "other" ? "text" : null;
          }
          return null;
        },
        name: "prompt_dnaUrl",
        message: reset("Enter a DNA URL:"),
        validate: (url) => validateDnaUrl(url) || "Provide a valid DNA Url"
      },
      {
        type: argStorage ? null : "select",
        name: "prompt_storage",
        message: reset("Select a storage:"),
        choices: storages.map((storage) => ({
          title: storage.color(storage.display),
          value: storage
        }))
      }
    ],
    {
      onCancel: () => {
        cancelOperation();
      }
    }
  );
  const {
    prompt_indexerId,
    prompt_chain,
    prompt_network,
    prompt_storage,
    prompt_dnaUrl
  } = result;
  if (!argIndexerId && !prompt_indexerId) {
    throw new Error(red("\u2716") + " Indexer ID is required");
  }
  if (!argChain && !prompt_chain) {
    throw new Error(red("\u2716") + " Chain is required");
  }
  if (!argNetwork && !prompt_network) {
    throw new Error(red("\u2716") + " Network is required");
  }
  const indexerFileId = argIndexerId ?? prompt_indexerId;
  const pkgManager = getPackageManager();
  const options = {
    cwd,
    indexerFileId,
    indexerId: convertKebabToCamelCase(indexerFileId),
    chain: argChain ?? prompt_chain?.name,
    network: argNetwork ?? prompt_network?.name,
    storage: argStorage ?? prompt_storage?.name,
    dnaUrl: argDnaUrl ?? prompt_dnaUrl,
    language,
    packageManager: pkgManager.name,
    extension
  };
  await updateApibaraConfigFile(options);
  consola$1.success(`Updated ${cyan(`apibara.config.${extension}`)}`);
  await updatePackageJson(options);
  consola$1.success(`Updated ${cyan("package.json")}`);
  await createIndexerFile(options);
  consola$1.success(`Created ${cyan(`${indexerFileId}.indexer.${extension}`)}`);
  await createStorageRelatedFiles(options);
  console.log();
  const baseCommand = `${options.packageManager} install`;
  const tsCommand = `${baseCommand} && ${options.packageManager} run prepare`;
  consola$1.info(
    `Before running the indexer, run ${cyan(language === "typescript" ? tsCommand : baseCommand)}`
  );
}

export { addIndexer, initializeProject };
//# sourceMappingURL=index.mjs.map
