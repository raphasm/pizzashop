import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button></Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
