import Link from "next/link"


function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={'/'} className="text-white font-bold">Notes.</Link>
      <Link href={"/addItem"} className="bg-white p-2">Add Item</Link>
    </nav>
  )
}

export default Navbar