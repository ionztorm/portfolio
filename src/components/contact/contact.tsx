"use client";

import { SectionHeading } from "@/components/generic/section-heading";

export function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="border border-slate-300">
      <SectionHeading>Get in touch</SectionHeading>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          autoComplete="true"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          className="border border-slate-300 rounded-sm w-80"
        />
        <label htmlFor="email">Email</label>
        <input
          autoComplete="true"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border border-slate-300 rounded-sm w-80"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="border border-slate-300 rounded-sm w-80"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
