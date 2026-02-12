// Main application logic
let currentPosKey = '';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  renderPositions();
});

// Render positions by department
function renderPositions() {
  const container = document.getElementById('positionsContainer');
  const grouped = {};
  
  // Group positions by department
  for (const [key, pos] of Object.entries(POSITIONS)) {
    if (!grouped[pos.department]) {
      grouped[pos.department] = [];
    }
    grouped[pos.department].push({ key, ...pos });
  }
  
  // Render each department
  let html = '';
  for (const [dept, positions] of Object.entries(grouped)) {
    html += `
      <div class="department">
        <h3>${DEPARTMENTS[dept]}</h3>
        <div class="positions-grid">
          ${positions.map(p => `
            <div class="position-card" onclick="showShareLink('${p.key}')">
              <h4>${p.name}</h4>
              <p style="font-size:0.9em;color:#666;margin:10px 0">${p.type}</p>
              <div class="apply-btn">📋 Share Vacancy</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

// Show share link modal
function showShareLink(posKey) {
  currentPosKey = posKey;
  const position = POSITIONS[posKey];
  const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
  const link = `${baseUrl}apply.html?position=${posKey}`;
  
  document.getElementById('sharePositionName').textContent = position.name;
  document.getElementById('shareLinkInput').value = link;
  document.getElementById('copyBtn').textContent = '📋 Copy';
  document.getElementById('shareModal').classList.add('active');
}

// Close modal
function closeModal() {
  document.getElementById('shareModal').classList.remove('active');
}

// Copy link to clipboard
function copyLink() {
  const input = document.getElementById('shareLinkInput');
  input.select();
  input.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(input.value).then(() => {
    document.getElementById('copyBtn').textContent = '✅ Copied!';
    setTimeout(() => {
      document.getElementById('copyBtn').textContent = '📋 Copy';
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    document.execCommand('copy');
    document.getElementById('copyBtn').textContent = '✅ Copied!';
    setTimeout(() => {
      document.getElementById('copyBtn').textContent = '📋 Copy';
    }, 2000);
  });
}

// Preview form
function previewForm() {
  const link = document.getElementById('shareLinkInput').value;
  if (link) {
    window.open(link, '_blank');
  }
  closeModal();
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('shareModal');
  if (e.target === modal) {
    closeModal();
  }
});
