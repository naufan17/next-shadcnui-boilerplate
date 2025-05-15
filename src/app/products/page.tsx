"use client";

import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
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
import { toast } from "@/hooks/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<{ 
    id: string; 
    name: string; 
    description: string; 
    category: string; 
    price: string; 
  }[]>([]);
  const [categories, setCategories] = useState<{
    id: string;
    name: string;
  }[]>([]);
  const [product, setProduct] = useState<{
    name: string;
    description: string;
    categoryId: string;
    price: string;
  }>({
    name: "",
    description: "",
    categoryId: "",
    price: "",
  });

  const fetchCategories = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/categories');
      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.get('/products');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setProduct({ ...product, name: value });
        break;
      case "description":
        setProduct({ ...product, description: value });
        break;
      case "categoryId":
        setProduct({ ...product, categoryId: value });
        break;
      case "price":
        setProduct({ ...product, price: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: AxiosResponse = await axiosInstance.post('/products', product);
      
      toast({ 
        title: "Success", 
        description: response.data.message 
      })
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "Failed to create product",
      })
    } finally {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
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
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle>Add Product</DialogTitle>
                      <DialogDescription>Create a new product here. Click save when you&apos;re done.</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-6 mt-6">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          type="text"
                          placeholder="Product name"
                          name="name"
                          onChange={handleInputChange}
                          className="shadow-none text-sm"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Input 
                          id="description" 
                          type="text"
                          placeholder="Product description"
                          name="description"
                          onChange={handleInputChange}
                          className="shadow-none text-sm"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          onValueChange={(value) =>
                            setProduct({ ...product, categoryId: value })
                          }
                          required
                        >
                          <SelectTrigger id="categoryId" className="shadow-none text-sm">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id.toString()}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="price">Price</Label>
                        <Input 
                          id="price" 
                          type="text"
                          placeholder="Product price"
                          name="price"
                          onChange={handleInputChange}
                          className="shadow-none text-sm"
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose>
                        <Button 
                          type="submit" 
                          className="shadow-none mt-6"
                        >
                          Save changes
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {loading ? (
            <div className="flex h-96 bg-secondary rounded-md w-full mt-4 animate-pulse"></div>
          ) : (
            <TableProduct data={{ products, categories, fetchProducts }} /> 
            )
          }
          </div>
      </AdminLayout>
    </PrivateGuard>
  )
}
