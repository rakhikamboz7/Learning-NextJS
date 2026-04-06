// It controls these:
// HTML structure
// Global wrappers
// Shared UI
// Metadata
// Fonts
// Providers
import Navbar from "../components/Navbar";
import Container from "../components/Container";
export default function
RootLayout({children,}: Readonly<{  children: React.ReactNode;  
}>)     //All pages render inside childern and objects won't be modifiable

{
  return (
    <html
      lang="en"    
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <Container>
        {children}
        </Container>
        </body>
    </html>
  );
}
