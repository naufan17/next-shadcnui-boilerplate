"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import AdminLayout from "@/components/layout/admin";
import PrivateGuard from "@/components/guard/private";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { TableProduct } from "@/components/table-product";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<{ 
    id: number; 
    name: string; 
    description: string; 
    category: string; 
    price: number 
  }[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('/products');
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (laptopName: string) => {
    if (!laptopName) return fetchProducts();

    setProducts(products.filter(product => product.name.toLowerCase().includes(laptopName.toLowerCase())));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <PrivateGuard>
      <AdminLayout>
        <div className="flex flex-col p-4 pt-0 w-full">
          <div className="flex flex-row justify-between">
            <Input 
              type="search" 
              placeholder="Find product..." 
              onChange={(e) => handleSearch(e.target.value)}
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
          {loading ? (
            <div className="flex h-96 bg-secondary rounded-md w-full mt-4 animate-pulse"></div>
          ) : (
            <TableProduct products={products}/> 
          )
        }
        </div>
      </AdminLayout>
    </PrivateGuard>
  )
}
