import fetchData from '@/components/DataFetcher'
import React, { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Loading from "./loading"
import Image from 'next/image'
interface BookItems {
    id: number;
    title: string;
    isbn: string;
    pageCount: number;
    authors: string[];
}

const page = async ({ params }: { params: { books_id: string } }) => {
    const data: BookItems = await fetchData(`https://softwium.com/api/books/${params.books_id}`)
    return (
        <Suspense fallback={<Loading />}>
            <main className='mx-4 flex justify-center'>
                <Card className='rounded-xl grid grid-cols-3 w-fit'>
                    <div className='col-span-2'>
                        <CardHeader>
                            <CardTitle>{data.title}</CardTitle>
                            <CardDescription>isbn: {data.isbn}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Pages: {data.pageCount}</p>
                        </CardContent>
                        <CardFooter>
                            <div className="flex flex-wrap">
                                {data.authors.map((author: string) => (
                                    <Badge key={author} className="mr-2 mb-2">{author}</Badge>
                                ))}
                            </div>
                        </CardFooter>
                    </div>
                    <div className='place-content-center mr-2'>
                        <Image
                            src={`https://covers.openlibrary.org/b/isbn/${data.isbn}-L.jpg`}
                            alt={data.title}
                            width={51.65}
                            height={39.15}
                            className='w-full mr-6 my-4 bg-gray-400'
                        />
                    </div>
                </Card>
            </main>
        </Suspense>
    )
}

export default page