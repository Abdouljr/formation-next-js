import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionComponent() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Quels sont les délais de livraison ?</AccordionTrigger>
                <AccordionContent>
                    Les délais de livraison varient en fonction de votre emplacement et du mode de livraison choisi. En général, la livraison standard prend entre 3 et 5 jours ouvrés, tandis que la livraison express peut être effectuée en 24 à 48 heures.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Comment retourner un article ?</AccordionTrigger>
                <AccordionContent>
                    Vous pouvez retourner un article dans un délai de 14 jours après réception. Assurez-vous que le produit est dans son état d&apos;origine avec son emballage intact. Contactez notre service client pour obtenir une étiquette de retour et suivez les instructions fournies.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Quels moyens de paiement acceptez-vous ?</AccordionTrigger>
                <AccordionContent>
                    Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express), PayPal, et les paiements en plusieurs fois via notre partenaire de financement. Toutes les transactions sont sécurisées avec un cryptage SSL pour protéger vos informations.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
