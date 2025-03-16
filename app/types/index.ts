export interface Project {
    id: number
    personal: {
        title: string
        content: string
        image: string
        city: string
    }
    professional: {
        title: string
        gallery: string,
        company: string
        position: string
        objective: string
    }
}