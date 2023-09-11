import { Component } from 'vue'
import _AppForm from './AppForm.vue'
import _AppSelect from './AppSelect.vue'
import { ZodType } from 'zod'

export interface AppFormSchemaField {
  scope: string
  cols?: number
  component: Component
  column?: number
  transform?: (v: any) => any
  defaultValue: unknown
  componentProps?: {
    [key: string]: unknown
  }
}

export interface AppFormProps {
  modelSchema: ZodType
  schema: AppFormSchemaField[]
  readonly?: boolean
  disable?: boolean
  loading?: boolean
  fieldWrapper?: Component | string
  colGutter?: 'lg' | 'md' | 'sm' | 'xs'
  modelValue?: { [key: string]: unknown } & {}
}

export const AppForm = _AppForm
export const AppSelect = _AppSelect
