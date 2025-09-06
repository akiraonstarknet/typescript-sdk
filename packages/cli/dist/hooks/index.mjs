import { ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME } from 'apibara/common';

function useRuntimeConfig() {
  return JSON.parse(
    process.env[ENV_INTERNAL_APIBARA_PROCESSED_RUNTIME] || "{}"
  );
}

export { useRuntimeConfig };
//# sourceMappingURL=index.mjs.map
