<template>
    <component :is="getComponentType()" v-bind="component.props" :key="component.id">
        <template v-if="component.children && component.children.length > 0">
            <ComponentRenderer v-for="child in component.children" :key="child.id" :component="child" />
        </template>
    </component>
</template>

<script setup lang="ts">
import type { Component } from '@/stores/project'

interface Props {
    component: Component
}

const props = defineProps<Props>()

const getComponentType = () => {
    const typeMap: Record<string, string> = {
        button: 'el-button',
        input: 'el-input',
        table: 'el-table',
        form: 'el-form',
        card: 'el-card',
        text: 'div'
    }
    return typeMap[props.component.type] || 'div'
}
</script>
