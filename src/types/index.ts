import { ReactNode } from 'react'

export type Project = {
  slug:        string
  title:       string
  description: string
  tags:        string[]
  year:        number
  url?:        string
  github?:     string
  featured:    boolean
  coverImage:  string
}

export type TeachingItem = {
  title:        string
  institution:  string
  period:       string
  description:  ReactNode // string
  subjects?:    string[]
  tags?:         string[]
  externalUrl?: string   // ← nuevo
}
