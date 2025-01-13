import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-8">
      <ModeToggle />
      <Button className="ms-4">Cliquer</Button>
    </div>
  );
}
