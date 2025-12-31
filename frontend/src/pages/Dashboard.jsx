import { useEffect, useState } from "react";
import api from "../api/axios";
import { getUserId } from "../utils/auth";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [edit, setEdit] = useState(null);
  const userId = getUserId();

  const load = async () => {
    const res = await api.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    await api.delete(`/events/${id}`);
    load();
  };

  const save = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await api.put(`/events/${edit._id}`, data);
    setEdit(null);
    load();
  };

  /* ---------------- EDIT FORM ---------------- */
  if (edit) {
    return (
      <div style={styles.page}>
        <h2>Edit Event</h2>

        <form onSubmit={save} style={styles.form}>
          <label>
            Title
            <input name="title" defaultValue={edit.title} required />
          </label>

          <label>
            Location
            <input name="location" defaultValue={edit.location} required />
          </label>

          <label>
            Capacity
            <input
              type="number"
              name="capacity"
              defaultValue={edit.capacity}
              required
            />
          </label>

          <div style={styles.formActions}>
            <button type="submit" style={styles.saveBtn}>
              Save Changes
            </button>
            <button
              type="button"
              style={styles.cancelBtn}
              onClick={() => setEdit(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* ---------------- DASHBOARD LIST ---------------- */
  return (
    <div style={styles.page}>
      <h2>My Events</h2>

      {events.length === 0 && (
        <p style={{ color: "#555" }}>No events created yet.</p>
      )}

      <div style={styles.list}>
        {events.map((e) => {
          const isOwner = e.createdBy === userId;

          return (
            <div key={e._id} style={styles.card}>
              <div>
                <h4 style={{ margin: 0 }}>{e.title}</h4>
                <p style={styles.meta}>
                  📍 {e.location} · 🧑‍🤝‍🧑 {e.attendeesCount}/{e.capacity}
                </p>

                {isOwner && (
                  <span style={styles.ownerBadge}>Host</span>
                )}
              </div>

              {/* ✅ ACTIONS ONLY FOR OWNER */}
              {isOwner && (
                <div style={styles.actions}>
                  <button
                    style={styles.editBtn}
                    onClick={() => setEdit(e)}
                  >
                    Edit
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => remove(e._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    padding: 24,
    maxWidth: 900,
    margin: "0 auto"
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 16
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: 12,
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
  },

  meta: {
    margin: "4px 0 0",
    color: "#555",
    fontSize: 14
  },

  ownerBadge: {
    display: "inline-block",
    marginTop: 6,
    background: "#16a34a",
    color: "#fff",
    fontSize: 12,
    padding: "2px 8px",
    borderRadius: 4
  },

  actions: {
    display: "flex",
    gap: 8
  },

  editBtn: {
    padding: "6px 12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer"
  },

  deleteBtn: {
    padding: "6px 12px",
    background: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer"
  },

  /* -------- FORM -------- */

  form: {
    maxWidth: 400,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 12
  },

  formActions: {
    display: "flex",
    gap: 10,
    marginTop: 10
  },

  saveBtn: {
    flex: 1,
    padding: "8px 0",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer"
  },

  cancelBtn: {
    flex: 1,
    padding: "8px 0",
    background: "#e5e7eb",
    color: "#111",
    border: "none",
    borderRadius: 4,
    cursor: "pointer"
  }
};
