import {Terminal, User, Focus} from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function AlertComponent() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 my-10">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Terminal !</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>

            <Alert variant="destructive">
                <User className="h-4 w-4" />
                <AlertTitle>Utilisateur !</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>

            <Alert>
                <Focus className="h-4 w-4" />
                <AlertTitle>Scanner !</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </div>
    )
}
