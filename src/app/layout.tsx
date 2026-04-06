import Navbar from "./components/Navbar";

export default function RootLayout({
  children,}: Readonly<{  //All pages render inside childern and objects won't be modifiable

  children: React.ReactNode;  
}>) {
  return (
    <html
      lang="en"    
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}</body>
    </html>
  );
}
