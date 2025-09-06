function generateIndexerId(fileBasedName, identifier) {
  return `indexer_${fileBasedName}_${identifier || "default"}`.replace(
    /[^a-zA-Z0-9_]/g,
    "_"
  );
}

export { generateIndexerId };
//# sourceMappingURL=index.mjs.map
