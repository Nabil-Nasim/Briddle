"use client";
import { useState } from "react";
import Header from "../components/Header";
import SidebarComponent from "../components/SidebarComponent";
import EventCard from "../components/Card";
import AllEvents from "../components/AllEvent";
import SearchAndFilter from "../components/SearchAndFilter";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All Events");

  const featuredEvents = [
    { title: "Underground Bull Riders Membership", date: "Jan 1 - Dec 31, 2023", location: "Bull Ring", id: 1 },
    { title: "Horses in Two Lines", date: "Jan 1 - Dec 31, 2023", location: "BUC", id: 2 },
    { title: "Underground Bull Riders Membership", date: "Jan 1 - Dec 31, 2023", location: "Bull Ring", id: 3 },
    { title: "Horses in Two Lines", date: "Jan 1 - Dec 31, 2023", location: "BUC", id: 4 },
  ];

  const allEvents = [
    { date: "FEB 27", details: "BHA - Kickoff to New Ownership, Powell Butte, OR", id: 1 },
    { date: "FEB 28", details: "Barrel Race (race 6), Monroe, WA", id: 2 },
    { date: "FEB 28", details: "2024 Wednesday Night Barrel Racing, Visalia, CA", id: 3 },
    { date: "MAR 1", details: "Olsen's Events Jackpot, Chino Valley, AZ", id: 4 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-lg fixed h-full">
        <SidebarComponent />
      </div>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-white">
        <Header />
        <div className="flex border-b border-gray-300 mb-6 mx-5">
          {["All Events", "Saved Events"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-purple-500 text-purple-500"
                  : "text-gray-500"
              }`}
            >
              {tab} {tab === "Saved Events" && "(2)"}
            </button>
          ))}
        </div>

        {activeTab === "All Events" ? (
          <>
            <section className="mb-8 mx-5">
              <h3 className="font-bold text-2xl mb-4">Featured Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    imageUrl="/images/2.jpg"
                    index={event.id}
                  />
                ))}
              </div>
            </section>

            <SearchAndFilter />

            <section className="mx-5">
              <AllEvents allEvents={allEvents} />
            </section>
          </>
        ) : (
          <p className="text-gray-500 mx-5">No saved events yet!</p>
        )}
      </main>
    </div>
  );
}
