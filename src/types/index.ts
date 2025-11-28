// Common types for the low-code platform

export interface UIFrameworkConfig {
    name: string
    value: string
    components: ComponentDefinition[]
}

export interface ComponentDefinition {
    type: string
    label: string
    icon?: string
    props?: Record<string, PropDefinition>
}

export interface PropDefinition {
    type: 'string' | 'number' | 'boolean' | 'select' | 'array' | 'object'
    label: string
    default?: any
    options?: Array<{ label: string; value: any }>
}

export interface ApiRequest {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    url: string
    headers?: Record<string, string>
    params?: Record<string, any>
    data?: Record<string, any>
}

export interface ApiResponse {
    status: number
    data: any
    message?: string
}
