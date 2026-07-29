/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
const book1: {ISBN: string, title: string, author: string, totalPages: number, category: string, isAvailable: boolean} = 
    {ISBN: "978-0-123456-47-2",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    totalPages: 379,
    category: "Historical Fiction",
    isAvailable: true}

const book2: {ISBN: string, title: string, author: string, totalPages: number, category: string, isAvailable: boolean} =
    {ISBN: "978-602-033-295-1",
    title: "Bumi",
    author: "Tere Liye",
    totalPages: 440,
    category: "Fantasy",
    isAvailable: true}

const book3: {ISBN: string, title: string, author: string, totalPages: number, category: string, isAvailable: boolean} =
    {ISBN: "978-623-5953-78-4",
    title: "Azzamine",
    author: "Sophie Aulia",
    totalPages: 336,
    category: "Romance",
    isAvailable: true}

console.log("==Book Data==");
console.log({book1, book2, book3}); 