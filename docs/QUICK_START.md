# 快速开始指�?
## 🚀 5分钟快速启�?
### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动开发服务器
```bash
pnpm dev
```

浏览器会自动打开 `http://localhost:5173`

### 3. 开始使�?- 点击"新建项目"创建第一个项�?- 选择 UI 框架
- 点击"编辑"进入设计�?- 开始设计你的页�?
---

## 📁 项目文件导航

| 文件/目录 | 说明 |
|---------|------|
| `src/views/Home.vue` | 项目首页 - 项目列表和创�?|
| `src/views/Designer.vue` | 设计�?- 拖拽编辑页面 |
| `src/views/Preview.vue` | 预览页面 - 查看设计效果 |
| `src/stores/project.ts` | Pinia 状态管�?|
| `src/utils/api.ts` | Axios API 客户�?|
| `src/config/uiFrameworks.ts` | UI 框架配置 |
| `src/services/projectService.ts` | 项目 API 服务 |
| `vite.config.ts` | Vite 构建配置 |
| `tsconfig.json` | TypeScript 配置 |

---

## 🎯 常用命令

```bash
# 开�?pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 代码检�?pnpm lint

# 代码格式�?pnpm format
```

---

## 🔧 环境配置

创建 `.env.local` 文件�?
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_TITLE=低代码平�?```

---

## 📝 核心概念

### Project（项目）
```typescript
{
  id: string
  name: string
  description: string
  pages: Page[]
  uiFramework: 'element-plus' | 'ant-design-vue' | 'naive-ui'
  createdAt: string
  updatedAt: string
}
```

### Page（页面）
```typescript
{
  id: string
  name: string
  components: Component[]
}
```

### Component（组件）
```typescript
{
  id: string
  type: 'button' | 'input' | 'table' | 'form' | 'card' | 'text'
  props: Record<string, any>
  children?: Component[]
}
```

---

## 🎨 支持�?UI 框架

- **Element Plus** - 企业�?UI 组件�?- **Ant Design Vue** - 蚂蚁金服设计系统
- **Naive UI** - 轻量�?Vue 3 UI �?
---

## 🔌 API 调用示例

```typescript
import apiClient from '@/utils/api'

// GET 请求
const projects = await apiClient.get('/api/projects')

// POST 请求
const newProject = await apiClient.post('/api/projects', {
  name: 'My Project',
  description: 'Project description',
  uiFramework: 'element-plus'
})

// PUT 请求
const updated = await apiClient.put('/api/projects/123', {
  name: 'Updated Name'
})

// DELETE 请求
await apiClient.delete('/api/projects/123')
```

---

## 💡 开发提�?
### 添加新页�?1. �?`src/views/` 创建 `.vue` 文件
2. �?`src/router/index.ts` 添加路由
3. 使用 `<script setup>` 语法

### 添加新组�?1. �?`src/components/` 创建 `.vue` 文件
2. 在需要的地方导入使用
3. 遵循 TypeScript 类型检�?
### 修改状�?```typescript
import { useProjectStore } from '@/stores/project'

const projectStore = useProjectStore()
projectStore.addProject(newProject)
projectStore.updateProject(project)
projectStore.deleteProject(id)
```

---

## 🐛 调试技�?
### Vue DevTools
安装 Vue 3 DevTools 浏览器扩展，可以�?- 查看组件�?- 检�?Pinia 状�?- 追踪事件

### 浏览器控制台
```javascript
// 查看 Pinia 状�?import { useProjectStore } from '@/stores/project'
useProjectStore().projects
```

---

## 📚 相关文档

- [README.md](./README.md) - 项目详细说明
- [SETUP.md](./SETUP.md) - 项目设置指南
- [PROGRESS.md](./PROGRESS.md) - 开发进度跟�?
---

## �?常见问题

**Q: 如何修改 API 服务器地址�?*
A: 编辑 `.env.local` 文件，修�?`VITE_API_BASE_URL`

**Q: 如何添加新的组件类型�?*
A: �?`src/config/uiFrameworks.ts` 中添加组件定�?
**Q: 如何切换 UI 框架�?*
A: 创建项目时选择不同�?UI 框架

**Q: 如何调试状态管理？**
A: 使用 Vue DevTools 查看 Pinia 状�?
---

## 🆘 获取帮助

- 查看 [README.md](./README.md) 了解项目概况
- 查看 [SETUP.md](./SETUP.md) 了解详细设置
- 查看 [PROGRESS.md](./PROGRESS.md) 了解开发进�?- 检查浏览器控制台的错误信息
- 使用 Vue DevTools 调试

---

**祝你开发愉快！🎉**
