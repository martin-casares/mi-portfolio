import { Timeline } from "flowbite-react";
import { FaBriefcase } from "react-icons/fa";

export const Experience = ({ data }) => {
  return (
    <div className="w-full mx-auto lg:w-[740px] py-10">
      <h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
        <FaBriefcase className="size-5 " />
        Experiencia laboral
      </h2>
      <Timeline className="ml-2">
        {data.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time className="text-sky-200/80">
                {item.date}
              </Timeline.Time>
              <Timeline.Title className="text-yellow-200/70">
                {item.title}
              </Timeline.Title>
              <Timeline.Body>{item.description}</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
