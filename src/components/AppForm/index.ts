import { Component } from 'vue'
import _AppForm from './AppForm.vue'
import _AppSelect from './AppSelect.vue'
import { ZodType } from 'zod'
import { QBtnProps } from 'quasar'

export interface AppFormSchemaField {
  scope: string
  cols?: number
  component: Component
  layoutSlot?: number
  transform?: (v: any) => any
  defaultValue: unknown
  componentProps?: {
    [key: string]: unknown
  }
}

export interface AppFormProps {
  fieldWrapper?: Component | string
  actionButtonWrapper?: Component | string
  closeActionButtonText?: string
  confirmActionButtonText?: string
  colGutter?: 'lg' | 'md' | 'sm' | 'xs'
  modelValue?: { [key: string]: unknown } & {}
  modelSchema: ZodType
  schema: AppFormSchemaField[]
  actionButtonProps?: QBtnProps
  readonly?: boolean
  disable?: boolean
  loading?: boolean
}

export const AppForm = _AppForm
export const AppSelect = _AppSelect
