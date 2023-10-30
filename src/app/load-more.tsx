"use client";
import { useFormState, useFormStatus } from "react-dom";

export function LoadMore({
  serverAction,
  offset = 0,
}: {
  serverAction: () => Promise<React.JSX.Element>;
  offset?: number;
}) {
  const serverActionWithOffset = serverAction.bind(null, offset + 10);
  const [node, formAction] = useFormState(serverActionWithOffset, null);
  const { pending } = useFormStatus();

  return (
    <>
      {node ? (
        node
      ) : (
        <button
          formAction={formAction}
          className="my-4 px-2 py-1 rounded-md shadow-sm border"
        >
          {pending ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
}
