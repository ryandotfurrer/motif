import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Heading level="h1" size="4xl" align="left">
        motif
      </Heading>
      <p className="text-4xl">Professional networking for musicians</p>
    </div>
  );
}
