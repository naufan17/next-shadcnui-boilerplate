import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

export default function UpdateProfileForm() {
  return (
    <div className="flex flex-col w-full gap-2">
      <h1 className="text-lg md:text-xl font-bold">Profile</h1>
      <h5 className="text-md">Update your profile information</h5>
      <Separator className="my-4" />
      <form action="">
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
          </div>
          <Button type="submit" className="w-36">
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  );
}