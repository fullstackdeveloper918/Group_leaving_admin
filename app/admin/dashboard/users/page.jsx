import Search from '@/components/admin/Search'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/admin/Pagination'

const Users = () => {
  return (
    <>
       <div className="p-5 rounded-lg mt-5 bg-[bgsoft]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-[#5d57c9] text-[text] border-none rounded cursor-pointer">Add New</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-[50%] cover"
                  />
                  {user.username}
                </div>
              </td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.createdAt?.toString().slice(4, 16)}</td>
              <td className="p-2">{user.isAdmin ? "Admin" : "Client"}</td>
              <td className="p-2">{user.isActive ? "active" : "passive"}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`py-1 px-2 rounded text-[text] border-none cursor-pointer bg-[teal]`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`py-1 px-2 rounded text-[text] border-none cursor-pointer bg-[crimson]`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
    </>
  )
}

export default Users