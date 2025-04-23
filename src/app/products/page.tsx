"use client";

import AdminLayout from "@/components/layout/admin";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { TableProduct } from "@/components/table-product";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = {
  data: [
    {
      id: 1000001,
      name: "Asus ROG",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 20.000.00',
    },
    {
      id: 1000002,
      name: "Asus Zenbook",
      description: "14 inch, RAM 132GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 18.000.00',
    },
    {
      id: 1000003,
      name: "Asus VivoBook",
      description: "14 inch, RAM 16GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 15.000.00',
    },
    {
      id: 1000004,
      name: "Lenovo IdeaPad",
      description: "14 inch, RAM 16GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 13.000.00',
    },
    {
      id: 1000005,
      name: "Lenovo Yoga",
      description: "14.5 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 24.000.00',
    },
    {
      id: 1000006,
      name: "Lenovo Legion",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 25.000.00',
    },
    {
      id: 1000007,
      name: "Acer Aspire",
      description: "14 inch, RAM 16GB, SSD 512GB",
      category: "Laptop",
      price: 'Rp. 10.000.00',
    },
    {
      id: 1000008,
      name: "Acer Predator",
      description: "15.6 inch, RAM 32GB, SSD 1TB",
      category: "Laptop",
      price: 'Rp. 20.000.00',
    },
  ],
}

export default function Page() {
  return (
    <AdminLayout>
      <div className="flex flex-col p-4 pt-0 w-full">
        <div className="flex flex-row justify-between">
          <Input 
            type="search" 
            placeholder="Find product..." 
            className="w-1/3 shadow-none placeholder:text-sm" 
          />
          <div className="space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shadow-none">
                  Filter
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Category</DropdownMenuLabel>
                <DropdownMenuCheckboxItem className="align-left">Tablet</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="align-left">Laptop</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="align-left">Smartphone</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="align-left">Personal Computer</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Add Product</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Product</DialogTitle>
                  <DialogDescription>Create a new product here. Click save when you&apos;re done.</DialogDescription>
                </DialogHeader>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        type="text"
                        className="shadow-none text-sm"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Input 
                        id="description" 
                        type="text"
                        className="shadow-none text-sm"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category" className="shadow-none text-sm">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Tablet">Tablet</SelectItem>
                          <SelectItem value="Laptop">Laptop</SelectItem>
                          <SelectItem value="Smartphone">Smartphone</SelectItem>
                          <SelectItem value="Personal Computer">Personal Computer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="price">Price</Label>
                      <Input 
                        id="price" 
                        type="text"
                        className="shadow-none text-sm"
                      />
                    </div>
                  </div>
                </form>
                <DialogFooter>
                  <Button type="submit" className="shadow-none">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <TableProduct products={products} /> 
      </div>
    </AdminLayout>
  )
}
