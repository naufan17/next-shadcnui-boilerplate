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

interface TableProductProps {
  products: {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
  }[];
}

export function TableProduct({ products }: TableProductProps) {
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
        {products.map((product) => (
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
                    <DialogHeader>
                      <DialogTitle>Edit Product</DialogTitle>
                      <DialogDescription>Make changes to your product here. Click save when you&apos;re done.</DialogDescription>
                    </DialogHeader>
                    <form>
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            type="text" 
                            className="shadow-none text-sm" 
                            defaultValue={product.name} 
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="description">Description</Label>
                          <Input 
                            id="description" 
                            type="text" 
                            className="shadow-none text-sm" 
                            defaultValue={product.description} 
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger id="category" className="shadow-none text-sm">
                              <SelectValue placeholder={product.category} />
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
                            defaultValue={product.price} 
                          />
                        </div>
                      </div>
                    </form>
                    <DialogFooter>
                      <Button type="submit" className="shadow-none">Save changes</Button>
                    </DialogFooter>
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
                      <AlertDialogCancel className="shadow-none">Cancel</AlertDialogCancel>
                      <AlertDialogAction className="shadow-none">Continue</AlertDialogAction>
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