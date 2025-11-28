import type { UIFrameworkConfig } from '@/types'

export const uiFrameworks: UIFrameworkConfig[] = [
    {
        name: 'Element Plus',
        value: 'element-plus',
        components: [
            { type: 'button', label: '按钮', icon: 'button' },
            { type: 'input', label: '输入框', icon: 'input' },
            { type: 'select', label: '选择框', icon: 'select' },
            { type: 'table', label: '表格', icon: 'table' },
            { type: 'form', label: '表单', icon: 'form' },
            { type: 'card', label: '卡片', icon: 'card' },
            { type: 'text', label: '文本', icon: 'text' }
        ]
    },
    {
        name: 'Ant Design Vue',
        value: 'ant-design-vue',
        components: [
            { type: 'button', label: '按钮', icon: 'button' },
            { type: 'input', label: '输入框', icon: 'input' },
            { type: 'select', label: '选择框', icon: 'select' },
            { type: 'table', label: '表格', icon: 'table' },
            { type: 'form', label: '表单', icon: 'form' },
            { type: 'card', label: '卡片', icon: 'card' },
            { type: 'text', label: '文本', icon: 'text' }
        ]
    },
    {
        name: 'Naive UI',
        value: 'naive-ui',
        components: [
            { type: 'button', label: '按钮', icon: 'button' },
            { type: 'input', label: '输入框', icon: 'input' },
            { type: 'select', label: '选择框', icon: 'select' },
            { type: 'table', label: '表格', icon: 'table' },
            { type: 'form', label: '表单', icon: 'form' },
            { type: 'card', label: '卡片', icon: 'card' },
            { type: 'text', label: '文本', icon: 'text' }
        ]
    }
]

export const getFrameworkConfig = (value: string) => {
    return uiFrameworks.find(f => f.value === value)
}
