import fetchData from '@/components/DataFetcher'
import React,{Suspense} from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';
import Loading from './loading';
interface BookItems {
  id: number;
  title: string;
  isbn: string;
  pageCount: number;
  authors: string[];
}

const page = async () => {
  const data = await fetchData("https://softwium.com/api/books")
  return (
    <Suspense fallback={<Loading/>}>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((book: BookItems) => (
            <Card key={book.id} className='rounded-xl'>
              <CardHeader>
                <Link href={`/books/${book.id}`} className='hover:scale-105 hover:underline active:scale-90 transition-all'>
                  <CardTitle>{book.title}</CardTitle>
                </Link>
                <CardDescription>isbn: {book.isbn}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pages: {book.pageCount}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap">
                  {book.authors.map((author: string) => (
                    <Badge key={author} className="mr-2 mb-2">{author}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </Suspense>
  )
}

export default page