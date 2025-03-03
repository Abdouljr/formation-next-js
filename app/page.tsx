import {Button} from "@/components/ui/button";
import Banner from "@/app/_components/Banner";
import {AccordionComponent} from "@/app/_components/AccordionComponent";
import {AlertComponent} from "@/app/_components/AlertComponent";
import AlertDialogComponent from "@/app/_components/AlertDialogComponent";

export default function Home() {
  return (
    <div className="p-10">
        <Button size="sm">clique moi</Button>
        <Banner/>
        <div className="container mx-auto px-10">
            <div className="shadow-md rounded-sm ring-1 ring-gray-800/5 p-3">
                <h3 className="text-xl font-semibold pb-4">Accordion Component</h3>
                <AccordionComponent/>
            </div>
                <AlertComponent />
                <AlertDialogComponent/>
        </div>

    </div>
  );
}
