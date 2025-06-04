import ChatBox from "../../../components/ChatBox";

interface ChatPageProps {
  params: {
    id: string;
  };
}

export default function ChatPage({ params }: ChatPageProps) {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-4 mb-6">Obrolan ID: {params.id}</h1>
      <ChatBox chatId={params.id} />
    </div>
  );
}
