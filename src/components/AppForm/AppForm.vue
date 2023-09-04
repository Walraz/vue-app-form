<template>
  <q-form
    @validation-error="onFormValidationError"
    @submit="onSubmit"
    greedy
    @reset="onReset"
    ref="form"
  >
    <component :is="fieldWrapper">
      <div :class="`row q-col-gutter-md`">
        <template v-for="layoutSlot of layoutSlots" :key="layoutSlot">
          <div class="col">
            <div :class="`row q-col-gutter-${colGutter}`">
              <template
                v-for="field of schema.filter((x) => {
                  const slotPos = x.layoutSlot || 1
                  if (slotPos > layoutSlots) return 1 === layoutSlot
                  return slotPos === layoutSlot
                })"
                :key="field.scope"
              >
                <div :class="`col-${field.cols || 'auto'}`">
                  <slot
                    :name="field.scope"
                    :props="{
                      setterScope,
                      getterScope,
                      scope: field.scope,
                      ...propsAndEvent(field),
                    }"
                  >
                    <component
                      :is="field.component"
                      v-bind="propsAndEvent(field).bind"
                      v-on="propsAndEvent(field).on"
                    />
                  </slot>
                </div>
              </template>
            </div>
          </div>
          <div class="col-auto flex" v-if="layoutSlot !== layoutSlots">
            <q-separator vertical />
          </div>
        </template>
      </div>
    </component>
    <slot name="actions" :props="{ bind: { ...actionButtonProps } }">
      <q-separator />
      <component :is="actionButtonWrapper">
        <slot name="action-button-left" />
        <q-space />
        <slot name="action-button-right">
          <q-btn
            v-bind="actionButtonProps"
            @click="onCancel"
            :disable="loading"
            >{{ closeActionButtonText }}</q-btn
          >
          <q-btn
            v-bind="actionButtonProps"
            type="submit"
            color="primary"
            :loading="loading"
            >{{ confirmActionButtonText }}</q-btn
          >
        </slot>
      </component>
    </slot>
  </q-form>
</template>

<script setup lang="ts">
import { useForm } from './useForm'
import set from 'lodash.set'
import get from 'lodash.get'
import { AppFormProps } from './'
import { ref, toRaw, watch } from 'vue'
import { QForm } from 'quasar'
import { AppFormSchemaField } from './'

const form = ref<QForm>()
const props = withDefaults(defineProps<AppFormProps>(), {
  layoutSlots: () => 1,
  actionButtonProps: () => ({}),
  colGutter: () => 'sm',
  fieldWrapper: () => 'div',
  actionButtonWrapper: () => 'div',
  closeActionButtonText: () => 'Stäng',
  confirmActionButtonText: () => 'Spara',
  readonly: () => false,
  disable: () => false,
  loading: () => false,
})

const setDefaultValues = (
  model: { [key: string]: unknown } = {},
  schema: AppFormSchemaField[],
) => {
  for (const field of schema) {
    set(
      model,
      field.scope,
      field?.transform
        ? field?.transform(field.defaultValue)
        : field.defaultValue,
    )
  }
  return model
}

const emit = defineEmits(['submit', 'update:modelValue', 'reset', 'close'])
const { resetDefaultForm, validateForm, formData, fieldError } = useForm(
  setDefaultValues(props.modelValue, props.schema),
)

watch(
  formData,
  (value) => {
    emit('update:modelValue', value)
  },
  {
    deep: true,
    immediate: true,
  },
)

const getterScope = (scope: string) => {
  return get(formData.value, scope)
}

const setterScope = (value: any, field: AppFormSchemaField) => {
  set(
    formData.value,
    field.scope,
    field?.transform ? field?.transform(value) : value,
  )
  if (fieldError.value[field.scope]) {
    validateForm(props.modelSchema)
  }
}

const onSubmit = () => {
  validateForm(props.modelSchema)
  if (!validateForm(props.modelSchema)) return
  emit('submit', toRaw(formData.value))
}

const onReset = () => {
  resetDefaultForm()
  form.value?.resetValidation()
  emit('reset')
}

const onCancel = () => {
  emit('close')
}

const onFormValidationError = () => validateForm(props.modelSchema)

const propsAndEvent = (field: AppFormSchemaField) => {
  return {
    bind: {
      ...field.componentProps,
      readonly: props.readonly,
      disable: props.disable,
      modelValue: getterScope(field.scope),
      error: Boolean(fieldError.value[field.scope]),
      errorMessage: fieldError.value[field.scope] || '',
    },
    on: {
      'update:modelValue': (v: any) => setterScope(v, field),
    },
  }
}
</script>
