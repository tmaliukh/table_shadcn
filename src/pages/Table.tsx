"use client"
import { useGetUsers } from '@/lib/hooks/useGetUsers'
import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"


export default function Table() {
    const {users, error, isLoading } = useGetUsers()

    if (isLoading) {
        return (
            <div className="container mx-auto py-10">
                <div className="text-center">Loading...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto py-10">
                <div className="text-center text-red-500">Error loading data</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={users || []} />
        </div>
    )
}
