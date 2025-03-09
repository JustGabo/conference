"use client"
import React, { useState } from 'react'
import {createContext, useContext} from 'react'
import { Project } from '../types'

interface ProjectContextProps{
    children: React.ReactNode
}

interface ProjectContextType {
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    project: Project | null
    setProject: React.Dispatch<React.SetStateAction<Project | null>>
}

const ProjectContext = createContext<ProjectContextType>({
    current: 0,
    setCurrent: () => {},
    project: null,
    setProject: () => {}
})

export const ProjectProvider = ({children}: ProjectContextProps) => {
  const [current, setCurrent] = useState(0)
  const [project, setProject] = useState<Project | null>(null)

    const value = {
        current,
        setCurrent,
        project,
        setProject
    }

  return (
    <ProjectContext.Provider value={value}>
        {children}
    </ProjectContext.Provider>
  )
}

export const useProjectContext = () => {
    const context = useContext(ProjectContext)
    if (!context) throw new Error('useProjectContext must be used within a ProjectProvider')
    return context
}
