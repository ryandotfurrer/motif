import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <div className="flex h-[800px] flex-col justify-center py-2">
      <Heading level="h1" size="4xl" align="left">
        motif
      </Heading>
      <p className="text-balance text-2xl">
        Professional networking for{" "}
        <span className="text-primary drop-shadow-[0px_0px_12px_rgba(251,191,36,1)]">
          musicians
        </span>
      </p>
    </div>
  );
}
