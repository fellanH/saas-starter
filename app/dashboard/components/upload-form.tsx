"use client";

import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useState, useRef } from "react";
import { saveBylawUrl } from "../upload/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UploadForm({ teamId }: { teamId: number }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    try {
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/bylaws/upload",
      });

      setBlob(newBlob);
      await saveBylawUrl(teamId, newBlob.url);
    } catch (error) {
      console.error("An error occurred during file upload:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload New Bylaw Document</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="file" ref={inputFileRef} type="file" required />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Uploading..." : "Upload"}
          </Button>
        </form>
        {blob && (
          <div className="mt-4 text-sm">
            <p>Upload successful!</p>
            <a
              href={blob.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              View Bylaw
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
