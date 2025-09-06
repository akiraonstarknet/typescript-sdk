type Options$1 = {
    argIndexerId?: string;
    argChain?: string;
    argNetwork?: string;
    argStorage?: string;
    argDnaUrl?: string;
    argRootDir?: string;
};
declare function addIndexer({ argIndexerId, argChain, argNetwork, argStorage, argDnaUrl, argRootDir, }: Options$1): Promise<void>;

type Options = {
    argTargetDir: string;
    argLanguage?: string;
    argNoCreateIndexer?: boolean;
};
declare function initializeProject({ argTargetDir, argLanguage, argNoCreateIndexer, }: Options): Promise<void>;

export { addIndexer, initializeProject };
