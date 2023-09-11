import { AppFormSchemaField } from './';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<{
            [key: string]: unknown;
        }>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    modelSchema: {
        type: import("vue").PropType<import("zod").ZodType<any, import("zod").ZodTypeDef, any>>;
        required: true;
    };
    schema: {
        type: import("vue").PropType<AppFormSchemaField[]>;
        required: true;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    fieldWrapper: {
        type: import("vue").PropType<string | import("vue").Component>;
        default: () => "div";
    };
    colGutter: {
        type: import("vue").PropType<"lg" | "md" | "sm" | "xs">;
        default: () => "sm";
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "submit" | "reset" | "close")[], "update:modelValue" | "submit" | "reset" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<{
            [key: string]: unknown;
        }>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    modelSchema: {
        type: import("vue").PropType<import("zod").ZodType<any, import("zod").ZodTypeDef, any>>;
        required: true;
    };
    schema: {
        type: import("vue").PropType<AppFormSchemaField[]>;
        required: true;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: () => false;
    };
    fieldWrapper: {
        type: import("vue").PropType<string | import("vue").Component>;
        default: () => "div";
    };
    colGutter: {
        type: import("vue").PropType<"lg" | "md" | "sm" | "xs">;
        default: () => "sm";
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    disable: boolean;
    readonly: boolean;
    loading: boolean;
    fieldWrapper: string | import("vue").Component;
    colGutter: "lg" | "md" | "sm" | "xs";
}, {}>, Partial<Record<string, (_: {
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
    top?(_: {}): any;
    bottom?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
