#!/usr/bin/env node
import { defineCommand, runMain } from 'citty';

const mainCli = defineCommand({
  meta: {
    name: "apibara",
    description: "Apibara CLI",
    version: "2.0.0"
  },
  subCommands: {
    dev: () => import('../chunks/dev.mjs').then((r) => r.default),
    build: () => import('../chunks/build.mjs').then((r) => r.default),
    start: () => import('../chunks/start.mjs').then((r) => r.default),
    prepare: () => import('../chunks/prepare.mjs').then((r) => r.default),
    init: () => import('../chunks/init.mjs').then((r) => r.default),
    add: () => import('../chunks/add.mjs').then((r) => r.default),
    "write-project-info": () => import('../chunks/write-project-info.mjs').then((r) => r.default)
  }
});
runMain(mainCli);

export { mainCli };
//# sourceMappingURL=index.mjs.map
