import { Cursor, StreamDataResponse, Client } from '@apibara/protocol';
import { a as Indexer } from '../shared/indexer.00654e11.mjs';
import 'hookable';

type VcrConfig = {
    cassetteDir: string;
};
type CassetteOptions = {
    name: string;
    startingCursor: Cursor;
    endingCursor: Cursor;
};

declare function deserialize(str: string): any;
declare function serialize(obj: Record<string, unknown>): string;
declare function isCassetteAvailable(vcrConfig: VcrConfig, cassetteName: string): boolean;

type CassetteDataType<TFilter, TBlock> = {
    filter: TFilter;
    messages: StreamDataResponse<TBlock>[];
};
declare function record<TFilter, TBlock, TTxnParams>(vcrConfig: VcrConfig, client: Client<TFilter, TBlock>, indexer: Indexer<TFilter, TBlock>, cassetteOptions: CassetteOptions): Promise<void>;

declare function replay<TFilter, TBlock, TTxnParams>(vcrConfig: VcrConfig, indexer: Indexer<TFilter, TBlock>, cassetteName: string): Promise<void>;
declare function loadCassette<TFilter, TBlock>(vcrConfig: VcrConfig, cassetteName: string): Client<TFilter, TBlock>;

export { type CassetteDataType, type CassetteOptions, type VcrConfig, deserialize, isCassetteAvailable, loadCassette, record, replay, serialize };
