import UserButton from "@/components/sign-in"

export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 p-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <UserButton />
      </header>
      <section className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          This route is protected by Auth.js proxy.
        </p>
      </section>
    </main>
  )
}
