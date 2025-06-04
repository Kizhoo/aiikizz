"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function NewChatPage() {
  const router = useRouter();

  useEffect(() => {
    const newId = uuidv4();
    router.push(`/chat/${newId}`);
  }, [router]);

  return <p className="text-center mt-20">Membuat obrolan baru...</p>;
}
