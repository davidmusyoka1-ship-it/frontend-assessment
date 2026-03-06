// Toggle membership info
function toggleMembership(id) {
  document.querySelectorAll(".member-body").forEach(el => {
    el.style.display = "none";
  });
  const active = document.getElementById(id);
  if (active) {
    active.style.display = "block";
  }
}

// Make globally accessible
window.toggleMembership = toggleMembership;