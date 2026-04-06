// a custom layout component- this is a reusable UI composition helpers
// >Layout=skeleton
// Root layout → Navbar
// Dashboard layout → Sidebar
// Page → Content
// Container → Spacing
// Card → UI block


// Root Layout- All pages need it
// section layout- Many pages in one feature need it
// Container component- Just visual structure reuse needed.

type Props = {

    children: React.ReactNode
}

export default function Container({children}: Props) {
    return(
        <div className="max-w-5xl mx-auto p-10">
            {children}
        </div>
    )
}
