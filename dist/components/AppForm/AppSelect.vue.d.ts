type ModelValue = string | number | null | undefined;
type Options = {
    label: string;
    value: string | number;
    caption?: string | number;
    disable?: boolean;
}[];
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<ModelValue | ModelValue[]>;
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
        type: import("vue").PropType<Options>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<ModelValue | ModelValue[]>;
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
        type: import("vue").PropType<Options>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    multiple: boolean;
}, {}>;
export default _default;
