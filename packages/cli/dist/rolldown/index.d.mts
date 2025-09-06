import { Apibara } from 'apibara/types';
import { RolldownOptions } from 'rolldown';
export { Plugin } from 'rolldown';

declare function getRolldownConfig(apibara: Apibara): RolldownOptions;

export { getRolldownConfig };
