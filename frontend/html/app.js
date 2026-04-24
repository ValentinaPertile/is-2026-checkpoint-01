const BACKEND_BASE_URL = "http://localhost:5000";

const backendStatusEl = document.getElementById("backend-status");
const tableBodyEl = document.getElementById("team-table-body");
const messageEl = document.getElementById("message");

function setBackendStatus(isOnline) {
  backendStatusEl.textContent = isOnline ? "Backend: online" : "Backend: offline";
  backendStatusEl.classList.remove("online", "offline");
  backendStatusEl.classList.add(isOnline ? "online" : "offline");
}

function buildStatusBadge(status) {
  const normalized = String(status || "").trim().toLowerCase();
  const statusClass = ["running", "stopped", "error", "offline"].includes(normalized) ? normalized : "";
  return `<span class="service-status ${statusClass}">${status || "unknown"}</span>`;
}

function renderRows(members) {
  tableBodyEl.innerHTML = "";
  members.forEach((member) => {
    const row = document.createElement("tr");
    const fullName = `${member.nombre} ${member.apellido}`;
    row.innerHTML = `
      <td>${fullName}</td>
      <td>${member.legajo}</td>
      <td>${member.feature}</td>
      <td>${member.servicio}</td>
      <td>${buildStatusBadge(member.estado)}</td>
    `;
    tableBodyEl.appendChild(row);
  });
}

async function checkBackendHealth() {
  const response = await fetch(`${BACKEND_BASE_URL}/api/health`);
  if (!response.ok) throw new Error("El backend no respondió correctamente al healthcheck");
  const payload = await response.json();
  if (payload.status !== "ok") throw new Error("El backend informó un estado no saludable");
  return payload;
}

async function fetchTeamData() {
  const response = await fetch(`${BACKEND_BASE_URL}/api/team`);
  if (!response.ok) throw new Error("No se pudo obtener la lista del equipo");
  const payload = await response.json();
  if (!Array.isArray(payload)) throw new Error("La respuesta de /api/team no tiene el formato esperado");
  return payload;
}

async function loadTeamBoard() {
  try {
    messageEl.classList.remove("error");
    messageEl.textContent = "Verificando backend...";
    await checkBackendHealth();
    setBackendStatus(true);
    messageEl.textContent = "Cargando integrantes del equipo...";
    const members = await fetchTeamData();
    if (members.length === 0) {
      tableBodyEl.innerHTML = "";
      messageEl.textContent = "No hay integrantes cargados en la base de datos.";
      return;
    }
    renderRows(members);
    messageEl.textContent = "Datos cargados correctamente desde el backend.";
  } catch (error) {
    console.error(error);
    setBackendStatus(false);
    tableBodyEl.innerHTML = "";
    messageEl.textContent = `Error: ${error.message}`;
    messageEl.classList.add("error");
  }
}

document.addEventListener("DOMContentLoaded", loadTeamBoard);
