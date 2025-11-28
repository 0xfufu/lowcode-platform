<template>
    <div class="home-container">
        <el-header class="header">
            <div class="header-content">
                <h1>低代码平台</h1>
                <el-button type="primary" @click="handleCreateProject">新建项目</el-button>
            </div>
        </el-header>

        <el-main class="main">
            <div v-if="projects.length === 0" class="empty-state">
                <el-empty description="暂无项目，点击新建项目开始" />
            </div>
            <div v-else class="projects-grid">
                <div v-for="project in projects" :key="project.id" class="project-card">
                    <div class="card-header">
                        <h3>{{ project.name }}</h3>
                    </div>
                    <div class="card-body">
                        <p>{{ project.description }}</p>
                        <p class="meta">UI框架: {{ project.uiFramework }}</p>
                    </div>
                    <div class="card-footer">
                        <el-button type="primary" size="small" @click="handleEditProject(project)">编辑</el-button>
                        <el-button type="danger" size="small" @click="handleDeleteProject(project.id)">删除</el-button>
                    </div>
                </div>
            </div>
        </el-main>

        <el-dialog v-model="dialogVisible" title="新建项目" width="500px">
            <el-form :model="formData" label-width="100px">
                <el-form-item label="项目名称">
                    <el-input v-model="formData.name" placeholder="请输入项目名称" />
                </el-form-item>
                <el-form-item label="项目描述">
                    <el-input v-model="formData.description" type="textarea" placeholder="请输入项目描述" />
                </el-form-item>
                <el-form-item label="UI框架">
                    <el-select v-model="formData.uiFramework" placeholder="选择UI框架">
                        <el-option label="Element Plus" value="element-plus" />
                        <el-option label="Ant Design Vue" value="ant-design-vue" />
                        <el-option label="Naive UI" value="naive-ui" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleSubmitProject">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore, type Project } from '@/stores/project'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const projectStore = useProjectStore()

const projects = ref<Project[]>(projectStore.projects)
const dialogVisible = ref(false)
const formData = ref({
    name: '',
    description: '',
    uiFramework: 'element-plus'
})

const handleCreateProject = () => {
    formData.value = {
        name: '',
        description: '',
        uiFramework: 'element-plus'
    }
    dialogVisible.value = true
}

const handleSubmitProject = () => {
    if (!formData.value.name) {
        ElMessage.error('请输入项目名称')
        return
    }

    const newProject: Project = {
        id: Date.now().toString(),
        name: formData.value.name,
        description: formData.value.description,
        pages: [],
        uiFramework: formData.value.uiFramework,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    projectStore.addProject(newProject)
    projects.value = projectStore.projects
    dialogVisible.value = false
    ElMessage.success('项目创建成功')
}

const handleEditProject = (project: Project) => {
    projectStore.setCurrentProject(project)
    router.push('/designer')
}

const handleDeleteProject = (id: string) => {
    projectStore.deleteProject(id)
    projects.value = projectStore.projects
    ElMessage.success('项目已删除')
}
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header {
    background-color: #fff;
    border-bottom: 1px solid #ebeef5;
    padding: 0 20px;
    display: flex;
    align-items: center;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.header h1 {
    margin: 0;
    font-size: 24px;
    color: #333;
}

.main {
    flex: 1;
    overflow-y: auto;
}

.empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.project-card {
    border: 1px solid #ebeef5;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.card-header {
    background-color: #f5f7fa;
    padding: 15px;
    border-bottom: 1px solid #ebeef5;
}

.card-header h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
}

.card-body {
    padding: 15px;
}

.card-body p {
    margin: 0 0 10px 0;
    color: #666;
    font-size: 14px;
}

.card-body .meta {
    color: #999;
    font-size: 12px;
}

.card-footer {
    padding: 10px 15px;
    border-top: 1px solid #ebeef5;
    display: flex;
    gap: 10px;
}
</style>
