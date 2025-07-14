export interface Post{
    slug: string,
    title: string,
    excerpt: string,
    coverImage: string,
    authors: Author[]
    tags: string[],
    category: string,
    
}


export interface Author{
    name: string,
    slug: string,
    avatar: string

}