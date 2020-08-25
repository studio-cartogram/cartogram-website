import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import {Disruption} from '../types';

const contentDirectory = join(process.cwd(), '_content');
const disruptionsDirectory = join(contentDirectory, 'disruptions');

export function readDisruptionSlugs() {
  return fs.readdirSync(contentDirectory)
}

export function getDisruptionBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(contentDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Partial<Disruption> = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field as keyof Disruption] = data[field]
    }
  })

  return items
}


export function getDisruptions(fields: string[] = []) {
  const slugs = readDisruptionSlugs()
  const disruptions = slugs
    .map((slug) => getDisruptionBySlug(`${slug}`, fields))
    .filter(disruption => disruption.status !== 'resolved')
    .sort((post1, post2) => (post1.date && post2.date && post1.date > post2.date ? -1 : 1))

  return disruptions
}
