import { ReactNode } from 'react'

export type Project = {
  slug:        string
  title:       string
  alt?:         string
  description: string
  tags:        string[]
  year:        number
  url?:        string
  urlLabel?:   string
  github?:     string
  featured:    boolean
  coverImage?:  string
  contenido?:  string
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

export type Experiment = {
  slug:        string
  title:       string
  description: string
  tags?:       string[]
  year:        number
  embeds?:     { url: string; label?: string }[]
  contenido?:  string
  featured?:   boolean
  coverEmbed?: string 
  coverImage?:  string
}
