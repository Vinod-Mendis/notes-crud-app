"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {

  const router = useRouter(); 

  const removeItem = async () => {
    const confirmed = confirm("Are you Sure ?");

    if (confirmed) {
      const response = await fetch(`http://localhost:3000/api/items?id=${id}`, {
        method: "DELETE",
      });

      if(response.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeItem} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
