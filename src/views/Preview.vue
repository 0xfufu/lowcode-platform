<template>
    <div class="preview-container">
        <el-header class="header">
            <div class="header-content">
                <el-button type="default" @click="handleBack">← 返回</el-button>
                <h2>预览</h2>
                <div></div>
            </div>
        </el-header>

        <el-main class="preview-content">
            <div class="preview-area">
                <el-empty description="预览内容" />
            </div>
        </el-main>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleBack = () => {
    router.push('/designer')
}
</script>

<style scoped>
.preview-container {
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

.preview-content {
    flex: 1;
    overflow-y: auto;
}

.preview-area {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
    min-height: 100%;
}
</style>
