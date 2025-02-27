import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

export default function UpdateAccountForm() {
  return (
    <div className="col-span-3 space-y-6 max-w-screen-sm">
      <div className="flex flex-col w-full gap-4">
        <h1 className="text-lg md:text-xl font-bold">
          Account
        </h1>
        <h5 className="text-md">
          Update your account settings
        </h5>
      </div>
      <Separator className="my-4"/>
      <form action="">
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="password">
              Password
            </Label>
            <Input type="password" id="password" name="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
          <Button type="submit" className="w-36">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}