export interface Post{
    slug: string,
    title: string,
    excerpt?: string,
    coverImage?: string,
    author: Author
    tags: string[],
    category: string,
    date: string
}


export interface Author{
    name: string,
    slug: string,
    avatar: string
}