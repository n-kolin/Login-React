export type RecipeType = {

    id: number,
    title: string,
    ingredients: { qty: number, product: string }[],
    instructions: string[],
    authorId: number,
    imageUrl?: string,
    // category: string,
    // rating: number,
    // dateAdded: Date,  
    // preparationTime: number,
    // difficulty: string,

}


export type RecipeInput = {
    title: string,
    ingredients: string,
    instructions: string,

}

// export type AddRecipeType = {
//     title: string,
//     description: string,
//     products: string,
//     ingredients: string,
//     instructions: string
// }

export type GetRecipeType = {
    id: number,
    title: string,
    // description: string,
    authorId: number,
    ingredients: string[],
    instructions: string,
}