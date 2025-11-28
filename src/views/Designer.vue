<template>
    <div class="designer-container">
        <el-header class="header">
            <div class="header-content">
                <el-button type="default" @click="handleBack">← 返回</el-button>
                <h2>{{ currentProject?.name || '设计器' }}</h2>
                <div class="header-actions">
                    <el-button type="primary" @click="handlePreview">预览</el-button>
                    <el-button type="success" @click="handlePublish">发布</el-button>
                </div>
            </div>
        </el-header>

        <div class="designer-content">
            <el-aside class="sidebar">
                <div class="sidebar-section">
                    <h3>页面管理</h3>
                    <div class="pages-list">
                        <div v-for="page in currentProject?.pages" :key="page.id" class="page-item">
                            {{ page.name }}
                        </div>
                    </div>
                    <el-button type="primary" size="small" @click="handleAddPage">+ 新建页面</el-button>
                </div>

                <div class="sidebar-section">
                    <h3>组件库</h3>
                    <div class="components-list">
                        <div v-for="comp in availableComponents" :key="comp.type" class="component-item" draggable="true">
                            {{ comp.label }}
                        </div>
                    </div>
                </div>
            </el-aside>

            <el-main class="canvas">
                <div class="canvas-area">
                    <div class="canvas-placeholder">
                        <el-empty description="拖拽组件到此处开始设计" />
                    </div>
                </div>
            </el-main>

            <el-aside class="properties">
                <div class="properties-section">
                    <h3>属性面板</h3>
                    <el-empty description="选择组件查看属性" />
                </div>
            </el-aside>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '@/stores/project'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const projectStore = useProjectStore()

const currentProject = computed(() => projectStore.currentProject)

const availableComponents = [
    { type: 'button', label: '按钮' },
    { type: 'input', label: '输入框' },
    { type: 'table', label: '表格' },
    { type: 'form', label: '表单' },
    { type: 'card', label: '卡片' },
    { type: 'text', label: '文本' }
]

const handleBack = () => {
    projectStore.setCurrentProject(null)
    router.push('/')
}

const handleAddPage = () => {
    if (!currentProject.value) return

    const newPage = {
        id: Date.now().toString(),
        name: `页面${currentProject.value.pages.length + 1}`,
        components: []
    }

    currentProject.value.pages.push(newPage)
    projectStore.updateProject(currentProject.value)
    ElMessage.success('页面已创建')
}

const handlePreview = () => {
    if (!currentProject.value) return
    router.push(`/preview/${currentProject.value.id}`)
}

const handlePublish = () => {
    ElMessage.success('项目已发布')
}
</script>

<style scoped>
.designer-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header {
    background-color: #fff;
    border-bottom: 1px solid #ebeef5;
    padding: 0 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

.header h2 {
    margin: 0;
    flex: 1;
    text-align: center;
    font-size: 18px;
}

.header-actions {
    display: flex;
    gap: 10px;
}

.designer-content {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.sidebar {
    width: 250px;
    border-right: 1px solid #ebeef5;
    overflow-y: auto;
    padding: 20px;
}

.sidebar-section {
    margin-bottom: 30px;
}

.sidebar-section h3 {
    margin: 0 0 15px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
}

.pages-list {
    margin-bottom: 10px;
}

.page-item {
    padding: 8px 12px;
    background-color: #f5f7fa;
    border-radius: 4px;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 14px;
}

.page-item:hover {
    background-color: #e8eef5;
}

.components-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
}

.component-item {
    padding: 10px;
    background-color: #f5f7fa;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: move;
    font-size: 14px;
    text-align: center;
    transition: all 0.3s ease;
}

.component-item:hover {
    background-color: #e8eef5;
    border-color: #409eff;
}

.canvas {
    flex: 1;
    background-color: #f5f7fa;
    overflow: auto;
}

.canvas-area {
    min-height: 100%;
    padding: 20px;
}

.canvas-placeholder {
    background-color: #fff;
    border: 2px dashed #dcdfe6;
    border-radius: 4px;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.properties {
    width: 280px;
    border-left: 1px solid #ebeef5;
    overflow-y: auto;
    padding: 20px;
}

.properties-section h3 {
    margin: 0 0 15px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
}
</style>
