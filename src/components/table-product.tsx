'use client';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Delete, Edit } from "lucide-react";
import { AxiosResponse } from "axios";
import axiosInstance from "@/lib/axios";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

interface TableProductProps {
  data: {
    products: {
      id: string;
      name: string;
      description: string;
      category: string;
      price: string;
    }[];
    categories: {
      id: string;
      name: string;
    }[];
  }
}

export function TableProduct({ data }: TableProductProps) {
  const [product, setProduct] = useState<{
    id: string;
    name: string;
    description: string;
    categoryId: string;
    price: string;
  }>({
    id: "",
    name: "",
    description: "",
    categoryId: "",
    price: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
  
    switch (name) {
      case "id":
        setProduct({ ...product, id: value })
        break
      case "name":
        setProduct({ ...product, name: value })
        break
      case "description":
        setProduct({ ...product, description: value })
        break
      case "categoryId":
        setProduct({ ...product, categoryId: value })
        break
      case "price":
        setProduct({ ...product, price: value })
        break
      default:
        break
    }
  }
  
  const handleSubmit = async () => {
    try {
      const response: AxiosResponse = await axiosInstance.put('/products/' + product.id, {
        name: product.name,
        description: product.description,
        price: product.price,
        categoryId: product.categoryId
      });
      toast({ title: "Success", description: response.data.message })      
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id: string) => {
      try {
        const response: AxiosResponse = await axiosInstance.delete('/products/' + id);
        toast({ title: "Success", description: response.data.message })      
      } catch (error) {
        console.log(error);
      } finally {
        window.location.reload();
      }
    }

  return (
    <div className="rounded-md border w-full mt-4">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.products.map((product) => (
          <TableRow key={product.id} className="py-2">
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell><Badge variant="secondary">{product.category}</Badge></TableCell>
            <TableCell>{product.price}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger>
                    <Button variant="ghost" className="p-1.5 h-auto mr-1">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>Make changes to your product here. Click save when you&apos;re done.</DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-6 mt-6">
                        <div className="grid gap-2">
                          <Input type="hidden" name="id" value={product.id} />
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            type="text"
                            name="name"
                            defaultValue={product.name} 
                            onChange={handleInputChange}
                            className="shadow-none text-sm" 
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="description">Description</Label>
                          <Input 
                            id="description" 
                            type="text" 
                            name="description"
                            defaultValue={product.description}
                            onChange={handleInputChange}
                            className="shadow-none text-sm" 
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="category">Category</Label>
                          <Select
                            onValueChange={(value) =>
                              setProduct({ ...product, categoryId: value })
                            }
                          >
                            <SelectTrigger id="categoryId" className="shadow-none text-sm">
                              <SelectValue placeholder={product.category}/>
                            </SelectTrigger>
                            <SelectContent>
                              {data.categories.map((category) => (
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
                            name="price"
                            defaultValue={product.price} 
                            onChange={handleInputChange}
                            className="shadow-none text-sm" 
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="shadow-none mt-6">Save changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="ghost" className="p-1.5 h-auto">
                      <Delete className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your product.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="shadow-none">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={() => handleDelete(product.id)} 
                        className="shadow-none"
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}