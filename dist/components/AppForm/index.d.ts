import { Component } from 'vue';
import { ZodType } from 'zod';
import { QBtnProps } from 'quasar';
export interface AppFormSchemaField {
    scope: string;
    cols?: number;
    component: Component;
    layoutSlot?: number;
    transform?: (v: any) => any;
    defaultValue: unknown;
    componentProps: {
        [key: string]: unknown;
    };
}
export interface AppFormProps {
    fieldWrapper?: Component | string;
    actionButtonWrapper?: Component | string;
    closeActionButtonText?: string;
    confirmActionButtonText?: string;
    layoutSlots?: number;
    colGutter?: 'lg' | 'md' | 'sm' | 'xs';
    modelValue?: {
        [key: string]: unknown;
    } & {};
    modelSchema: ZodType;
    schema: AppFormSchemaField[];
    actionButtonProps?: QBtnProps;
    readonly?: boolean;
    disable?: boolean;
    loading?: boolean;
}
export declare const AppForm: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            disable?: boolean | undefined;
            fieldWrapper?: string | Component | undefined;
            actionButtonWrapper?: string | Component | undefined;
            closeActionButtonText?: string | undefined;
            confirmActionButtonText?: string | undefined;
            layoutSlots?: number | undefined;
            colGutter?: "lg" | "md" | "sm" | "xs" | undefined;
            actionButtonProps?: QBtnProps | undefined;
            readonly?: boolean | undefined;
            loading?: boolean | undefined;
            readonly modelValue?: {
                [key: string]: unknown;
            } | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
            onReset?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
            readonly modelSchema: ZodType;
            readonly schema: AppFormSchemaField[];
            onClose?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue" | "submit" | "reset" | "close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<{
                    [key: string]: unknown;
                }>;
            };
            disable: {
                type: import("vue").PropType<boolean>;
                default: () => false;
            };
            fieldWrapper: {
                type: import("vue").PropType<string | Component>;
                default: () => "div";
            };
            actionButtonWrapper: {
                type: import("vue").PropType<string | Component>;
                default: () => "div";
            };
            closeActionButtonText: {
                type: import("vue").PropType<string>;
                default: () => "Stäng";
            };
            confirmActionButtonText: {
                type: import("vue").PropType<string>;
                default: () => "Spara";
            };
            layoutSlots: {
                type: import("vue").PropType<number>;
                default: () => 1;
            };
            colGutter: {
                type: import("vue").PropType<"lg" | "md" | "sm" | "xs">;
                default: () => "sm";
            };
            modelSchema: {
                type: import("vue").PropType<ZodType<any, import("zod").ZodTypeDef, any>>;
                required: true;
            };
            schema: {
                type: import("vue").PropType<AppFormSchemaField[]>;
                required: true;
            };
            actionButtonProps: {
                type: import("vue").PropType<QBtnProps>;
                default: () => {};
            };
            readonly: {
                type: import("vue").PropType<boolean>;
                default: () => false;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: () => false;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onReset?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "submit" | "reset" | "close")[], string, {
            disable: boolean;
            fieldWrapper: Component | string;
            actionButtonWrapper: Component | string;
            closeActionButtonText: string;
            confirmActionButtonText: string;
            layoutSlots: number;
            colGutter: 'lg' | 'md' | 'sm' | 'xs';
            actionButtonProps: QBtnProps;
            readonly: boolean;
            loading: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<{
                [key: string]: unknown;
            }>;
        };
        disable: {
            type: import("vue").PropType<boolean>;
            default: () => false;
        };
        fieldWrapper: {
            type: import("vue").PropType<string | Component>;
            default: () => "div";
        };
        actionButtonWrapper: {
            type: import("vue").PropType<string | Component>;
            default: () => "div";
        };
        closeActionButtonText: {
            type: import("vue").PropType<string>;
            default: () => "Stäng";
        };
        confirmActionButtonText: {
            type: import("vue").PropType<string>;
            default: () => "Spara";
        };
        layoutSlots: {
            type: import("vue").PropType<number>;
            default: () => 1;
        };
        colGutter: {
            type: import("vue").PropType<"lg" | "md" | "sm" | "xs">;
            default: () => "sm";
        };
        modelSchema: {
            type: import("vue").PropType<ZodType<any, import("zod").ZodTypeDef, any>>;
            required: true;
        };
        schema: {
            type: import("vue").PropType<AppFormSchemaField[]>;
            required: true;
        };
        actionButtonProps: {
            type: import("vue").PropType<QBtnProps>;
            default: () => {};
        };
        readonly: {
            type: import("vue").PropType<boolean>;
            default: () => false;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: () => false;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<{
            [key: string]: unknown;
        }>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    fieldWrapper: {
        type: import("vue").PropType<string | Component>;
        default: () => "div";
    };
    actionButtonWrapper: {
        type: import("vue").PropType<string | Component>;
        default: () => "div";
    };
    closeActionButtonText: {
        type: import("vue").PropType<string>;
        default: () => "Stäng";
    };
    confirmActionButtonText: {
        type: import("vue").PropType<string>;
        default: () => "Spara";
    };
    layoutSlots: {
        type: import("vue").PropType<number>;
        default: () => 1;
    };
    colGutter: {
        type: import("vue").PropType<"lg" | "md" | "sm" | "xs">;
        default: () => "sm";
    };
    modelSchema: {
        type: import("vue").PropType<ZodType<any, import("zod").ZodTypeDef, any>>;
        required: true;
    };
    schema: {
        type: import("vue").PropType<AppFormSchemaField[]>;
        required: true;
    };
    actionButtonProps: {
        type: import("vue").PropType<QBtnProps>;
        default: () => {};
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "submit" | "reset" | "close")[], "update:modelValue" | "submit" | "reset" | "close", {
    disable: boolean;
    fieldWrapper: Component | string;
    actionButtonWrapper: Component | string;
    closeActionButtonText: string;
    confirmActionButtonText: string;
    layoutSlots: number;
    colGutter: 'lg' | 'md' | 'sm' | 'xs';
    actionButtonProps: QBtnProps;
    readonly: boolean;
    loading: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        props: {
            bind: {
                readonly: boolean;
                disable: boolean;
                modelValue: any;
                error: boolean;
                errorMessage: string;
            };
            on: {
                'update:modelValue': (v: any) => void;
            };
            setterScope: (value: any, field: AppFormSchemaField) => void;
            getterScope: (scope: string) => any;
            scope: string;
        };
    }) => any>> & {
        actions?(_: {
            props: {
                bind: {
                    size?: string | undefined;
                    type?: string | undefined;
                    to?: any;
                    replace?: boolean | undefined;
                    href?: string | undefined;
                    target?: string | undefined;
                    label?: string | number | undefined;
                    icon?: string | undefined;
                    iconRight?: string | undefined;
                    outline?: boolean | undefined;
                    flat?: boolean | undefined;
                    unelevated?: boolean | undefined;
                    rounded?: boolean | undefined;
                    push?: boolean | undefined;
                    square?: boolean | undefined;
                    glossy?: boolean | undefined;
                    fab?: boolean | undefined;
                    fabMini?: boolean | undefined;
                    padding?: string | undefined;
                    color?: import("quasar").NamedColor | undefined;
                    textColor?: import("quasar").NamedColor | undefined;
                    noCaps?: boolean | undefined;
                    noWrap?: boolean | undefined;
                    dense?: boolean | undefined;
                    ripple?: any;
                    tabindex?: string | number | undefined;
                    align?: "left" | "right" | "center" | "around" | "between" | "evenly" | undefined;
                    stack?: boolean | undefined;
                    stretch?: boolean | undefined;
                    loading?: boolean | undefined;
                    disable?: boolean | undefined;
                    round?: boolean | undefined;
                    percentage?: number | undefined;
                    darkPercentage?: boolean | undefined;
                    onClick?: ((evt: Event, go?: ((opts?: {
                        to?: any;
                        replace?: boolean | undefined;
                        returnRouterError?: boolean | undefined;
                    } | undefined) => Promise<any>) | undefined) => void) | undefined;
                };
            };
        }): any;
        "action-button-left"?(_: {}): any;
        "action-button-right"?(_: {}): any;
    };
});
export declare const AppSelect: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<(string | number | null | undefined) | (string | number | null | undefined)[]>;
        required: true;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    newValue: {
        type: import("vue").PropType<boolean>;
    };
    options: {
        type: import("vue").PropType<{
            label: string;
            value: string | number;
            caption?: string | number | undefined;
            disable?: boolean | undefined;
        }[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<(string | number | null | undefined) | (string | number | null | undefined)[]>;
        required: true;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    newValue: {
        type: import("vue").PropType<boolean>;
    };
    options: {
        type: import("vue").PropType<{
            label: string;
            value: string | number;
            caption?: string | number | undefined;
            disable?: boolean | undefined;
        }[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    multiple: boolean;
}, {}>;
