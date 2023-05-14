import "./globals.css";
import Providers from "./utils/provider";

//tutorial from: https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/

export const metadata = {
  title: "React Query Practice",
  description: "Learning about React Query with Next13",
};

/*
keep in mind that it is best practice to render providers as deep as possible
 in the component tree. You may have noticed that in our example, the Providers 
 component only wraps around the {children} prop instead of the entire <html> document.
  This allows Next.js to better optimize the static parts of your Server Components.

*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
