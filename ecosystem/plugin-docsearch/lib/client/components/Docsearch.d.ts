import type { PropType } from 'vue';
import type { DocsearchOptions } from '../../shared/index.js';
import '@docsearch/css';
import '../styles/docsearch.css';
export declare const Docsearch: import("vue").DefineComponent<{
    containerId: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    options: {
        type: PropType<DocsearchOptions>;
        required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    containerId: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    options: {
        type: PropType<DocsearchOptions>;
        required: true;
    };
}>>, {
    containerId: string;
}>;
