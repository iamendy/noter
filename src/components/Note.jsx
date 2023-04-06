import { AiTwotoneThunderbolt, AiTwotoneDelete } from "react-icons/ai";

const Note = ({ note: { id, content, isPublic } }) => {
  return (
    <div className="mt-5 p-5 bg-secondary ">
      <p>{content}</p>

      <div className="divider bg-gray-50 bg-opacity-10 h-[1px] my-2" />

      <div className="flex items-center justify-between">
        <div>
          <span> ⏰ </span>
          <span className="ml-2 inline-block text-xs">
            15th Jan, 1993 9:05am
          </span>
        </div>

        <div className="flex space-x-3">
          <div className="hover:bg-black/20 rounded-full p-3 cursor-pointer">
            <AiTwotoneThunderbolt
              className={`${isPublic ? "text-yellow-500" : ""}`}
            />
          </div>
          <div className="hover:bg-black/20 rounded-full p-3 cursor-pointer">
            <AiTwotoneDelete />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
