import apiClient from '@/utils/api'
import type { Project } from '@/stores/project'

export const projectService = {
    // Get all projects
    async getProjects() {
        return apiClient.get<Project[]>('/api/projects')
    },

    // Get project by ID
    async getProject(id: string) {
        return apiClient.get<Project>(`/api/projects/${id}`)
    },

    // Create new project
    async createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) {
        return apiClient.post<Project>('/api/projects', project)
    },

    // Update project
    async updateProject(id: string, project: Partial<Project>) {
        return apiClient.put<Project>(`/api/projects/${id}`, project)
    },

    // Delete project
    async deleteProject(id: string) {
        return apiClient.delete(`/api/projects/${id}`)
    },

    // Export project as JSON
    async exportProject(id: string) {
        return apiClient.get(`/api/projects/${id}/export`)
    },

    // Publish project
    async publishProject(id: string) {
        return apiClient.post(`/api/projects/${id}/publish`, {})
    }
}
