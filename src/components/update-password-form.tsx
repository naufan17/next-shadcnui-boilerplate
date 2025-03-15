import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

export default function UpdatePasswordForm() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg md:text-xl font-bold">Password</h1>
      <h5 className="text-md">Change your password</h5>
      <Separator className="my-4" />
      <form action="">
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              name="password" 
              className="shadow-none"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              className="shadow-none"
            />
          </div>
          <Button type="submit" className="shadow-none">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}