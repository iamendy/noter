import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Note from "./Note";

const AllNotes = () => {
  const fetchNotes = async () => {
    const res = await axios.get("/api/notes/myNotes");
    return res.data.notes;
  };

  const {
    data: notes,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: fetchNotes,
    queryKey: ["notes"],
  });

  isLoading && <p>Fetching Notes </p>;

  notes && console.log(notes);
  return (
    <>
      <div className="mt-5">
        <h3 className="font-bold">🗃 My Notes</h3>
      </div>

      {isSuccess && notes.map((note) => <Note key={note.id} note={note} />)}
    </>
  );
};
export default AllNotes;
