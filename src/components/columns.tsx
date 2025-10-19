"use client"

import { User } from '@/lib/hooks/useGetUsers'
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import Image from "next/image"
import { Button } from './ui/button'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
    {
        accessorFn: (row) => row.picture.thumbnail,
        id: "avatar",
        header: "Avatar",
        cell: ({ row }) => {
            const picture = row.original.picture.thumbnail
            return (
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                        src={picture}
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        unoptimized
                    />
                </div>
            )
        },
    },
    {
        accessorFn: (row) => `${row.name.first} ${row.name.last}`,
        id: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.original.name
            return (
                <div>
                    <div className="font-medium">{name.first} {name.last}</div>
                </div>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => {
            const gender = row.getValue("gender") as string
            return (
                <span className="capitalize">{gender}</span>
            )
        },
    },
    {
        accessorFn: (row) => `${row.location.city}, ${row.location.state}`,
        id: "location",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Location
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const location = row.original.location
            return (
                <div>
                    <div className="font-medium">{location.city}, {location.state}</div>
                    <div className="text-sm text-gray-500">{location.country}</div>
                </div>
            )
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "dob",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Age
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const dob = row.getValue("dob") as { age: number }
            return <span>{dob.age} years</span>
        },
    },
]
