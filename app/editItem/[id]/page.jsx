import EditItemForm from "@/components/editItemForm";

const getItemByID = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/items/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch the item.");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditItem({ params }) {
  const { id } = params;
  const { item } = await getItemByID(id);
  const { title, description } = item;
  return (
    <div>
      <EditItemForm id={id} title={title} description={description} />
    </div>
  );
}
