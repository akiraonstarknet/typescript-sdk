'use strict';

function generateIndexerId(fileBasedName, identifier) {
  return `indexer_${fileBasedName}_${identifier || "default"}`.replace(
    /[^a-zA-Z0-9_]/g,
    "_"
  );
}

exports.generateIndexerId = generateIndexerId;
//# sourceMappingURL=index.cjs.map
