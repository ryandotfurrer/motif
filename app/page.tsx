import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="py-32">
        <Heading level="h1" size="4xl">
          motif
        </Heading>
        <p className="text-balance text-2xl">
          Professional networking for{" "}
          <span className="text-primary drop-shadow-[0px_0px_12px_rgba(251,191,36,1)]">
            musicians
          </span>
        </p>
      </header>
      <main>
        <section className="py-24">
          <div className="mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Heading level="h2" size="3xl">
                  Discover New Opportunities
                </Heading>
                <p className="mb-6 text-lg">
                  Connect with other musicians, find gigs, and collaborate on
                  projects. Our platform helps you expand your network and grow
                  your career.
                </p>
                <Button className="transition-all duration-300 hover:drop-shadow-[0px_0px_12px_rgba(251,191,36,1)]">
                  Get Started
                </Button>
              </div>
              <div>
                <Image
                  src="https://picsum.photos/1200"
                  alt="Networking"
                  className="aspect-video h-auto w-full object-cover"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-md bg-muted p-12">
          <div>
            <div className="mx-auto mb-12 space-y-12 md:w-4/5 lg:w-3/4">
              <Heading level="h2" size="3xl">
                Why Choose Us?
              </Heading>
              <p className="mt-4 text-lg"></p>
              <div className="items-center space-y-2 md:mx-auto md:grid md:grid-cols-3 md:space-x-4 md:space-y-0">
                <Image
                  src="https://picsum.photos/1200"
                  alt="Networking"
                  className="aspect-square h-auto w-full object-cover"
                  width={1200}
                  height={1200}
                />
                <div className="col-span-2 space-y-2">
                  <Heading level="h3" size="2xl">
                    Expand your musical network
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error deserunt doloribus assumenda veniam facere. Quidem.
                  </p>
                </div>
              </div>
              <div className="items-center space-y-2 md:grid md:grid-cols-3 md:space-x-4 md:space-y-0">
                <Image
                  src="https://picsum.photos/1200"
                  alt="Networking"
                  className="aspect-square h-auto w-full object-cover md:order-last"
                  width={1200}
                  height={1200}
                />
                <div className="col-span-2 space-y-2">
                  <Heading level="h3" size="2xl">
                    Nurture your musical network
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro magnam aspernatur id dolorum nobis consequatur sequi
                    similique esse praesentium. Exercitationem!
                  </p>
                </div>
              </div>
              <div className="items-center space-y-2 md:grid md:grid-cols-3 md:space-x-4 md:space-y-0">
                <Image
                  src="https://picsum.photos/1200"
                  alt="Networking"
                  className="aspect-square h-auto w-full object-cover"
                  width={1200}
                  height={1200}
                />
                <div className="col-span-2 space-y-2">
                  <Heading level="h3" size="2xl">
                    Find new opportunities
                  </Heading>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis ipsum facilis molestiae perferendis quis quo fuga
                    doloremque, error veniam et odio explicabo esse beatae porro
                    aliquid dolores saepe quisquam laboriosam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
