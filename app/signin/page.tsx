import { auth } from "@/auth"
import { SignIn } from "@/components/auth-component"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const session = await auth()

  if (session?.user) redirect("/dashboard")

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <SignIn provider="github" />
      </div>
    </main>
  )
}
