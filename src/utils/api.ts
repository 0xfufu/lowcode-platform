import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class ApiClient {
    private instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Request interceptor
        this.instance.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            },
            error => Promise.reject(error)
        )

        // Response interceptor
        this.instance.interceptors.response.use(
            response => response.data,
            error => {
                if (error.response?.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/login'
                }
                return Promise.reject(error)
            }
        )
    }

    get<T = any>(url: string, config?: AxiosRequestConfig) {
        return this.instance.get<any, T>(url, config)
    }

    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.instance.post<any, T>(url, data, config)
    }

    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.instance.put<any, T>(url, data, config)
    }

    delete<T = any>(url: string, config?: AxiosRequestConfig) {
        return this.instance.delete<any, T>(url, config)
    }

    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.instance.patch<any, T>(url, data, config)
    }
}

export default new ApiClient()
