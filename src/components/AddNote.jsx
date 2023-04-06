import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const addNote = () => {
    console.log(title);
    mutate(title);
  };

  //send the note to backend
  const { mutate, isLoading } = useMutation(
    (title) => axios.post("/api/notes/addNote", { title }),
    {
      onSuccess: (res) => {
        setTitle("");
        console.log(res);
        //invalidate cache for auto-fetching
        queryClient.invalidateQueries({ queryKey: ["notes"] });
      },
      onError: (e) => console.log(e),
    }
  );

  return (
    <section className="mt-5 w-full min-h-[200px] bg-secondary p-5 flex flex-col rounded-sm">
      <textarea
        className="w-full rounded-sm min-h-[100px] p-2
            focus:outline-none focus:text-gray-900 text-gray-900"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        disabled={isLoading}
      ></textarea>

      <div className="mt-2 flex justify-end">
        <button
          className="bg-green-400 rounded-sm px-6 py-2 text-sm"
          onClick={() => addNote()}
        >
          Add
        </button>
      </div>
    </section>
  );
};
export default AddNote;
