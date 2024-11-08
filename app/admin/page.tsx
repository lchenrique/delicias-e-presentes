import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { DashboardShell } from "@/components/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard-header";
import { ProductsTable } from "@/components/products-table";

export default async function AdminDashboard() {
  const supabase = createServerComponentClient({ cookies });
  
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Products" 
        text="Manage your products inventory"
      />
      <ProductsTable />
    </DashboardShell>
  );
}