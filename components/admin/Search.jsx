import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const Search = () => {
  return (
    <>
     <Label htmlFor="search" className="text-bold">Search</Label>
     <Input placeholder="Search..."/>

    </>
  )
}

export default Search