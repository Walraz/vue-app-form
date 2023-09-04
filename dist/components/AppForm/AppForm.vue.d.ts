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
    fieldWrapper: {
        type: import("vue").PropType<string | import("vue").Component>;
        default: () => "div";
    };
    actionButtonWrapper: {
        type: import("vue").PropType<string | import("vue").Component>;
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
        type: import("vue").PropType<import("zod").ZodType<any, import("zod").ZodTypeDef, any>>;
        required: true;
    };
    schema: {
        type: import("vue").PropType<AppFormSchemaField[]>;
        required: true;
    };
    actionButtonProps: {
        type: import("vue").PropType<import("quasar").QBtnProps>;
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
    fieldWrapper: {
        type: import("vue").PropType<string | import("vue").Component>;
        default: () => "div";
    };
    actionButtonWrapper: {
        type: import("vue").PropType<string | import("vue").Component>;
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
        type: import("vue").PropType<import("zod").ZodType<any, import("zod").ZodTypeDef, any>>;
        required: true;
    };
    schema: {
        type: import("vue").PropType<AppFormSchemaField[]>;
        required: true;
    };
    actionButtonProps: {
        type: import("vue").PropType<import("quasar").QBtnProps>;
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
}, {
    disable: boolean;
    fieldWrapper: string | import("vue").Component;
    actionButtonWrapper: string | import("vue").Component;
    closeActionButtonText: string;
    confirmActionButtonText: string;
    layoutSlots: number;
    colGutter: "lg" | "md" | "sm" | "xs";
    actionButtonProps: import("quasar").QBtnProps;
    readonly: boolean;
    loading: boolean;
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
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
