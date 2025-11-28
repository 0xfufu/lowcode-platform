import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Project {
    id: string
    name: string
    description: string
    pages: Page[]
    uiFramework: string
    createdAt: string
    updatedAt: string
}

export interface Page {
    id: string
    name: string
    components: Component[]
}

export interface Component {
    id: string
    type: string
    props: Record<string, any>
    children?: Component[]
}

export const useProjectStore = defineStore('project', () => {
    const projects = ref<Project[]>([])
    const currentProject = ref<Project | null>(null)

    const addProject = (project: Project) => {
        projects.value.push(project)
    }

    const updateProject = (project: Project) => {
        const index = projects.value.findIndex(p => p.id === project.id)
        if (index !== -1) {
            projects.value[index] = project
        }
    }

    const deleteProject = (id: string) => {
        projects.value = projects.value.filter(p => p.id !== id)
    }

    const setCurrentProject = (project: Project | null) => {
        currentProject.value = project
    }

    return {
        projects,
        currentProject,
        addProject,
        updateProject,
        deleteProject,
        setCurrentProject
    }
})
