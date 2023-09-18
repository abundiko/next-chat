import ChatMain from "@/components/ChatMain";
import ChatsSidebar from "@/components/ChatsSidebar";

export default function ChatPage() {
  return (
    <main className="flex h-full">
      <ChatsSidebar />
      <div className="w-full h-full">
        <ChatMain />
      </div>
    </main>
  );
}
