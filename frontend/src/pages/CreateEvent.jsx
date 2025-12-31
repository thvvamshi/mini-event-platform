import api from "../api/axios";

export default function CreateEvent() {
  const submit = async e => {
    e.preventDefault();
    await api.post("/events", new FormData(e.target));
    window.location.href = "/";
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 400, margin: "30px auto" }}>
      <h3>Create Event</h3>

      <input name="title" placeholder="Title" style={{ width: "100%", marginBottom: 8 }} />
      <input name="location" placeholder="Location" style={{ width: "100%", marginBottom: 8 }} />
      <input name="capacity" type="number" placeholder="Capacity" style={{ width: "100%", marginBottom: 8 }} />
      <input name="dateTime" type="datetime-local" style={{ width: "100%", marginBottom: 8 }} />
      <input name="image" type="file" />

      <button style={{ width: "100%", marginTop: 10 }}>Create</button>
    </form>
  );
}
