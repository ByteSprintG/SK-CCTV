import { auth } from "@/auth"
import { isAdmin } from "@/lib/utils"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/')
  }

  const isUserAdmin = isAdmin(session.user.email)
  
  if (!isUserAdmin) {
    redirect('/')
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-6">
        {/* Add your admin features here */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Admin Controls</h2>
          <p>Welcome to the admin dashboard. This page is only accessible to authorized administrators.</p>
        </section>
      </div>
    </main>
  );
}
