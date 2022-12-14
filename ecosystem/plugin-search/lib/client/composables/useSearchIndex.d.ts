import type { Ref } from 'vue';
import type { SearchIndex } from '../../shared/index.js';
export type SearchIndexRef = Ref<SearchIndex>;
export declare const searchIndex: SearchIndexRef;
export declare const useSearchIndex: () => SearchIndexRef;
