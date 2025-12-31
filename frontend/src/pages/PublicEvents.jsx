import { useEffect, useState } from "react";
import api from "../api/axios";
import { isAuthenticated, getUserId } from "../utils/auth";

export default function PublicEvents() {
  const [events, setEvents] = useState([]);
  const userId = getUserId();

  const load = async () => {
    const res = await api.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const join = async (id) => {
    if (!isAuthenticated()) {
      alert("Please login to join events");
      return;
    }
    await api.post(`/events/${id}/rsvp`);
    load();
  };

  const leave = async (id) => {
    await api.delete(`/events/${id}/rsvp`);
    load();
  };

  return (
    <div style={styles.page}>
      <h2>Upcoming Events</h2>

      <div style={styles.grid}>
        {events.map((e) => {
          const joined = e.attendees?.includes(userId);

          return (
            <div key={e._id} style={styles.card}>
              {e.image && (
                <img src={e.image} alt={e.title} style={styles.image} />
              )}

              <div style={styles.body}>
                <h3>{e.title}</h3>
                <p>📍 {e.location}</p>
                <p>🧑‍🤝‍🧑 {e.attendeesCount} / {e.capacity}</p>

                {joined && (
                  <span style={styles.badge}>Joined</span>
                )}

                <div style={styles.actions}>
                  <button
                    style={{
                      ...styles.joinBtn,
                      opacity: joined ? 0.5 : 1,
                      cursor: joined ? "not-allowed" : "pointer"
                    }}
                    disabled={joined}
                    onClick={() => join(e._id)}
                  >
                    Join
                  </button>

                  {joined && (
                    <button
                      style={styles.leaveBtn}
                      onClick={() => leave(e._id)}
                    >
                      Leave
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: 24, maxWidth: 1100, margin: "0 auto" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 20
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff"
  },
  image: { width: "100%", height: 160, objectFit: "cover" },
  body: { padding: 14 },
  badge: {
    display: "inline-block",
    background: "#16a34a",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: 4,
    fontSize: 12,
    marginBottom: 6
  },
  actions: { display: "flex", gap: 8, marginTop: 10 },
  joinBtn: {
    flex: 1,
    padding: "8px 0",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 4
  },
  leaveBtn: {
    flex: 1,
    padding: "8px 0",
    background: "#e5e7eb",
    border: "none",
    borderRadius: 4
  }
};
