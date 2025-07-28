import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

interface Timeline9Props {
  timelineData: TimelineEntry[];
  title?: string;
}

const Timeline9 = ({ timelineData, title }: Timeline9Props) => {
  return (
    <section id="proceso" className="bg-primary py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-[1400px] 3xl:max-w-[1600px]">
        <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-12 lg:gap-8 xl:gap-12 2xl:gap-16">
          {/* Title Column */}
          {title && (
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h1 className="text-primary text-display-xs sm:text-display-sm md:text-display-md lg:text-display-md xl:text-display-lg 2xl:text-display-lg 3xl:text-display-xl font-semibold tracking-tighter lg:text-left text-center">
                  {title}
                </h1>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-2xl text-tertiary lg:text-left text-center">
                  De la idea a la implementación en 10 días que transformarán tu negocio
                </p>
              </div>
            </div>
          )}
          
          {/* Timeline Column */}
          <div className={`${title ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
            <div className="relative">
              <Separator
                orientation="vertical"
                className="bg-secondary absolute left-2 top-4 h-[calc(100%-2rem)]"
              />
              {timelineData.map((entry, index) => (
                <div key={index} className="relative mb-10 pl-8 last:mb-0">
                  <div className="bg-primary absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full border-2 border-secondary" />
                  
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold tracking-tight text-primary">
                        {entry.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-tertiary">
                        {entry.content}
                      </p>
                    </div>
                    
                    <div className="md:w-32 md:text-right">
                      <span className="inline-block rounded-md bg-secondary px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-medium text-tertiary">
                        {entry.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline9 };
export type { TimelineEntry };