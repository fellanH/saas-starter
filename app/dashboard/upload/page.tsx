import { getTeamForUser } from "@/lib/db/queries";
import UploadForm from "../components/upload-form";

export default async function UploadPage() {
  const team = await getTeamForUser();

  if (!team) {
    return <div>Could not find team for the current user.</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Upload Bylaws</h1>
      <UploadForm teamId={team.id} />
    </div>
  );
}
