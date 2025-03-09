export interface Project {
    id: number
    personal: {
        title: string
        content: string
        image: string
    }
    professional: {
        title: string
        company: string
        position: string
    }
}