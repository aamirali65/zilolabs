'use client'
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Tab } from '@headlessui/react';
import { projects } from '../lib/projectsData';

const categories = [
  'All Projects',
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'WordPress'
];

export const ProjectSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
        <Tab.Group>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <Tab.List className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                {categories.map((cat) => (
                  <Tab
                    key={cat}
                    className={({ selected }) =>
                      `px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                        selected
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`
                    }
                  >
                    {cat}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="mt-8">
              {categories.map((cat) => {
              const filteredProjects =
              cat === 'All Projects'
                ? projects
                : projects.filter((p) => {
                    const typeMap = {
                      'Web Development': 'web',
                      'Mobile App': 'mobile',
                      'UI/UX Design': 'uiux',
                      'WordPress': 'wordpress',
                    };
                    return p.type === typeMap[cat];
                  });
            

                return (
                  <Tab.Panel key={cat}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {filteredProjects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl overflow-hidden shadow-lg group"
                        >
                          <div className="relative overflow-hidden">
                            <div className="relative w-full h-48">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-primary px-6 py-2 rounded-full flex items-center gap-2"
                              >
                                View Project <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};
