import { supabaseServerClient } from "@/utils/supabase/server";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const supabase = await supabaseServerClient()
  const { data } = await supabase.auth.getUser()
  console.log(data)

  return (
    <>
      <h1>Hello {data.user?.id}</h1>

      <LogoutButton />
    </>
  );
}