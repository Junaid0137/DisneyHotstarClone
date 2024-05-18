import { Genres } from '@/typing';
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';

async function GenerDropDown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API}`,
        },
        next: {
            revalidate: 60 * 60 * 24,
        }
    }
    const res = await fetch(url, options);
    const data = (await res.json()) as Genres
    console.log(data.genres);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex ml-1 mt-[1px] mr-1 text-gray-400 bg-[#020817] rounded-md p-2'> Geners <ChevronDownIcon className='ml-2 mb' /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                {data.genres.map(genre => (
                    <DropdownMenuItem key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenerDropDown
