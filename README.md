Librerias adicionales:
react-hot-toast: https://react-hot-toast.com/docs
zod: https://zod.dev/
langgraph: https://langchain-ai.github.io/langgraphjs/
prisma: https://www.prisma.io/
Tailwind: https://tailwindcss.com/
supabase: https://supabase.com/docs/guides/auth/server-side/nextjs
Shadcm: https://ui.shadcn.com/ (accordion, alert dialog, button, carousel, chart, checkbox, table, drawer,dropdown menu, form, input, label,  navigation menu, pagination, scroll area, select, separator, sidebar, slider, switch, textarea, toggle, tooltip )
In charts we're using shacn charts, behind of that is recharts https://ui.shadcn.com/charts/area#charts
In table we're using shadcn table, behind of that is tankstank table  https://ui.shadcn.com/docs/components/data-table
In forms were using shadcn form, behind of that is React hook form https://ui.shadcn.com/docs/components/form
lucide https://lucide.dev/icons/
tank stank query https://tanstack.com/query/latest 

---

Queda hecho para que la base de datos se conecte con supabase, en utils/supabase.sever queda un SupabaseClient. Hay que poner las credenciales del proyecto en el .env

La autenticacion sera con supabase, pero usando Google, se puede cambiar a lo que cada uno necesite, https://supabase.com/docs/guides/auth/social-login/auth-google

en el env la database url, sale de connect/orm/Direct connection to the database. Used for migrations

